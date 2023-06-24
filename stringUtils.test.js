const stringLength = require('./stringUtils');

describe('stringLength', () => {
  test('returns the correct length of a string', () => {
    expect(stringLength('Hello')).toBe(5);
    expect(stringLength('67')).toBe(2);
    expect(stringLength('Goodyear')).toBe(8);
  });

  test('throws an error for non-string input', () => {
    expect(() => stringLength(42)).toThrow('Input must be a string');
    expect(() => stringLength(null)).toThrow('Input must be a string');
    expect(() => stringLength(undefined)).toThrow('Input must be a string');
  });

  test('throws an error for strings of invalid length', () => {
    expect(() => stringLength('')).toThrow('String length must be between 1 and 10 characters');
    expect(() => stringLength('This string is too long')).toThrow(
      'String length must be between 1 and 10 characters'
    );
  });
});
