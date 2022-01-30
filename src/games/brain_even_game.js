import generateNum from './utils.js';

const correctAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');
export const getEvenGameTask = () => 'Answer "yes" if the number is even, otherwise answer "no".';

export const playBrainEvenGame = () => {
  const number = generateNum(1, 100);
  const expectedAnswer = correctAnswer(number);

  console.log(`Question: ${number}`);

  return expectedAnswer;
};
