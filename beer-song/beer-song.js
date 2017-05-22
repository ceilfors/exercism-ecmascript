function verse (n) {
  const taken = n - 1 === 0 ? 'it' : 'one'
  return `${beerBottles(n)} of beer on the wall, ${beerBottles(n)} of beer.
Take ${taken} down and pass it around, ${beerBottles(n - 1)} of beer on the wall.
`
}

function beerBottles (numOfBottles) {
  const quantity = numOfBottles === 0 ? 'no more' : numOfBottles
  const word = numOfBottles === 1 ? 'bottle' : 'bottles'
  return `${quantity} ${word}`
}

export default { verse: verse }
