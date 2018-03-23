function countAllPaarl(regNum){
  console.log(regNum);

  var num1 = regNum.split(', ');
  var paarl = [];
  for (var i=0; i<num1.length;i++){
    if (num1[i].startsWith('CJ')){
       paarl.push(num1[i]);
    }
  }
  return paarl.length;
}  
