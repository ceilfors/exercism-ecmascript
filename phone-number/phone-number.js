class PhoneNumber {
  constructor (phoneNumber) {
    this.phoneNumber = phoneNumber
  }

  number () {
    if (this.phoneNumber.match(/[a-z]/g)) {
      return null
    }
    const cleanNumber = this.phoneNumber.replace(/[^0-9]/g, '')
    if (cleanNumber.length === 11 && cleanNumber.startsWith('1')) {
      return cleanNumber.slice(1)
    } else if (cleanNumber.length !== 10) {
      return null
    } else {
      return cleanNumber
    }
  }
}

export default PhoneNumber
