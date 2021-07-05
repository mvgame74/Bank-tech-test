class BankAccount{

  constructor(balance) {
    this.balance = 0.00;
    this.bankMovement = [];
  }

  getCurrentBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
    this.bankMovement.push('credit', amount, this.balance);
  }

  withdrawal(amount) {
    this.balance -= amount;
    this.bankMovement.push('debit', amount, this.balance);
  }

}