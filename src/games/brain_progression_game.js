import generateNum from './utils.js';
import startGame from '../index.js';

const RANDOM_RANGES = {
  length: { min: 5, max: 15 },
  step: { min: 2, max: 5 },
  initNumber: { min: 1, max: 10 },
};

const generateProgression = () => {
  const progressionLength = generateNum(RANDOM_RANGES.length.min, RANDOM_RANGES.length.max);
  const step = generateNum(RANDOM_RANGES.step.min, RANDOM_RANGES.step.max);
  const initNum = generateNum(RANDOM_RANGES.initNumber.min, RANDOM_RANGES.initNumber.max);
  const result = [];
  result.push(initNum);

  for (let i = 1; i < progressionLength; i += 1) {
    const element = result[i - 1] + step;
    result.push(element);
  }

  return result;
};

const playBrainProgression = () => {
  const generatedArray = generateProgression();
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
