const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

class Robot {
  constructor () {
    this._name = this.generateName()
  }

  reset () {
    this._name = this.generateName()
  }

  get name () {
    return this._name
  }

  generateName () {
    return [
      capitalLetters[getRandomIntInclusive(0, 26)],
      capitalLetters[getRandomIntInclusive(0, 26)],
      getRandomIntInclusive(100, 999)
    ].join('')
  }
}

export default Robot
