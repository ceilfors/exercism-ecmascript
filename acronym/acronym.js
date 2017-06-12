const parse = (phrase) => {
  return phrase
    .replace(/:.*/, '')
    .replace(/([A-Z])/g, ' $1')
    .replace(/-/, ' ')
    .split(' ')
    .reduce((acronym, word) => acronym + word.charAt(0).toUpperCase(), '')
}

export default {parse}
