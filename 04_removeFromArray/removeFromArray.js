const removeFromArray = function(inputArray, ...checkVals) { 
  // Nested loop evaluates each element of checkVals against each element of inputArray
  for(let v=0; v < checkVals.length; v++){
    for(let i=0; i < inputArray.length; i++){
      checkResult = inputArray[i] === checkVals[v];
      // If checkResult is TRUE, remove from inputArray using splice()
      if(checkResult){
        inputArray.splice(i,1);
      }
    }
  }
  return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
