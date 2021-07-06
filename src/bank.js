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
      debit: ' ',
      balance: this.balance});
  }

  withdrawal(amount) {
    this.balance -= amount;
    this.bankMovement.push({
      date: createDate(),
      credit: ' ',
      debit: amount,
      balance: this.balance });
  }
  printBankStatement() {
    console.log('date || credit || debit || balance');
    for (let i = 0; i < this.bankMovement.length; i++) {
      console.log(this.bankMovement[i].date + ' || ' + this.bankMovement[i].credit + ' || ' + this.bankMovement[i].debit + ' || ' + this.bankMovement[i].balance);
    }
    
  }
}
