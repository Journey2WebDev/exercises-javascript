const repeatString = function(str,n) {
  let newString = "";

  for(let i=0; i < n; i++){
    newString = newString + str;
  }

  if(n >= 0){
    return newString;
  } else {
    return "ERROR";
  }
  
};

// Do not edit below this line
module.exports = repeatString;
