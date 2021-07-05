class BankAccount{

  constructor(balance) {
    this.balance = 0.00;
  }

  getCurrentBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

}