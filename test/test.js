var assert = require('assert')
var emojiclock = require('../index')

describe('emojiclock', function() {
  describe('emojiclock.now()', function() {
    it("should give me an emoji for the current hour", function() {
      var result = emojiclock.now
      assert.notEqual(result, null)
    })
  })
  describe('emojiclock.get()', function() {
    it("should give me the right emoji for a given hour", function() {
      var result = emojiclock.get(8)
      assert.equal(result, "🕗");
    })
  })
  describe('emojiclock.time()', function() {
    it("should give me the right emoji for a Date() object", function() {
      var time = new Date('January 23, 1985 20:23:23')
      // var birthday = new Date('1995-12-17T03:24:00');
      var result = emojiclock.time(time)
      assert.equal(result, "🕗")
    })
    it("should give me the right emoji for a 13 character UNIX timestamp string", function() {
      var time = '475359803000'
      var result = emojiclock.time(time)
      assert.equal(result, "🕗")
    })
    it("should give me the right emoji for a 10 character UNIX timestamp string", function() {
      var time = '475359803'
      var result = emojiclock.time(time)
      assert.equal(result, "🕗")
    })
    it("should give me the right emoji for a 13 character UNIX timestamp number", function() {
      var time = 475359803000
      var result = emojiclock.time(time)
      assert.equal(result, "🕗")
    })
    it("should give me the right emoji for a 10 character UNIX timestamp number", function() {
      var time = 475359803
      var result = emojiclock.time(time)
      assert.equal(result, "🕗")
    })
  })
})
