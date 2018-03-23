describe('countAllPaarl' , function(){
    it('Counts registration numbers from Paarl(CJ), adds them and returns the total of 2' , function(){
      assert.equal(countAllPaarl('CJ123, CA123, CJ123'), 2);

    });

          it('Counts registration numbers which are not from Paarl and returns 0 if there arent any' , function(){
            assert.equal(countAllPaarl('CL123, CA123, CY123'), 0);

          });
  });
