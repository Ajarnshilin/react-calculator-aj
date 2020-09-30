import React, { useState } from "react";
import "./styles.css";
import Display from "./Components/Display";

export default function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(0);
  const handleNumberClicked = (number) => {
    return !operator
      ? setFirstNumber(firstNumber + number)
      : setSecondNumber(secondNumber + number);
  };
  const handleOperatorClicked = (operator) => {
    return setOperator(operator);
  };
  const handleReset = () => {
    setFirstNumber("");
    setOperator("");
    setSecondNumber("");
    setResult(0);
  };
  const handleCalculation = () => {
    const parseFirstNum = parseInt(firstNumber, 10);
    const parseSecondNum = parseInt(secondNumber, 10);

    if (operator === "+") {
      setResult(parseFirstNum + parseSecondNum);
    } else if (operator === "-") {
      setResult(parseFirstNum - parseSecondNum);
    } else if (operator === "*") {
      setResult(parseFirstNum * parseSecondNum);
    } else if (operator === "/") {
      setResult(parseFirstNum / parseSecondNum);
    } else {
      setResult(parseFirstNum + parseSecondNum / 10);
    }
  };

  const display = !secondNumber
    ? firstNumber || result
    : result || secondNumber;

  return (
    <div>
      <h2>Calculator</h2>
      <p>{display}</p>
      <div>
        <Display onClick={handleReset}>Reset</Display>
      </div>
      <div>
        <Display onClick={() => handleNumberClicked("1")}>1</Display>
        <Display onClick={() => handleNumberClicked("2")}>2</Display>
        <Display onClick={() => handleNumberClicked("3")}>3</Display>
        <Display onClick={() => handleOperatorClicked("+")}>+</Display>
      </div>
      <div>
        <Display onClick={() => handleNumberClicked("4")}>4</Display>
        <Display onClick={() => handleNumberClicked("5")}>5</Display>
        <Display onClick={() => handleNumberClicked("6")}>6</Display>
        <Display onClick={() => handleOperatorClicked("-")}>-</Display>
      </div>
      <div>
        <Display onClick={() => handleNumberClicked("7")}>7</Display>
        <Display onClick={() => handleNumberClicked("8")}>8</Display>
        <Display onClick={() => handleNumberClicked("9")}>9</Display>
        <Display onClick={() => handleOperatorClicked("*")}>*</Display>
      </div>
      <div>
        <Display onClick={() => handleOperatorClicked(".")}>.</Display>
        <Display onClick={() => handleOperatorClicked("0")}>0</Display>
        <Display onClick={() => handleOperatorClicked("/")}>/</Display>
        <Display onClick={handleCalculation}>=</Display>
      </div>
    </div>
  );
}
