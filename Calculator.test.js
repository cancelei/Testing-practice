const Calculator = require('./calculator');

describe('Calculator', () => {
  describe('add', () => {
    test('adds two numbers correctly', () => {
      const calculator = new Calculator();
      expect(calculator.add(2, 3)).toBe(5);
      expect(calculator.add(0, 0)).toBe(0);
      expect(calculator.add(-5, 8)).toBe(3);
    });
  });

  describe('subtract', () => {
    test('subtracts two numbers correctly', () => {
      const calculator = new Calculator();
      expect(calculator.subtract(5, 2)).toBe(3);
      expect(calculator.subtract(10, 5)).toBe(5);
      expect(calculator.subtract(7, 7)).toBe(0);
    });
  });

  describe('divide', () => {
    test('divides two numbers correctly', () => {
      const calculator = new Calculator();
      expect(calculator.divide(10, 2)).toBe(5);
      expect(calculator.divide(6, 3)).toBe(2);
    });

    test('throws an error when dividing by zero', () => {
      const calculator = new Calculator();
      expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('multiply', () => {
    test('multiplies two numbers correctly', () => {
      const calculator = new Calculator();
      expect(calculator.multiply(4, 5)).toBe(20);
      expect(calculator.multiply(0, 10)).toBe(0);
      expect(calculator.multiply(-3, -4)).toBe(12);
    });
  });
});
