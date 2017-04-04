var assert = require('assert')
var emojiClock = require('../index')

describe('Emoji clocks', function() {
  it("should give me a 2 O'Clock emoji", function() {
    var result = emojiClock.now(true, 2)
    assert.equal(result, "🕑");
  });
  it("should give me a 4 O'Clock emoji", function() {
    var result = emojiClock.now(true, 4)
    assert.equal(result, "🕓");
  });
  it("should give me an 8 O'Clock emoji", function() {
    var result = emojiClock.now(true, 8)
    assert.equal(result, "🕗");
  });
});
