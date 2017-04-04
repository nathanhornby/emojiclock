# emojiClock

🕒 A node package for giving you emoji clocks.

## Install
```bash
npm install emojiclock
```

## Use
```javascript
var emojiClock = require('emojiclock')

var now = emojiClock.now() // Let's say it's 18:37
console.log(now + "  DING DONG") // 🕕 DING DONG

var time = emojiClock.get(3)
console.log(time + "  TICK TOCK") // 🕒 DING DONG
```
