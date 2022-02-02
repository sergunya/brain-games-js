import generateNum from './utils.js';

const MIN_RANGE = 1;
const MAX_RANGE = 20;

const gcd = (n, m) => {
  if (m > 0) {
    const k = n % m;
    return gcd(m, k);
  }

  return Math.abs(n);
};

const playGcdGame = () => {
  const firstNum = generateNum(MIN_RANGE, MAX_RANGE);
  const secondNum = generateNum(MIN_RANGE, MAX_RANGE);

  return {
    question: `${firstNum} ${secondNum}`,
    correctAnswer: gcd(firstNum, secondNum).toString(),
  };
};

export default playGcdGame;
