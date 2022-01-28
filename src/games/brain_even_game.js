const generateNumber = () => Math.floor(Math.random() * 100);
const correctAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');
export const getEvenGameTask = () => 'Answer "yes" if the number is even, otherwise answer "no".';

export const playBrainEvenGame = () => {
  const number = generateNumber();
  const expectedAnswer = correctAnswer(number);

  console.log(`Question: ${number}`);

  return expectedAnswer;
};
