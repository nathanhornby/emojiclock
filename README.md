# emojiClock

[![Code Climate](https://codeclimate.com/github/nathanhornby/emojiclock/badges/gpa.svg)](https://codeclimate.com/github/nathanhornby/emojiclock)

🕒 A node package for giving you emoji clocks.

## Install
```bash
npm install emojiclock --save
```

## Use
```javascript
var emojiClock = require('emojiclock')

var now = emojiClock.now() // Let's say it's 18:37
console.log(now + "  DING DONG") // 🕕 DING DONG

var time = emojiClock.get(3)
console.log(time + "  TICK TOCK") // 🕒 TICK TOCK
```
