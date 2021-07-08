'use strict'

describe('BankMovement', () => {
  let myAccount

  beforeEach(() => {
    myAccount = new BankAccount()
  });

  it('any transaction is created with an empty array for bankMovements', () => {
    expect(myAccount.bankMovements).toEqual([])
  })

  it('adds the transaction when the cliant makes a deposit of an amount', () => {
    myAccount.deposit(1000.00)
    expect(myAccount.bankMovements.length).toEqual(1)
  })

  it('adds the transaction when the cliant makes a withdrawal of an amount', () => {
    myAccount.withdrawal(200.00)
    expect(myAccount.bankMovements.length).toEqual(1)
  })

  it('date is not null in each transaction and is 10 characters long', () => {
    myAccount.deposit(100.00)
    expect(myAccount.bankMovements[0].date.length).toEqual(10)
  })
})
