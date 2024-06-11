import fizzBuzz from '../fizzBuzz'

describe('should return string between the markers for pos1', () => {
  it('should succesfully return dog as text between markers ', () => {
    const result = fizzBuzz(1,3);
    console.log = jest.fn();
    expect(console.log).toHaveBeenCalledWith(1, 3);
  });
});
