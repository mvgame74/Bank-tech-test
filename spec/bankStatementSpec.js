'use strict'

describe('BankMovement', () => {
  let myAccount

  it('calls the printing statement method', () => {
    myAccount = new BankAccount()
    myAccount.deposit(100.00)
    let spy = spyOn(myAccount, 'printBankStatement')
    myAccount.printBankStatement()
    expect(spy).toHaveBeenCalled()
  })
})
