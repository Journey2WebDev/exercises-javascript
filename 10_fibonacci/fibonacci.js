const fibonacci = function(seq_num) {

  let fib = [1, 1];

  if(seq_num <= 0) {
    return "OOPS";
  } else if(typeof seq_num == "string"){
    seq_num = parseInt(seq_num);
  }

  for(n=1; n<=(seq_num-2); n++){
    fib_next = fib[(fib.length - 1)] + fib[(fib.length - 2)];
    fib.push(fib_next);
  }

  return fib.pop();

};

// Do not edit below this line
module.exports = fibonacci;
