/**
 * Return a fibonacci sequence as an array.
 * 
 * Type `node fibonacci.js` to execute CLI program 
 * 
 * @param n
 * @return {number[]}
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ask user for the n input
rl.question(`n : `, (n) => {

    console.log(fibonacci(n));
    rl.close();

});

function fibonacci(n) {
    const fibSequence = [1];
  
    let currentValue = 1;
    let previousValue = 0;
  
    if (n === 1) {
      return fibSequence;
    }
  
    let iterationsCounter = n - 1;
  
    while (iterationsCounter) {
      currentValue += previousValue;
      previousValue = currentValue - previousValue;
  
      fibSequence.push(currentValue);
  
      iterationsCounter -= 1;
    }
  
    return fibSequence;
  }

  