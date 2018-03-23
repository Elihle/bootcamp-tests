describe('fromWhere' , function(){
    it('return registration numbers from Bellville' , function(){
      assert.equal(fromWhere('CY'), 'Bellville');

    });

          it('return registraton numbers from Cape Town' , function(){
            assert.equal(fromWhere('CA'), 'Cape Town');

          });
  });
