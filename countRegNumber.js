function countRegNumber(num1){
return num1.split(',').length;
}
regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
assert.equal(regCount, 3)
