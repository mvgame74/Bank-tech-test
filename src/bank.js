class BankAccount {
  constructor(balance) {
    this.balance = 0.00
    this.bankMovements = []
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
    if (typeMovement === 'credit') {
      this.bankMovements.push({
        date: createDate(),
        credit: amount,
        debit: '',
        balance: balance
      })
    } else {
      this.bankMovements.push({
        date: createDate(),
        credit: '',
        debit: amount,
        balance: balance
      })
    }
  }

  printBankStatement () {
    console.log('date || credit || debit || balance')
    for (let i = 0; i < this.bankMovements.length; i++) {
      console.log(this.bankMovements[i].date + ' || ' +
                  this.bankMovements[i].credit + ' || ' +
                  this.bankMovements[i].debit + ' || ' +
                  this.bankMovements[i].balance)
    }
  }
}
