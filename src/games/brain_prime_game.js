import generateNum from './utils.js';

const MIN_RANGE = 1;
const MAX_RANGE = 100;
const PRIME_NUMBERS = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31,
  37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];

const playBrainPrimeGame = () => {
  const generatedNumber = generateNum(MIN_RANGE, MAX_RANGE);
  let correctAnswer = 'no';

  if (PRIME_NUMBERS.includes(generatedNumber)) {
    correctAnswer = 'yes';
  }

  return {
    question: generatedNumber.toString(),
    correctAnswer: correctAnswer.toString(),
  };
};

export default playBrainPrimeGame;
