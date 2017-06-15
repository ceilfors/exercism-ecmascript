const romanToArabic = [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1]
]

const toRoman = (romanInput, arabicInput) => {
  const [biggestRoman, biggestArabic] = romanToArabic.find(([roman, arabic]) => arabicInput >= arabic)
  const romanTotal = romanInput += biggestRoman
  const arabicRemaining = arabicInput - biggestArabic
  return arabicRemaining === 0 ? romanTotal : toRoman(romanTotal, arabicRemaining)
}

export default (arabic) => toRoman('', arabic)
