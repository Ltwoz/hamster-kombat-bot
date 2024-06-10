// ==UserScript==
// @name        hamster-kombat-bot
// @namespace   Violentmonkey Scripts
// @match       https://*.telegram.org/*#@hamster_kombat_bot
// @match       https://*.hamsterkombat.io/*
// @grant       GM_addValueChangeListener
// @grant       GM_removeValueChangeListener
// @grant       GM_setValue
// @version     1.0
// @author      Ltwoz
// @homepageURL https://github.com/Ltwoz/hamster-kombat-bot
// ==/UserScript==

(function() {
  // Settings
  const settings = {
    minEnergy: 50,
    minInterval: 50,
    maxInterval: 200,
    minEnergyRefillDelay: 60000,
    maxEnergyRefillDelay: 180000,
    maxRetries: 5
  };

  let retryCount = 0;

  // Helpers
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Clicker
  function performClick() {
    const energyElement = document.getElementsByClassName("user-tap-energy")[0];
    const buttonElement = document.getElementsByClassName('user-tap-button')[0];

    if (!energyElement || !buttonElement) {
        console.log("%c[Hamster Kombat Auto-Click]", "background: #483d8b; color: #fff; padding: 5px;");
        console.log("%cElement not found, retrying...", "background: #483d8b; color: #fff; padding: 5px;");

        retryCount++;
        if (retryCount >= settings.maxRetries) {
            console.log("%cMax retries reached, reloading page...", "background: #483d8b; color: #fff; padding: 5px;");
            location.reload();
        } else {
            setTimeout(() => {
                setTimeout(performClick, getRandomNumber(settings.minInterval, settings.maxInterval));
            }, 2000);
        }
        return;
    }

    retryCount = 0;

    const energy = parseInt(energyElement.getElementsByTagName("p")[0].textContent.split(" / ")[0]);
    if (energy > settings.minEnergy) {
        const randomX = Math.floor(Math.random() * 380);
        const randomY = Math.floor(Math.random() * 300);

        const pointerDownEvent = new PointerEvent('pointerdown', { clientX: randomX, clientY: randomY });
        const pointerUpEvent = new PointerEvent('pointerup', { clientX: randomX, clientY: randomY });

        buttonElement.dispatchEvent(pointerDownEvent);
        buttonElement.dispatchEvent(pointerUpEvent);
    } else {
        console.log("%c[Hamster Kombat Auto-Click]", "background: #483d8b; color: #fff; padding: 5px;");
        console.log("%cInsufficient energy, pausing script for energy refill.", "background: #483d8b; color: #fff; padding: 5px;");

        const randomEnergyRefillDelay = getRandomNumber(settings.minEnergyRefillDelay, settings.maxEnergyRefillDelay);
        const delayInSeconds = randomEnergyRefillDelay / 1000;

        console.log(`%cEnergy refill delay set to: ${delayInSeconds} seconds.`, "background: #483d8b; color: #fff; padding: 5px;");

        setTimeout(performClick, randomEnergyRefillDelay);
        return;
    }

    const randomInterval = getRandomNumber(settings.minInterval, settings.maxInterval);
    setTimeout(performClick, randomInterval);
  }

  setTimeout(() => {
        console.log("%c[Hamster Kombat Auto-Click]", "background: #483d8b; color: #fff; padding: 5px;");
        console.log("%cScript starting after 5 seconds delay...", "background: #483d8b; color: #fff; padding: 5px;");
        performClick();
    }, 5000);
})();
