import generateNum from '../generate_number.js';

export const TASK = 'Find the greatest common divisor of given numbers.';

const gcd = (n, m) => {
  if (m > 0) {
    const k = n % m;
    return gcd(m, k);
  }

  return Math.abs(n);
};

export const playGcdGame = () => {
  const firstNum = generateNum();
  const secondNum = generateNum();

  return {
    question: `${firstNum} ${secondNum}`,
    correctAnswer: gcd(firstNum, secondNum).toString(),
  };
};
