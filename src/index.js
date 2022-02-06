import readlineSync from 'readline-sync';

const NUMBER_ROUNDS = 3;

const startGame = (task, playGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(task);

  for (let i = 0; i < NUMBER_ROUNDS; i += 1) {
    const gameData = playGame();
    console.log(`Question: ${gameData.question}`);
    const actualAnswer = readlineSync.question('Your answer: ');

    if (actualAnswer !== gameData.correctAnswer) {
      console.log(`'${actualAnswer}' is wrong answer ;(. Correct answer was '${gameData.correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default startGame;
