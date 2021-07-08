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
    this.bankMovements.push(new bankMovement('credit', amount, this.balance))
  }

  withdrawal (amount) {
    this.balance -= amount
    this.bankMovements.push(new bankMovement('debit', amount, this.balance))
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
