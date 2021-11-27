import f from '@src/functions/f';

describe('This is a test', () => {
  it('should pass', () => {
    expect(f(2, 3, 4)).toBe(10);
  });
});
