const findTheOldest = function(obj) {

  function ageProperty(o){
    let todayYear = new Date().getFullYear();
  
    if(!o.hasOwnProperty("yearOfDeath")){
      o["yearOfDeath"] = todayYear;
    }
  
    o["age"] = o.yearOfDeath - o.yearOfBirth;
    return o;
  };

  const temp = obj.map(ageProperty);
  const temp2 = obj.sort((a,b) => a.age < b.age ? 1 : -1);
  
  let oldest = temp2[0];
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
