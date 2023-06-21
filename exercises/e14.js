// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  const results = [];

  for (let i = 0; i < array.length; i++) {
    const balance = array[i].balance;
    const deposits = array[i].deposits;
    const withdrawals = array[i].withdrawals;

    let shouldBeMyBalance = 0;

    if (deposits) {
      for (let j = 0; j < deposits.length; j++) {
        shouldBeMyBalance += deposits[j];
      }
    }

    if (withdrawals) {
      for (let j = 0; j < withdrawals.length; j++) {
        shouldBeMyBalance -= withdrawals[j];
      }
    }

    if (shouldBeMyBalance !== balance) {
      results.push(array[i]);
    }
  }
  return results;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
