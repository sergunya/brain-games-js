import generateNum from '../generate_number.js';
import startGame from '../index.js';

const isPrime = (num) => {
  if (num === 2) {
    return true;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const playBrainPrimeGame = () => {
  const num = generateNum(2, 100);

  return {
    question: num.toString(),
    correctAnswer: isPrime(num) ? 'yes' : 'no',
  };
};

const initBrainPrimeGame = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(task, playBrainPrimeGame);
};

export default initBrainPrimeGame;
