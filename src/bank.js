
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
    BankStatement(this.bankMovements)
  }
}
