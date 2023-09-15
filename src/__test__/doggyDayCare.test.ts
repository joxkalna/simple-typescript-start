import doggyDayCare from '../practice-typescript/doggyDayCare';

describe('doggy daycare', () => {
  it('dog can be accepted', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    doggyDayCare(true, true, 'Zuze');
    expect(logSpy).toHaveBeenCalledWith('Zuze can be accepted');
  });
  it('dog can be only accepted by itself', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    doggyDayCare(true, false, 'Dug');
    expect(logSpy).toHaveBeenCalledWith('Dug can only be accepted by itself');
  });
  it('dog can be only accepted by itself', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    doggyDayCare(false, true, 'Bred');
    expect(logSpy).toHaveBeenCalledWith('Bred can only be accepted by itself');
  });
  it('dog cannot be accepted', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    doggyDayCare(false, false, 'Suzie');
    expect(logSpy).toHaveBeenCalledWith('Suzie cannot be accepted');
  });
});
