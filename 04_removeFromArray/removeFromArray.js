const removeFromArray = function(xarray, val1, val2, val3, val4) { 
  // Create array for 'check' values (ie, are these values in xarray)
  let checkArray = [];

  if(typeof val1 != "undefined"){
    checkArray.push(val1);
  }
  if (typeof val2 != "undefined"){
    checkArray.push(val2);
  }
  if (typeof val3 != "undefined"){
    checkArray.push(val3);
  }
  if (typeof val4 != "undefined"){
    checkArray.push(val4);
  }

  // Nested loop to evaluate checkArray elements against each xarray element
  for(let v=0; v < checkArray.length; v++){

    for(let i=0; i < xarray.length; i++){
      checkResult = xarray[i] === checkArray[v];
    
      // If checkResult is TRUE, remove from xarray using splice()
      if(checkResult){
        xarray.splice(i,1);
      }
    }

  }
  return xarray;
};

// Do not edit below this line
module.exports = removeFromArray;
