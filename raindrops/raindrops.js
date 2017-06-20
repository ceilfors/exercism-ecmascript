const raindropSounds = [
  [3, 'Pling'],
  [5, 'Plang'],
  [7, 'Plong']
]

class Raindrops {
  convert (num) {
    const raindrops = raindropSounds
      .filter(raindropSound => num % raindropSound[0] === 0)
      .map(raindropSound => raindropSound[1])

    return raindrops.length ? raindrops.join('') : num.toString()
  }
}

export default Raindrops
