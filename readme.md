# OddCommon Utils

A set of handy utils.

## Setup 📦 

To install in a project: `npm i @oddcommon/utils`

To import in a project: `import { randomNumber } from "@oddcommon/utils";`

## The functions 🛠 

* [Browser](#browser)
  * getQueryVar
* [Cookies](#cookies)
  * setCookie
  * deleteCookie
  * getCookie
* [CSS](#css)
  * css
* [Data](#data)
  * stringToBytes
  * bytesToString
* [Device](#device)
  * isMobile
  * isIPad
* [DOM](#dom)
  * q
  * qAll
* [Mouse](#mouse)
  * getMousePosition
* [Numbers](#numbers)
  * randomNumber
  * formatTwoDigits


### Browser 🏄‍♂️ 

#### getQueryVar(varName: string)
Return the value of query param from the user's URL.

### Cookies 🍪 

#### setCookie(cname: string, cvalue: string, exdays: number)
Sets a cookie.

#### deleteCookie(cname: string)
Deletes a cookie.

#### getCookie(cname: string)
Gets the value of a cookie.

### CSS 🎨 

#### css(...args: string[])
Converts an array of strings into a single, space-separated string for CSS classes. Designed for use in React when setting `className` based on state, e.g.:

```<div className={css(Styles.myComponent, isActive && Styles.active)} />```

### Data 🗄️ 

#### stringToBytes(string: string)
Converts a string to a Uint8Array. Useful when you need to communicate to Bluetooth (e.g., from a user's phone to a VR headset). ASCII only.

#### bytesToString(buffer: buffer)
Converts a Uint8Array to a string. Useful when you need to parse communications from Bluetooth (e.g., from a VR headset). ASCII only.

### Devices 📱 

#### isMobile()
Check is user agent is from a mobile device (not just a media query for device width).

#### isIPad()
Checks if user agent is from an iPad (does not return `true` for other tablets).

### DOM 💻 

#### q(selector: string, context: element)
A shorthand for `[element].querySelector()`; `context` defaults to `document`.

#### qAll(selector: string, context: element)
A shorthand for `[element].querySelectorAll()`; `context` defaults to `document`.

### Mouse 🖱️

#### getMousePosition(e: event, scrollingContainer: element)
Return the mouse position `{x, y}`. `scrollingContainer` defaults to `document.documentElement`.

### Numbers 🔢 

#### randomNumber(min: number, max: number)
Returns a random number between the `min` and `max`.

#### formatTwoDigits(index: number)
If `index` is a single digit, return a string of the number with a "0" affixed to the front of it; else, just return the original number.


