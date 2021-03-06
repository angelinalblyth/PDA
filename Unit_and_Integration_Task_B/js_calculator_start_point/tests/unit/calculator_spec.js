var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  // - calculator.add()
  it('should add', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 5);
  })

  // - calculator.subtract()
  it('should subtract', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 3);
  })

  // - calculator.multiply()
  it('should be able to multiply', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 15);
  })

  // - calculator.divide()
  it('should be able to divide', function(){
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 3);
  })

  // - calculator.numberClick()
  it('should have a number click', function(){
    calculator.numberClick(4);
    calculator.numberClick(4);
    assert.equal(calculator.runningTotal, 44);
  })

  // - calculator.operatorClick()
  it('should have an operator click', function(){
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 10);
  })

  // - calculator.clearClick()
  it('should be able to clear the numbers', function(){
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
  })

  it('should chain multiple operations together', function(){
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.operatorClick('*');
    calculator.numberClick(3);
    calculator.operatorClick('/');
    calculator.numberClick(2);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 15);
  })
});
