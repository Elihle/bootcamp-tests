
describe('isFromBellville' , function(){
    it('Checks regisration numbers, and returns true if regisration number is from Bellville' , function(){
      assert.equal(isFromBellville('CY123'), true );

    });

    it('Checks registration numbers, and returns false if regisration number is not from Bellville' , function(){

        assert.equal(isFromBellville('CA124'), false);
    });
});
