describe('findItemsOver20' , function(){
    it('should print items over 20, which is apples with the value of 37 in this case' , function(){
      assert.deepEqual(findItemsOver20 ([{name : 'apples', qty : 10},
    {name : 'pears', qty : 37}]), [{'name' : 'pears', 'qty' : 37}]);
    });

    it('should print items over 20, which is  pears with the value of 80 in this case' , function(){
      assert.deepEqual(findItemsOver20 ([{name : 'pears', qty : 80},
    {name : 'pears', qty : 10}]), [{'name' : 'pears', 'qty' : 80}]);

});
});
