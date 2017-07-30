const secrets = [ 'wink', 'double blink', 'close your eyes', 'jump' ]
const isReverseSecret = binaryInput => binaryInput.length === 5 && binaryInput[0] === '1'

export default class SecretHandshake {
  constructor (input) {
    if (typeof (input) !== 'number') throw new Error('Handshake must be a number')
    this.input = input
  }

  commands () {
    const binaryInput = this.input.toString(2).split('')
    const commands = binaryInput
      .reverse()
      .slice(0, 4)
      .map((value, index) => value === '1' ? secrets[index] : null)
      .filter(value => value !== null)
    return isReverseSecret(binaryInput) ? commands.reverse() : commands
  }
}
