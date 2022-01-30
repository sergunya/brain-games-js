import readlineSync from 'readline-sync';
import sayHelloToUser from './cli.js';
import { playBrainEvenGame, getEvenGameTask } from './games/brain_even_game.js';
import { playBrainCalcGame, getCalcGameTask } from './games/brain_calc_game.js';
import { playGcdGame, getGcdGameTask } from './games/brain_gcd_game.js';
import { playBrainProgression, getProgressionGameTask } from './games/brain_progression_game.js';
import { playBrainPrimeGame, getPrimeGameTask } from './games/brain_prime_game.js';

const chooseGame = (gameName) => {
  switch (gameName) {
    case 'brain-even':
      console.log(getEvenGameTask());
      return playBrainEvenGame;
    case 'brain-calc':
      console.log(getCalcGameTask());
      return playBrainCalcGame;
    case 'brain-gcd':
      console.log(getGcdGameTask());
      return playGcdGame;
    case 'brain-progression':
      console.log(getProgressionGameTask());
      return playBrainProgression;
    case 'brain-prime':
      console.log(getPrimeGameTask());
      return playBrainPrimeGame;
    default:
      console.log(getEvenGameTask());
      return playBrainEvenGame;
  }
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
