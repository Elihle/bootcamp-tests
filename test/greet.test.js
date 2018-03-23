describe('greet' , function(){
    it('Returns a greeting message to Janine' , function(){

        assert.equal(greet('Janine'), 'Hello, Janine');
    });

    it('Returns a greeting message to Lihle' , function(){

        assert.equal(greet('Lihle'), 'Hello, Lihle');
    });
});
