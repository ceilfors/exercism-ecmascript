class Words {
  count (word) {
    const words = word.split(' ')
    return words.map(w => w.toLowerCase()).reduce((hash, e) => {
      hash[e] = e in hash ? ++hash[e] : 1
      return hash
    }, {})
  }
}

export default Words
