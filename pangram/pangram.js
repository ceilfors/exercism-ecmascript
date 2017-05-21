class Pangram {
  constructor (sentence) {
    this.sentence = sentence
  }

  isPangram () {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')
    return alphabets.every(alphabet => this.sentence.includes(alphabet) || this.sentence.includes(alphabet.toUpperCase()))
  }
}

export default Pangram
