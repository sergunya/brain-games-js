import generateNum from '../generate_number.js';
import startGame from '../index.js';

const OPERATORS = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    default:
      return null;
  }
};

const playBrainCalcGame = () => {
  const num1 = generateNum();
  const num2 = generateNum();
  const operator = OPERATORS[generateNum(0, 2)];

  return {
    question: `${num1} ${operator} ${num2}`,
    correctAnswer: calculate(num1, num2, operator).toString(),
  };
};

const initBrainCalcGame = () => {
  const task = 'What is the result of the expression?';
  startGame(task, playBrainCalcGame);
};

export default initBrainCalcGame;
