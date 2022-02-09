import generateNum from '../generate_number.js';
import startGame from '../index.js';

const gcd = (n, m) => {
  if (m > 0) {
    const k = n % m;
    return gcd(m, k);
  }

  return Math.abs(n);
};

const playGcdGame = () => {
  const firstNum = generateNum();
  const secondNum = generateNum();

  return {
    question: `${firstNum} ${secondNum}`,
    correctAnswer: gcd(firstNum, secondNum).toString(),
  };
};

const initGcdGame = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  startGame(task, playGcdGame);
};

export default initGcdGame;
