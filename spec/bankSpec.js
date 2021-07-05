'use strict';

describe('BankAccount', () => {
  let myAccount;

  it('starts with a zero balance', () => {
    myAccount = new BankAccount();
    expect(myAccount.balance).toEqual(0);
  });
})
