const ftoc = function(ftemp) {
  // Convert fahrenheit to celsius
  let ctemp = ((ftemp - 32)*5)/9;
  // If result isn't a whole number (ie, a decimal exists), round to 1 decimal precision
  if(ctemp.toString().includes(".")){
    ctemp = parseFloat(ctemp.toFixed(1));
  }
  
  return ctemp;
};

const ctof = function(ctemp) {
  // Convert celsius to fahrenheit
  let ftemp = ctemp*(9/5) + 32;
  // If result isn't a whole number (ie, a decimal exists), round to 1 decimal precision
  if(ftemp.toString().includes(".")){
    ftemp = parseFloat(ftemp.toFixed(1));
  }
  
  return ftemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
