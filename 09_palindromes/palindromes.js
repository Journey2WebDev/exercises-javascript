const palindromes = function (text) {

  let text_forward = "";
  let text_reverse = "";
  
  for(i=0; i<text.length; i++){
    let letter = text.substring(i,i+1);

    if(letter.match(/[a-z]/i)){
      text_reverse = letter + text_reverse;
      text_forward = text_forward + letter;
    }
  }
  
  if (text_forward.toUpperCase() === text_reverse.toUpperCase()){
    return true;
  } else {
    return false;
  }

};

// Do not edit below this line
module.exports = palindromes;
