describe('countAllFromTown' , function(){
    it('Counts all the registration numbers from town, adds and returns the total of 2' , function(){
      assert.equal(countAllFromTown('CJ123, CL 123, CL 123', 'CL'), 2);

    });

          it('Count registration numbers from town and returns the total of 1' , function(){
            assert.equal(countAllFromTown('CY 123, CA 123', 'CA'), 1);

          });
  });
