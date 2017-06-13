const parse = (phrase) => {
  return phrase
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/-/, ' ')
    .split(' ')
    .reduce((acronym, word) => acronym + word.charAt(0).toUpperCase(), '')
}

export default {parse}
