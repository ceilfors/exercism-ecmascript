const sort = word => word.split('').sort().join('')

class Anagram {
  constructor (word) {
    this.word = word
  }

  matches (words) {
    return words
           .filter(word => word.toLowerCase() !== this.word.toLowerCase())
           .filter(word => sort(word.toLowerCase()) === sort(this.word.toLowerCase()))
  }
}

export default Anagram
