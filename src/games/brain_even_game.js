import generateNum from '../generator.js';
import startGame from '../index.js';

const isEven = (n) => (n % 2 === 0);

const playBrainEvenGame = () => {
  const number = generateNum();

  return {
    question: number.toString(),
    correctAnswer: `${isEven(number) ? 'yes' : 'no'}`,
  };
};

const initBrainEvenGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(task, playBrainEvenGame);
};

export default initBrainEvenGame;
