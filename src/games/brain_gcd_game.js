import generateNum from './utils.js';

export const getGcdGameTask = () => 'Find the greatest common divisor of given numbers.';

const gcd = (n, m) => {
  if (m > 0) {
    const k = n % m;
    return gcd(m, k);
  }

  return Math.abs(n);
};

export const playGcdGame = () => {
  const firstNum = generateNum(1, 20);
  const secondNum = generateNum(1, 20);

  console.log(`Question: ${firstNum} ${secondNum}`);
  const result = gcd(firstNum, secondNum);

  return result.toString();
};
