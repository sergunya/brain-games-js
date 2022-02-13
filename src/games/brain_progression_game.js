import generateRandomNum from '../generate_random_number.js';
import startGame from '../index.js';

const TASK = 'What number is missing in the progression?';

const generateProgression = (start, step, len = 10) => {
  const result = [];

  for (let i = 0; i < len; i += 1) {
    result.push(start + step * i);
  }

  return result;
};

const playBrainProgression = () => {
  const generatedArray = generateProgression(generateRandomNum(), generateRandomNum(2, 5));
  const hiddenIndex = generateRandomNum(0, generatedArray.length - 1);
  const correctAnswer = generatedArray[hiddenIndex];
  generatedArray[hiddenIndex] = '..';

  return {
    question: `${generatedArray.join(' ')}`,
    correctAnswer: correctAnswer.toString(),
  };
};

const startProgressionGame = () => {
  startGame(TASK, playBrainProgression);
};

export default startProgressionGame;
