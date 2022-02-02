import generateNum from './utils.js';

const MIN_RANGE = 1;
const MAX_RANGE = 20;
const NUMBER_OF_OPERATORS = 3;

const chooseOperatorNumber = () => Math.floor(Math.random() * NUMBER_OF_OPERATORS);

const playBrainCalcGame = () => {
  const num1 = generateNum(MIN_RANGE, MAX_RANGE);
  const num2 = generateNum(MIN_RANGE, MAX_RANGE);

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

export default playBrainCalcGame;
