const strChunk = (str, size) => str.match(new RegExp(`.{1,${size}}`, 'g'))
const rotate2DArray = (array) => {
  const rotated = []
  array.forEach((row, i) => {
    row.split('').forEach((column, j) => {
      if (i === 0) {
        rotated.push([column])
      } else {
        rotated[j].push(column)
      }
    })
  })
  return rotated
}

class Crypto {
  constructor (input) {
    this.input = input
  }

  normalizePlaintext () {
    return this.input.replace(/[^\w]/g, '').toLowerCase()
  }

  size () {
    const normalized = this.normalizePlaintext()
    return Math.ceil(Math.sqrt(normalized.length))
  }

  plaintextSegments () {
    return strChunk(this.normalizePlaintext(), this.size())
  }

  ciphertext () {
    return rotate2DArray(this.plaintextSegments()).reduce((a, b) => a.concat(b), []).join('')
  }
}

export default Crypto
