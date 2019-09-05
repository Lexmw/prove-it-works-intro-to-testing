const expect = require('chai').expect;
const Calculator = require('../../src/js/lib/Calculator');

describe('Calculator', () => {
  let calculator = null;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should have an add function', () => {
    expect(calculator.add).to.exist;
  });

  it('should add 2 + 2 together correctly', () => {
    expect(calculator.add(2, 2)).to.equal(4);
  });

  it('should subtract 5 - 2 together correctly', () => {
    expect(calculator.subtract(5, 2)).to.equal(3);
  });

  it('should multiply 6 * 3 together correctly', () => {
    expect(calculator.multiply(6, 3)).to.equal(18);
  });

  it('should divide 6 / 3 correctly', () => {
      expect(calculator.divide(6, 3)).to.equal(2);
  })
});