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

  console.log(`Question: ${firstNum} ${secondNum}`);
  const result = gcd(firstNum, secondNum);

  return result.toString();
};

export default playGcdGame;
