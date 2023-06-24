const reverseString = require('./reverseString');

describe('reverseString', () => {
  test('reverses a string correctly', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('12345')).toBe('54321');
  });

  test('throws an error for non-string input', () => {
    expect(() => reverseString(45)).toThrow('Input must be a string');
    expect(() => reverseString(null)).toThrow('Input must be a string');
    expect(() => reverseString(undefined)).toThrow('Input must be a string');
  });
  
});
