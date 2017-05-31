const clone = obj => JSON.parse(JSON.stringify(obj))

class School {
  constructor () {
    this.db = {}
  }

  roster () {
    return clone(this.db)
  }

  grade (grade) {
    return clone(this.db[grade] || [])
  }

  add (name, grade) {
    const names = this.grade(grade)
    this.db[grade] = names

    names.push(name)
    names.sort()
  }
}

export default School
