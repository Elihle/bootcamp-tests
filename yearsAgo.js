function yearsAgo(year){
  console.log(year);
  var d = new Date();
  var fullYear = d.getFullYear();
  console.log(fullYear);
  var answer = fullYear - year;
  return answer;

};
