import generateNum from '../generate_number.js';

export const TASK = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => (n % 2 === 0);

export const playBrainEvenGame = () => {
  const number = generateNum();

  return {
    question: number.toString(),
    correctAnswer: isEven(number) ? 'yes' : 'no',
  };
};
