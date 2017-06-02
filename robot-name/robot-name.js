const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
const pad = (string) => ('00' + string).substring(string.length - 1)

class Robot {
  constructor () {
    this._name = this.generateName()
    this.usedNames = new Set()
    this.usedNames.add(this._name)
  }

  reset () {
    let newName = this.generateName()
    while (this.usedNames.has(newName)) {
      newName = this.generateName()
    }
    this._name = newName
    this.usedNames.add(newName)
  }

  get name () {
    return this._name
  }

  generateName () {
    return [
      capitalLetters[randomInt(0, 25)],
      capitalLetters[randomInt(0, 25)],
      pad(randomInt(0, 999).toString())
    ].join('')
  }
}

export default Robot
