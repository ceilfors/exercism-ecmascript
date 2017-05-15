//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Bob {
  hey (message) {
    if (message.trim().length === 0) {
      return 'Fine. Be that way!'
    } else if (message.match(/[a-z]/i) && message.toUpperCase() === message) {
      return 'Whoa, chill out!'
    } else if (message.endsWith('?')) {
      return 'Sure.'
    } else {
      return 'Whatever.'
    }
  }
}

export default Bob
