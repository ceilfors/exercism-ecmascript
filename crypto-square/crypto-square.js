const strChunk = (str, size) => str.match(new RegExp(`.{1,${size}}`, 'g'))

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
    const rotated = []
    const plaintextSegments = this.plaintextSegments()
    plaintextSegments.forEach((segment, i) => {
      segment.split('').forEach((item, j) => {
        if (i === 0) {
          rotated.push([item])
        } else {
          rotated[j].push(item)
        }
      })
    })
    return rotated.reduce((a, b) => a.concat(b), []).join('')
  }
}

export default Crypto
