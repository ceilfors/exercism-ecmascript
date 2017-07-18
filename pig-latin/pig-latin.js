const QU_CONSONANT_REPLACEMENT = ';:'

const splitOnIndex = (string, index) => [string.substring(0, index), string.substring(index)]

const findFirstVowelIndex = (input) => input.replace(/qu/, QU_CONSONANT_REPLACEMENT).search(/[aeiuo]/)

const translateWord = (word) => {
  const [consonantPrefix, remaining] = splitOnIndex(word, findFirstVowelIndex(word))
  return `${remaining}${consonantPrefix}ay`
}

export default class PigLatin {
  translate (english) {
    return english.split(' ')
      .map(word => translateWord(word))
      .join(' ')
  }
}
