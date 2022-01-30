import generateNum from './utils.js';

const chooseOperatorNumber = () => Math.floor(Math.random() * 3);
export const getCalcGameTask = () => 'What is the result of the expression?';

export const playBrainCalcGame = () => {
  const num1 = generateNum(1, 20);
  const num2 = generateNum(1, 20);

  switch (chooseOperatorNumber()) {
    case 1:
      console.log(`Question: ${num1} + ${num2}`);
      return (num1 + num2).toString();
    case 2:
      console.log(`Question: ${num1} * ${num2}`);
      return (num1 * num2).toString();
    default:
      console.log(`Question: ${num1} - ${num2}`);
      return (num1 - num2).toString();
  }
};
