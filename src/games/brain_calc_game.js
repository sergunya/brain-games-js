import generateNum from './utils.js';
import startGame from '../index.js';

const MIN_RANGE = 1;
const MAX_RANGE = 20;
const NUMBER_OF_OPERATORS = 3;

const chooseOperatorNumber = () => Math.floor(Math.random() * NUMBER_OF_OPERATORS);

const playBrainCalcGame = () => {
  const num1 = generateNum(MIN_RANGE, MAX_RANGE);
  const num2 = generateNum(MIN_RANGE, MAX_RANGE);
  const result = {};

  switch (chooseOperatorNumber()) {
    case 1:
      result.question = `${num1} + ${num2}`;
      result.correctAnswer = (num1 + num2).toString();
      break;
    case 2:
      result.question = `${num1} * ${num2}`;
      result.correctAnswer = (num1 * num2).toString();
      break;
    default:
      result.question = `${num1} - ${num2}`;
      result.correctAnswer = (num1 - num2).toString();
  }

  return result;
};

const initBrainCalcGame = () => {
  const task = 'What is the result of the expression?';
  startGame(task, playBrainCalcGame);
};

export default initBrainCalcGame;
