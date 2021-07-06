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
    this.bankMovement.push({
      date: createDate(),
      credit: amount,
      debit: null,
      balance: this.balance });
  }

  withdrawal(amount) {
    this.balance -= amount;
    this.bankMovement.push({
      date: createDate(),
      credit: null,
      debit: amount,
      balance: this.balance });
  }

}