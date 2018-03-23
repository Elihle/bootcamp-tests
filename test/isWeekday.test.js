describe('isWeekday' , function(){
    it('Checks if the chosen day is a weekday and returns true if it is a weekday' , function(){
      assert.equal(isWeekday('Monday'), true);


    });


      it('Checks if the chosen day is a weekday and returns false if it is a weekend' , function(){
      assert.equal(isWeekday('Sunday'), false);

    });
      });
