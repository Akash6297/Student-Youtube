import React, { useState } from 'react';
import '../css/calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [currentValue, setCurrentValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [inputHistory, setInputHistory] = useState('');

  const handleDigitClick = (digit) => {
    if (display === '0' || currentValue === null) {
      setDisplay(digit);
      setCurrentValue(parseFloat(digit));
    } else {
      setDisplay(display + digit);
      setCurrentValue(parseFloat(display + digit));
    }
    setInputHistory(inputHistory + digit);
  };

  const handleOperatorClick = (op) => {
    if (operator === null) {
      setOperator(op);
      setCurrentValue(parseFloat(display));
      setDisplay('0');
    } else {
      const result = performOperation(currentValue, parseFloat(display), operator);
      setOperator(op);
      setCurrentValue(result);
      setDisplay('0');
    }
    setInputHistory(inputHistory + ' ' + op + ' ');
  };

  const handleEqualsClick = () => {
    if (operator !== null) {
      const result = performOperation(currentValue, parseFloat(display), operator);
      setOperator(null);
      setCurrentValue(result);
      setDisplay(result.toString());
      setInputHistory(inputHistory + ' = ' + result);
    }
  };

  const handleClearClick = () => {
    setDisplay('0');
    setCurrentValue(null);
    setOperator(null);
    setInputHistory('');
  };

  const performOperation = (num1, num2, op) => {
    switch (op) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) return 'Error';
        return num1 / num2;
      default:
        return num2;
    }
  };

  const handleScientificFunction = (func) => {
    switch (func) {
      case 'sqrt':
        if (currentValue >= 0) {
          const sqrtResult = Math.sqrt(currentValue);
          setCurrentValue(sqrtResult);
          setDisplay(sqrtResult.toString());
          setInputHistory(`√(${currentValue}) = ${sqrtResult}`);
        } else {
          setDisplay('Error');
        }
        break;
      case 'square':
        const squareResult = currentValue * currentValue;
        setCurrentValue(squareResult);
        setDisplay(squareResult.toString());
        setInputHistory(`(${currentValue})² = ${squareResult}`);
        break;
      case 'percent':
        const percentResult = currentValue / 100;
        setCurrentValue(percentResult);
        setDisplay(percentResult.toString());
        setInputHistory(`(${currentValue})% = ${percentResult}`);
        break;
      case 'invert':
        const invertedResult = -currentValue;
        setCurrentValue(invertedResult);
        setDisplay(invertedResult.toString());
        setInputHistory(`-(${currentValue}) = ${invertedResult}`);
        break;
      case 'factorial':
        if (currentValue >= 0 && Number.isInteger(currentValue)) {
          const factorialResult = calculateFactorial(currentValue);
          setCurrentValue(factorialResult);
          setDisplay(factorialResult.toString());
          setInputHistory(`(${currentValue})! = ${factorialResult}`);
        } else {
          setDisplay('Error');
        }
        break;
      default:
        break;
    }
  };

  const calculateFactorial = (n) => {
    if (n === 0 || n === 1) return 1;
    return n * calculateFactorial(n - 1);
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="input-history">{inputHistory}</div>
      <div className="buttons">
        <button className="btn" onClick={() => handleScientificFunction('sqrt')}>√</button>
        <button className="btn" onClick={() => handleScientificFunction('square')}>x²</button>
        <button className="btn" onClick={() => handleScientificFunction('percent')}>%</button>
        <button className="btn" onClick={() => handleScientificFunction('factorial')}>!</button>
        <button className="btn" onClick={() => handleDigitClick('7')}>7</button>
        <button className="btn" onClick={() => handleDigitClick('8')}>8</button>
        <button className="btn" onClick={() => handleDigitClick('9')}>9</button>
        <button className="btn" onClick={() => handleOperatorClick('+')}>+</button>
        <button className="btn" onClick={() => handleDigitClick('4')}>4</button>
        <button className="btn" onClick={() => handleDigitClick('5')}>5</button>
        <button className="btn" onClick={() => handleDigitClick('6')}>6</button>
        <button className="btn" onClick={() => handleOperatorClick('-')}>-</button>
        <button className="btn" onClick={() => handleDigitClick('1')}>1</button>
        <button className="btn" onClick={() => handleDigitClick('2')}>2</button>
        <button className="btn" onClick={() => handleDigitClick('3')}>3</button>
        <button className="btn" onClick={() => handleOperatorClick('*')}>*</button>
        <button className="btn" onClick={() => handleDigitClick('0')}>0</button>
        <button className="btn" onClick={handleClearClick}>C</button>
        <button className="btn" onClick={handleEqualsClick}>=</button>
        <button className="btn" onClick={() => handleOperatorClick('/')}>/</button>
        
      </div>
    </div>
  );
};

export default Calculator;

