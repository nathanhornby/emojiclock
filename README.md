# emojiClock

A node package for giving you an emoji clock for the current hour.

## Install
```bash
npm install emojiclock
```

## Use
```javascript
var emojiClock = require('emojiclock')

var clock = emojiClock.now() // Let's say it's 18:37
console.log(clock + " DING DONG") // 🕕 DING DONG
```

If you just want a specific clock you can currently do the following:

```javascript
emojiClock.now(true, 7) // 🕖
emojiClock.now(true, 1) // 🕐
```
