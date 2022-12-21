import { Print } from '../src';

describe('Print', () => {
  it('Should print message in console', () => {
    const logSpy = jest.spyOn(global.console, 'log');

    Print('something');

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith('something');
  });
});
