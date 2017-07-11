const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i)
const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
const shift = (char, shiftLength) => String.fromCharCode(char.charCodeAt(0) + shiftLength)
const wrap = char => {
  const difference = char.charCodeAt(0) - 'z'.charCodeAt(0) - 1
  return String.fromCharCode('a'.charCodeAt(0) + difference)
}
const unwrap = char => {
  const difference = 'a'.charCodeAt(0) - char.charCodeAt(0) - 1
  return String.fromCharCode('z'.charCodeAt(0) - difference)
}
const randomKey = length =>
  range(0, length)
    .map(item => String.fromCharCode(getRandomIntInclusive('a'.charCodeAt(0), 'z'.charCodeAt(0))))
    .join('')

export default class Cipher {
  constructor (key = randomKey(100)) {
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
      .map(char => char > 'z' ? wrap(char) : char)
      .join('')
  }

  decode (input) {
    return input.split('')
      .map((char, index) => shift(char, -this.shiftDistance(index)))
      .map(char => char < 'a' ? unwrap(char) : char)
      .join('')
  }
}
