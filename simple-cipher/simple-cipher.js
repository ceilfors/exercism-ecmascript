const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i)

const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const shift = (char, shiftLength) => String.fromCharCode(char.charCodeAt(0) + shiftLength)

const CHAR_CODE_A = 'a'.charCodeAt(0)
const CHAR_CODE_Z = 'z'.charCodeAt(0)

const wrap = char => {
  const difference = char.charCodeAt(0) - CHAR_CODE_Z - 1
  return String.fromCharCode(CHAR_CODE_A + difference)
}

const unwrap = char => {
  const difference = CHAR_CODE_A - char.charCodeAt(0) - 1
  return String.fromCharCode(CHAR_CODE_Z - difference)
}

const randomKey = length =>
  range(0, length)
    .map(_ => getRandomIntInclusive(CHAR_CODE_A, CHAR_CODE_Z))
    .map(code => String.fromCharCode(code))
    .join('')

export default class Cipher {
  constructor (key = randomKey(100)) {
    if (!key || key.match(/[A-Z]|\d/)) {
      throw new Error('Bad key')
    }
    this.key = key
  }

  shiftDistance (index) {
    return this.key.charCodeAt(index) - CHAR_CODE_A
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
