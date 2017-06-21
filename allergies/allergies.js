const allergyIndices = [
  ['eggs', 1],
  ['peanuts', 2],
  ['shellfish', 4],
  ['strawberries', 8],
  ['tomatoes', 16],
  ['chocolate', 32],
  ['pollen', 64],
  ['cats', 12]
]

class Allergies {
  constructor (score) {
    this.score = score
  }

  list () {
    const allergyIndex = allergyIndices.find(([item, value]) => this.score - value === 0)
    return allergyIndex ? [allergyIndex[0]] : []
  }
}

export default Allergies
