# 🕒 emojiclock

[![Code Climate](https://codeclimate.com/github/nathanhornby/emojiclock/badges/gpa.svg)](https://codeclimate.com/github/nathanhornby/emojiclock)

A node package for giving you emoji clocks.

## Installing emojiclock
```bash
npm install emojiclock --save
```
```javascript
var emojiclock = require('emojiclock')
```

## Using emojiclock

emojiclock returns a clock emoji in the form of a string.

### emojiclock.now

Returns a clock emoji for the current hour:

```javascript
var clock = emojiclock.now() // Let's pretend it's 18:37
console.log(clock + "  TICK TOCK: Something happened") // 🕕 TICK TOCK: Something happened
```

### emojiclock.get(hour)

Returns a clock emoji for a given hour:

```javascript
var clock = emojiclock.get(3) // 24hr support, i.e. 15 also works
console.log(clock + "  TICK TOCK: Something happened") // 🕒 TICK TOCK: Something happened
```

### emojiclock.time(time)

Returns a clock emoji for a given timestamp or `Date()` object:

```javascript
var time = new Date('January 23, 1985 20:23:23')
var clock = emojiclock.time(time)
console.log(clock + "  TICK TOCK: Something happened") // 🕗 TICK TOCK: Something happened

var time = 475359803
var clock = emojiclock.time(time)
console.log(clock + "  TICK TOCK: Something happened") // 🕗 TICK TOCK: Something happened
```

If using a `Date()` object it must be an actual object, not a string representation. A timestamp can be 10 or 13 characters long (seconds/milliseconds) and can be a `string` *or* a `number`.
