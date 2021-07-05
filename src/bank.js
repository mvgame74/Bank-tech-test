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
  }

  withdrawal(amount) {
    this.balance -= amount;
  }

}