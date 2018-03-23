describe('countRegNumber' , function(){
    it('Counts registration numbers, adds them adds returns the total of 3' , function(){
      assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);

    });

    it('Counts registration numbers, adds them and returns the total of 2' , function(){
      assert.equal(countRegNumber('CA 182736,CY 523519'), 2);

    });

      });
