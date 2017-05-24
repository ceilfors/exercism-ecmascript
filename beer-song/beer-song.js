const eol = require('os').EOL

const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('')

const beerBottlesPhrase = (n, wall = false) => {
  const quantity = n === 0 ? 'no more' : n
  const word = n === 1 ? 'bottle' : 'bottles'
  const wallPhrase = wall ? ' on the wall' : ''
  return `${quantity} ${word} of beer${wallPhrase}`
}

const takeActionPhrase = (n) => {
  let phrases = {
    0: _ => 'Go to the store and buy some more',
    1: _ => 'Take it down and pass it around',
    2: n => 'Take one down and pass it around'
  }
  return phrases[Math.min(n, 2)](n)
}

const firstLine = (n) =>
  `${capitalize(beerBottlesPhrase(n, true))}, ${beerBottlesPhrase(n)}.`

const secondLine = (n) =>
  `${takeActionPhrase(n)}, ${beerBottlesPhrase(n - 1 < 0 ? 99 : n - 1, true)}.`

const verse = (n) =>
  firstLine(n) + eol + secondLine(n) + eol

const sing = (start = 99, end = 0) => {
  let verses = []
  for (let i = start; i >= end; i--) {
    verses.push(`${verse(i)}`)
  }
  return verses.join(eol)
}

export default { verse, sing }
