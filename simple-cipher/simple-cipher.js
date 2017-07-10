const shift = (char, shiftLength) => String.fromCharCode(char.charCodeAt(0) + shiftLength)

export default class Cipher {
  constructor (key = 'ddddddddddddddddddddddddd') {
    if (!key || key.match(/[A-Z]|\d/)) {
      throw new Error('Bad key')
    }
    this.key = key
  }

  shiftDistance (index) {
    return this.key.charCodeAt(index) - 'a'.charCodeAt(0)
  }

  encode (input) {
    return input.split('')
      .map((char, index) => shift(char, +this.shiftDistance(index)))
      .join('')
  }

  decode (input) {
    return input.split('')
      .map((char, index) => shift(char, -this.shiftDistance(index)))
      .join('')
  }
}
