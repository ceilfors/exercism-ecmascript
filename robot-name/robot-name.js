const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
const pad = (string) => ('00' + string).substring(string.length - 1)

const usedNames = new Set()

const generateName = () => {
  return [
    capitalLetters[randomInt(0, 25)],
    capitalLetters[randomInt(0, 25)],
    pad(randomInt(0, 999).toString())
  ].join('')
}

const generateUniqueName = (usedNames) => {
  let name
  do {
    name = generateName()
  } while (usedNames.has(name))
  usedNames.add(name)
  return name
}

class Robot {
  constructor () {
    this.reset()
  }

  reset () {
    this._name = generateUniqueName(usedNames)
  }

  get name () {
    return this._name
  }
}

export default Robot
