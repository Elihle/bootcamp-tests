function countAllFromTown(regNum, location){
console.log(regNum);
  var num1 = regNum.split(', ');
  var town = [];
  for (var i=0; i<num1.length;i++){
    if (num1[i].startsWith(location)){
       town.push(num1[i]);

    }
  }
  return town.length;
}
