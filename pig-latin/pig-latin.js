const CONSONANTS = 'bcdfghjklmnpqrstvwxyz'
const VOWELS = 'aeiou'.split('')

export default class PigLatin {
  translate (english) {
    if (english.startsWith('a')) {
      return english + 'ay'
    }
  }
}
