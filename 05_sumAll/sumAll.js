const sumAll = function(...args) {
  // Check that all args are integers
  for(let a=0; a < args.length; a++){
    if(typeof args[a] != "number"){
      return "ERROR";
    } else if (args[a] <= 0){
      return "ERROR";
    }
  }

  // Sort array so we know lower number is first and larger is second
  args.sort();

  // Formula n(n+1)/2 ...will sum all integers from 1 up to n
  let upperSum = args[1] * (args[1] + 1) / 2;
  let lowerSum = args[0] * (args[0] + 1) / 2;

  // Get difference of upperSum - lowerSum...plus args[0] for endpoint
  let sumVal = (upperSum - lowerSum) + args[0];

  return sumVal;
};

// Do not edit below this line
module.exports = sumAll;
