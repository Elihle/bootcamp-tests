describe('regCheck' , function(){
    it('returns true if registration number is from Gauteng' , function(){
      assert.equal(regCheck('GP 123', 'GP'), true);

    });

    it('returns false if registration number is not from Gauteng' , function(){

        assert.equal(regCheck('CA 124'), false);
    });
});
