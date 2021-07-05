'use strict';

describe('BankAccount', () => {
  let myAccount;

  beforeEach(() => {
    myAccount = new BankAccount();
  });

  it('starts with a zero balance', () => {
    expect(myAccount.balance).toEqual(0);
  });

  it('gives you the balance as we start', () => {
    expect(myAccount.getCurrentBalance()).toEqual(0);
  });

})
