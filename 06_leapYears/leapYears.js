const leapYears = function(num) {
  
  let isLeapYear = false;

  if(num % 400 == 0){
    isLeapYear = true;
  } else if (num % 4 == 0 && num % 100 != 0){
    isLeapYear = true;
  } else {
    isLeapYear = false;
  }
  return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
