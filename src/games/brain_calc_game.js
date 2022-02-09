import generateRandomNum from '../generate_random_number.js';

export const TASK = 'What is the result of the expression?';

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

export const playBrainCalcGame = () => {
  const num1 = generateRandomNum();
  const num2 = generateRandomNum();
  const operator = OPERATORS[generateRandomNum(0, 2)];

  return {
    question: `${num1} ${operator} ${num2}`,
    correctAnswer: calculate(num1, num2, operator).toString(),
  };
};
