import generateNum from '../generator.js';
import startGame from '../index.js';

const generateProgression = (start, step, last = 100) => {
  const result = [];

  for (let i = start; start + step * i < last; i += step) {
    result.push(start + step * i);
  }

  return result;
};

const playBrainProgression = () => {
  const generatedArray = generateProgression(generateNum(), generateNum(2, 5));
  const hiddenIndex = generateNum(0, generatedArray.length - 1);
  const correctAnswer = generatedArray[hiddenIndex];
  generatedArray[hiddenIndex] = '..';

  return {
    question: `${generatedArray.join(' ')}`,
    correctAnswer: correctAnswer.toString(),
  };
};

const initBrainProgressionGame = () => {
  const task = 'What number is missing in the progression?';
  startGame(task, playBrainProgression);
};

export default initBrainProgressionGame;
