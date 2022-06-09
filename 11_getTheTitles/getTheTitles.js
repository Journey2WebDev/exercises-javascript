const getTheTitles = function(array_in) {
  let array_out = [];
  array_in.forEach(e => array_out.push(e.title));
  return array_out;
};

// Do not edit below this line
module.exports = getTheTitles;
