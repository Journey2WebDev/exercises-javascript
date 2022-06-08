const add = function(a,b) {
  if(a>=0 && b>=0){
    return a + b;
  }
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(ar) {
	total = 0;
  ar.forEach(e => {total += e});
  return total;
};

const multiply = function(ar) {
  total = 1;
  ar.forEach(e => total *= e);
  return total;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {

  let factNums = [];
  for(i=1; i <= num; i++){
    factNums[i] = i;
  }

  total = 1;
  factNums.forEach(e => total *= e);

  if(num == 0){
    return 1
  } else {
    return total;  
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
