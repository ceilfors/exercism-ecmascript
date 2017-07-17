const QU_REPLACEMENT = ';'

const moveBackStartingConsonants = (input) => {
  const string = input.replace(/qu/, QU_REPLACEMENT)
  const firstVowelIndex = string.search(/[aeiuo]/)
  const startingConsonants = string.substring(0, firstVowelIndex)
  const remainingString = string.substring(firstVowelIndex, string.length)
  const result = remainingString + startingConsonants
  return result.replace(QU_REPLACEMENT, 'qu')
}

export default class PigLatin {
  translate (english) {
    return moveBackStartingConsonants(english) + 'ay'
  }
}
