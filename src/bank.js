class BankAccount {
  constructor(balance) {
    this.balance = 0.00
    this.bankMovement = []
  }

  getCurrentBalance () {
    return this.balance
  }

  deposit (amount) {
    this.balance += amount
    this.createBankMovement('credit', amount, this.balance)
  }

  withdrawal (amount) {
    this.balance -= amount
    this.createBankMovement('debit', amount, this.balance)
  }

  createBankMovement(typeMovement, amount, balance) {
    let midValue = ''
    if (typeMovement === 'credit') {
      midValue = 'credit: ' + amount + ', debit: '
    }

    else {
      midValue = 'credit: , debit: ' + amount
    }
    console.log(midValue)

    this.bankMovement.push({
      date: createDate(),
      midValue,
      balance: balance
    })
    console.log(this.bankMovement)
  }

  printBankStatement () {
    console.log('date || credit || debit || balance')
    for (let i = 0; i < this.bankMovement.length; i++) {
      console.log(this.bankMovement[i].date + ' || ' + this.bankMovement[i].credit + ' || ' + this.bankMovement[i].debit + ' || ' + this.bankMovement[i].balance)
    }
  }
}
