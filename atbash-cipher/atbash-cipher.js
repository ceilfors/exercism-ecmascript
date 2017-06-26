const mapping = {
  a: 'z',
  b: 'y',
  c: 'x',
  d: 'w',
  e: 'v',
  f: 'u',
  g: 't',
  h: 's',
  i: 'r',
  j: 'q',
  k: 'p',
  l: 'o',
  m: 'n',
  n: 'm',
  o: 'l',
  p: 'k',
  q: 'j',
  r: 'i',
  s: 'h',
  t: 'g',
  u: 'f',
  v: 'e',
  w: 'd',
  x: 'c',
  y: 'b',
  z: 'a'
}

const cipher = (letter) => {
  return mapping.hasOwnProperty(letter.toLowerCase()) ? mapping[letter.toLowerCase()] : letter
}

const encode = (input) => {
  return input.replace(/[^A-Za-z0-9]/g, '')
    .split('')
    .map(cipher)
    .map((a, index, arr) => ((index + 1) % 5 === 0 && index !== arr.length - 1) ? a + ' ' : a)
    .join('')
}

export default {encode}
