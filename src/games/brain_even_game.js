import generateNum from './utils.js';
import startGame from '../index.js';

const MIN_RANGE = 1;
const MAX_RANGE = 100;

const playBrainEvenGame = () => {
  const number = generateNum(MIN_RANGE, MAX_RANGE);
  const expectedAnswer = number % 2 === 0 ? 'yes' : 'no';

  return {
    question: number.toString(),
    correctAnswer: expectedAnswer.toString(),
  };
};

const initBrainEvenGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(task, playBrainEvenGame);
};

export default initBrainEvenGame;
