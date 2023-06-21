// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    const deposits = array[i].deposits;

    if (!deposits) {
      result.push(array[i]);
      continue;
    }

    let total = 0;

    for (let j = 0; j < deposits.length; j++) {
      total += deposits[j];
    }

    if (total < 2000) {
      result.push(array[i]);
    }
  }

  return result;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
