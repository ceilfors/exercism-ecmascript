//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Bob {
  hey (message) {
    if (message.toUpperCase() === message) {
      return 'Whoa, chill out!'
    } else if (message.endsWith('?')) {
      return 'Sure.'
    }
    return 'Whatever.'
  }
}

export default Bob
