
const isPrime = value => {
  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      return false
    }
  }
  return value > 1
}
const assert = require('assert')

export default class DiffieHellman {
  constructor (p, g) {
    assert(isPrime(p), 'p is not prime')
    assert(isPrime(g), 'g is not prime')
    this.p = p
    this.g = g
  }

  getPublicKeyFromPrivateKey (privateKey) {
    assert(privateKey > 1, 'private key must be greater than 1')
    assert(privateKey < this.p, 'private key must be less than p')
    return this.g ** privateKey % this.p
  }

  getSharedSecret (privateKey, publicKey) {
    return publicKey ** privateKey % this.p
  }
}
