import generateRandomNum from '../generate_random_number.js';
import startGame from '../index.js';

const TASK = 'Find the greatest common divisor of given numbers.';

const gcd = (n, m) => {
  if (m > 0) {
    const k = n % m;
    return gcd(m, k);
  }

  return Math.abs(n);
};

const playGcdGame = () => {
  const firstNum = generateRandomNum();
  const secondNum = generateRandomNum();

  return {
    question: `${firstNum} ${secondNum}`,
    correctAnswer: gcd(firstNum, secondNum).toString(),
  };
};

const startGcdGame = () => {
  startGame(TASK, playGcdGame);
};

export default startGcdGame;
