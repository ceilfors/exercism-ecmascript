const eol = require('os').EOL

function sing (start = 99, end = 0) {
  let verses = ''
  for (let i = start; i >= end; i--) {
    verses += `${verse(i)}`
    if (i !== end) {
      verses += eol
    }
  }
  return verses
}

function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function verse (n) {
  return `${capitalize(beerBottles(n))} of beer on the wall, ${beerBottles(n)} of beer.
${act(n)}, ${beerBottles(n - 1)} of beer on the wall.
`
}

function beerBottles (n) {
  const quantity = n === 0 ? 'no more' : n === -1 ? 99 : n
  const word = n === 1 ? 'bottle' : 'bottles'
  return `${quantity} ${word}`
}

function act (n) {
  if (n === 0) {
    return 'Go to the store and buy some more'
  } else {
    const taken = n - 1 === 0 ? 'it' : 'one'
    return `Take ${taken} down and pass it around`
  }
}

export default { verse: verse, sing: sing }
