import readlineSync from 'readline-sync';
import sayHelloToUser from './cli.js';

const NUMBER_ROUNDS = 3;

const startGame = (task, playGame) => {
  const name = sayHelloToUser();
  console.log(`Hello, ${name}!`);
  console.log(task);

  for (let countCorrectAnswers = 0; countCorrectAnswers < NUMBER_ROUNDS;) {
    const expectedAnswer = playGame();
    const actualAnswer = readlineSync.question('Your answer: ');

    if (actualAnswer === expectedAnswer) {
      countCorrectAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${actualAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default startGame;
