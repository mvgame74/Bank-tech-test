'use strict';

describe('BankAccount', () => {
  let myAccount;

  beforeEach(() => {
    myAccount = new BankAccount();
  });

  it('starts with a zero balance', () => {
    expect(myAccount.balance).toEqual(0.00);
  });

  it('gives you the balance as we start', () => {
    expect(myAccount.getCurrentBalance()).toEqual(0.00);
  });

  it('increases the balance when the client makes a deposit of an amount', () => {
    myAccount.deposit(1000.00);
    expect(myAccount.getCurrentBalance()).toEqual(1000.00);
  });


})
