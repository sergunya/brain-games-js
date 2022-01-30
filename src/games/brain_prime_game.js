import generateNum from './utils.js';

export const getPrimeGameTask = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const playBrainPrimeGame = () => {
  const primeNumber = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
  
  const generatedNumber = generateNum(1, 110);
  console.log(`Question: ${generatedNumber}`);

  if (primeNumber.includes(generatedNumber)) {
      return 'yes';
  }

  return 'no';
};
