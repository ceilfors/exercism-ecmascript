class Words {
  count (word) {
    return word
        .trim()
        .split(/\s+/)
        .map(w => w.toLowerCase())
        .reduce((hash, e) => {
          hash[e] = hash.hasOwnProperty(e) ? ++hash[e] : 1
          return hash
        }, {})
  }
}

export default Words
