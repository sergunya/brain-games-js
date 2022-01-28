import readlineSync from 'readline-sync';
import sayHelloToUser from './cli.js';

const generateNumber = () => Math.floor(Math.random() * 100);

const correctAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

const brainEvenGame = (name) => {
  let countCorrectAnswers = 0;

  while (countCorrectAnswers !== 3) {
    const number = generateNumber();
    const expectedAnswer = correctAnswer(number);

    console.log(`Question: ${number}`);
    const actualAnswer = readlineSync.question('Your answer: ');

    if (actualAnswer === expectedAnswer) {
      countCorrectAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${actualAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      countCorrectAnswers = 0;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

const startGame = () => {
  const name = sayHelloToUser();
  console.log(`Hello, ${name}!`);

  readlineSync.question('Answer "yes" if the number is even, otherwise answer "no".');

  brainEvenGame(name);
};

export default startGame;
