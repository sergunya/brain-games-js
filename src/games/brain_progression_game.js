import generateNum from '../generate_number.js';
import startGame from '../index.js';

const generateProgression = (start, step, len = 10) => {
  const result = [];

  for (let i = 0; i < len; i += 1) {
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
