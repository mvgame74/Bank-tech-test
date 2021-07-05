'use strict';

describe('BankAccount', () => {
  let myAccount;

  it('starts with a zero balance', () => {
    myAccount = new BankAccount();
    expect(myAccount.balance).toEqual(0);
  });

  it('gives you the balance as we start', () => {
    myAccount = new BankAccount();
    expect(myAccount.getCurrentBalance()).toEqual(0);
  });

})
