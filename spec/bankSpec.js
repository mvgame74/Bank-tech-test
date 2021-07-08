'use strict';

describe('BankAccount', () => {
  let myAccount

  beforeEach(() => {
    myAccount = new BankAccount()
  });

  it('starts with a zero balance', () => {
    expect(myAccount.balance).toEqual(0.00)
  });

  it('gives you the balance as we start', () => {
    expect(myAccount.getCurrentBalance()).toEqual(0.00)
  });

  it('increases the balance when the client makes a deposit of an amount', () => {
    myAccount.deposit(1000.00)
    expect(myAccount.getCurrentBalance()).toEqual(1000.00)
  })

  it('adds the transaction when the cliant makes a deposit of an amount', () => {
    myAccount.deposit(1000.00)
    expect(myAccount.bankMovements.length).toEqual(1)
  })

  it('decreases the balance when the client makes a withdrawal of an amount', () => {
    myAccount.withdrawal(500.00)
    expect(myAccount.getCurrentBalance()).toEqual(-500.00)
  })

  it('adds the transaction when the cliant makes a withdrawal of an amount', () => {
    myAccount.withdrawal(200.00)
    expect(myAccount.bankMovements.length).toEqual(1)
  })

  it('any account is created with an empty array for bankMovements', () => {
    expect(myAccount.bankMovements).toEqual([])
  })

  it('date is not null in each transaction and is 10 characters long', () => {
    myAccount.deposit(100.00)
    expect(myAccount.bankMovements[0].date.length).toEqual(10)
  })

  it('calls the printing statement method', () => {
    myAccount.deposit(100.00)
    let spy = spyOn(myAccount, 'printBankStatement')
    myAccount.printBankStatement()
    expect(spy).toHaveBeenCalled()
  })
})
