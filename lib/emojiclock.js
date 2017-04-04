exports.now = function(debug, override) {

  var date = new Date()
  var hour = date.getHours()

  if (debug === true && override) {
    hour = override
  }

  switch (hour) {
    case 0:
    case 12:
      return "🕛"
      break;
    case 1:
    case 13:
      return "🕐"
      break;
    case 2:
    case 14:
      return "🕑"
      break;
    case 3:
    case 15:
      return "🕒"
      break;
    case 4:
    case 16:
      return "🕓"
      break;
    case 5:
    case 17:
      return "🕔"
      break;
    case 6:
    case 18:
      return "🕕"
      break;
    case 7:
    case 19:
      return "🕖"
      break;
    case 8:
    case 20:
      return "🕗"
      break;
    case 9:
    case 21:
      return "🕘"
      break;
    case 10:
    case 22:
      return "🕙"
      break;
    case 11:
    case 23:
      return "🕚"
      break;
    default:
      return "🕑"
  }
}
