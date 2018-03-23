describe('yearsAgo' , function(){
    it('takes in a year(1998) and returns how many years ago that was(20)' , function(){
      assert.equal(yearsAgo('1998'), '20');
    });


    it('takes in a year (2091) and returns a negative number if the year is yet to come (-73)' , function(){
      assert.equal(yearsAgo('2091'), '-73');
  });

});
