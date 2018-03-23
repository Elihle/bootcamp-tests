describe('transportFee' , function(){
    it('Returns the amount of R10 if the shift is in the afternoon' , function(){
      assert.equal(transportFee('afternoon'), 'R10');

    });

          it('Returns the amount R20 if the shift is in the morning' , function(){
            assert.equal(transportFee('morning'), 'R20');

          });
  });
