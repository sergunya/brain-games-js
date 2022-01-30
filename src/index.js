import readlineSync from 'readline-sync';
import sayHelloToUser from './cli.js';
import { playBrainEvenGame, getEvenGameTask } from './games/brain_even_game.js';
import { playBrainCalcGame, getCalcGameTask } from './games/brain_calc_game.js';
import { playGcdGame, getGcdGameTask } from './games/brain_gcd_game.js';

const chooseGame = (gameName) => {
  if (gameName === 'brain-even') {
    readlineSync.question(getEvenGameTask());
    return playBrainEvenGame;
  }

  if (gameName === 'brain-calc') {
    readlineSync.question(getCalcGameTask());
    return playBrainCalcGame;
  }

  if (gameName === 'brain-gcd') {
    readlineSync.question(getGcdGameTask());
    return playGcdGame;
  }

  return undefined;
};

const startGame = (gameName) => {
  const name = sayHelloToUser();
  console.log(`Hello, ${name}!`);

  let countCorrectAnswers = 0;
  const askQuestion = chooseGame(gameName);

  while (countCorrectAnswers !== 3) {
    const expectedAnswer = askQuestion();
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
