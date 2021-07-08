
function bankMovement(typeMovement, amount, balance) {
  if (typeMovement === 'credit') {
    this.date = createDate()
    this.credit = amount
    this.debit = ''
    this.balance = balance
  } else {
    this.date = createDate()
    this.credit = ''
    this.debit = amount
    this.balance = balance
  }
}
