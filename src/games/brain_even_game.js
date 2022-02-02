import generateNum from './utils.js';

const MIN_RANGE = 1;
const MAX_RANGE = 100;

const correctAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

const playBrainEvenGame = () => {
  const number = generateNum(MIN_RANGE, MAX_RANGE);
  const expectedAnswer = correctAnswer(number);

  console.log(`Question: ${number}`);

  return expectedAnswer;
};

export default playBrainEvenGame;
