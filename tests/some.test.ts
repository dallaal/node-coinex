const cat = {
  say: 'meow',
};
describe('plus', () => {
  it('should equal 2 for 1 plus 1', () => {
    const expectedResult = 2;
    expect(1 + 1).toEqual(expectedResult);
  });
  it('cat should say meow', () => {
    expect(cat).toHaveProperty('say', 'meow');
  });
});
