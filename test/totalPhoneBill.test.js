describe('totalPhoneBill' , function(){
    it('Calculates 2 calls(R2.75 per call) and 3 sms(R0.65 per sms) and returns the of R7.45 ' , function(){
      assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45');

    });

          it('Calculates 1 call (R2.75 per call) and returns the total of R2.75' , function(){
            assert.equal(totalPhoneBill('call'), 'R2.75');

          });
  });
