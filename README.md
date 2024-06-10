<p align="center">
  <br>
  <img width="250" src="logo.png">
  <br>
</p>

<h1 align="center">
  Hamster Kombat Auto Clicker
</h1>

<h4 align="center">
    A script to automatically clicks on Hamster Kombat
    <br/>
    Works well in one session, it will refresh the page if click request is failed or page is not loaded. You can change a timeouts by changing variables in settings if you need.
</h4>

## Run Hamster Kombat in browser

This method allows you to use only one session (you don't need to recreate it everytime)

1. Open [Telegram Web](https://web.telegram.org)
2. Open [Hamster Kombat Bot](https://web.telegram.org/a/#7018368922)
3. Open Dev Tools (`Command+Option+I / F12 or Control+Shift+I`)
4. Press `Command+O / Control+O` and open file `telegram-web-app.js`.
5. In file find string `Object.defineProperty(WebApp, 'platform',`, it should be on 1325 position
6. Change `return webAppPlatform;` to `return 'ios';` and [save for overrides](https://senuravihanjayadeva.medium.com/local-overrides-in-chrome-devtools-f4a148de30c2#:~:text=Locate%20the%20file%20you%20want,overrides%E2%80%9D%20from%20the%20context%20menu.) this file
7. Refresh the page and try to open Notcoin Bot

If you can see the coin and doesn't see an message that you should use mobile then everything is ok

### Run autoclicker

1. Install [Violentmonkey](https://violentmonkey.github.io/)
2. Open Dev Tools (`Command+Option+I / F12 or Control+Shift+I`)
3. Add script from [script.js](https://github.com/Ltwoz/hamster-kombat-bot/blob/master/script.js) into Violentmonkey
4. Open [Hamster Kombat Bot](https://web.telegram.org/a/#7018368922)
5. Refresh the page

If something breaks, just try to reload the page.

### Script

You can find it [here in script.js](https://github.com/Ltwoz/hamster-kombat-bot/blob/master/script.js)