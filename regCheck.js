function regCheck(regNumber, location){
	var holder = regNumber.indexOf(location);
  	return (holder != -1);
}

var isGP = regCheck('GP 123', 'GP');
console.log(isGP);     
