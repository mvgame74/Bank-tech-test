function BankStatement (bankMovements) {
  console.log('date || credit || debit || balance')
  for (let i = 0; i < bankMovements.length; i++) {
    console.log(bankMovements[i].date + ' || ' +
                bankMovements[i].credit + ' || ' +
                bankMovements[i].debit + ' || ' +
                bankMovements[i].balance)
  }
}
