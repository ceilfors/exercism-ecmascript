const allergyIndices = [
  ['eggs', 1],
  ['peanuts', 2],
  ['shellfish', 4],
  ['strawberries', 8],
  ['tomatoes', 16],
  ['chocolate', 32],
  ['pollen', 64],
  ['cats', 128]
]

class Allergies {
  constructor (score) {
    this.score = score % 256
  }

  list () {
    const allergies = allergyIndices.reduceRight(([allergies, score], [allergyItem, allergyValue]) => {
      return score - allergyValue >= 0
        ? [[allergyItem, ...allergies], score - allergyValue]
        : [allergies, score]
    }, [[], this.score])[0]

    return allergies
  }

  allergicTo (allergy) {
    return this.list().includes(allergy)
  }
}

export default Allergies
