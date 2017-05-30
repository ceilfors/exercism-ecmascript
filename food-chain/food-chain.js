const eol = require('os').EOL
const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i)

const foodChains = [
  {
    animal: 'horse',
    verseMiddle: "She's dead, of course!",
    verseEnd: ''
  },
  {
    animal: 'cow',
    verseMiddle: `I don't know how she swallowed a cow!`,
    verseEnd: 'She swallowed the cow to catch the goat.'
  },
  {
    animal: 'goat',
    verseMiddle: 'Just opened her throat and swallowed a goat!',
    verseEnd: 'She swallowed the goat to catch the dog.'
  },
  {
    animal: 'dog',
    verseMiddle: 'What a hog, to swallow a dog!',
    verseEnd: 'She swallowed the dog to catch the cat.'
  },
  {
    animal: 'cat',
    verseMiddle: 'Imagine that, to swallow a cat!',
    verseEnd: 'She swallowed the cat to catch the bird.'
  },
  {
    animal: 'bird',
    verseMiddle: 'How absurd to swallow a bird!',
    verseEnd: 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.'
  },
  {
    animal: 'spider',
    verseMiddle: 'It wriggled and jiggled and tickled inside her.',
    verseEnd: 'She swallowed the spider to catch the fly.'
  },
  {
    animal: 'fly',
    verseMiddle: '',
    verseEnd: `I don't know why she swallowed the fly. Perhaps she'll die.`
  }
]

const getVerse = (chain) => {
  const startIndex = foodChains.length - chain
  const animal = foodChains[startIndex].animal
  const verseStart = `I know an old lady who swallowed a ${animal}.`
  const verseMiddle = foodChains[startIndex].verseMiddle
  const verseEnd = foodChains
    .slice(startIndex, animal === 'horse' ? startIndex + 1 : foodChains.length)
    .map(foodChain => foodChain.verseEnd)
  return [verseStart, verseMiddle, ...verseEnd]
    .filter(part => part.length !== 0)
    .join(eol) + eol
}

class Song {
  verse (chain) {
    return getVerse(chain)
  }

  verses (start, end) {
    return range(start, end).map(chain => getVerse(chain)).join(eol) + eol
  }
}

export default Song
