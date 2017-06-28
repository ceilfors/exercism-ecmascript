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
}

export default Crypto
