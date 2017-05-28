const eol = require('os').EOL

const animalMap = {
  1: 'fly',
  2: 'spider',
  3: 'bird',
  4: 'cat'
}

const getVerse = (animal) => {
  const verseStart = `I know an old lady who swallowed a ${animal}.`
  let verseMiddle
  let verseEnd = []
  let animals = []
  animals.push('cat')
  if (animals.includes(animal)) {
    verseMiddle = verseMiddle || 'Imagine that, to swallow a cat!'
    verseEnd.push('She swallowed the cat to catch the bird.')
  }
  animals.push('bird')
  if (animals.includes(animal)) {
    verseMiddle = verseMiddle || 'How absurd to swallow a bird!'
    verseEnd.push('She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.')
  }
  animals.push('spider')
  if (animals.includes(animal)) {
    verseMiddle = verseMiddle || 'It wriggled and jiggled and tickled inside her.'
    verseEnd.push('She swallowed the spider to catch the fly.')
  }
  animals.push('fly')
  if (animals.includes(animal)) {
    verseMiddle = verseMiddle || ''
    verseEnd.push(`I don't know why she swallowed the fly. Perhaps she'll die.`)
  }

  return [verseStart, verseMiddle, ...verseEnd]
    .filter(part => part.length !== 0)
    .join(eol) + eol
}

class Song {
  verse (line) {
    return getVerse(animalMap[line])
  }
}

export default Song
