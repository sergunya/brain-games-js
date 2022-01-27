import readlineSync from 'readline-sync';

const welcomeUser = () => {
  const name = readlineSync.question('May I have your name? ');
  return `Hello, ${name}!`;
};

export default welcomeUser;
