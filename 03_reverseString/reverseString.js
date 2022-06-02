const reverseString = function(xstr) {
  let newString = "";

  for(let c=(xstr.length - 1); c >= 0; c--){
    newString = newString + xstr[c];
  }

  return newString;
};

// Do not edit below this line
module.exports = reverseString;
