// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 *  ... * N

// Be careful 1000! has 2568 digits...

function zeros (n) {
  var tz = 0;
  while(n>0){
    n=Math.floor(n/5);
    tz+=n
  }
  return tz;
}

console.log(zeros(30))