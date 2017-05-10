var string=("1 for R3, 2 for R7, 3 for R10, 5 for R14.50.");
describe('deal()', function(){
  it('Should display the splitted list',function(){
  assert.equal(deal("string"),("1 for R3","2 for R7","3 for R10","5 for R14.50"));

});
    });
