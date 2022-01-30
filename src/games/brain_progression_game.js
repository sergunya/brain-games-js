import generateNum from './utils.js';

export const getProgressionGameTask = () => 'What number is missing in the progression?';

const generateProgression = () => {
  const progressionLength = generateNum(5, 15);
  const step = generateNum(2, 5);
  const initNum = generateNum(1, 10);
  const result = [];
  result.push(initNum);

  for (let i = 1; i < progressionLength; i += 1) {
    const element = result[i - 1] + step;
    result.push(element);
  }

  return result;
};

export const playBrainProgression = () => {
  const generatedArray = generateProgression();
  const hiddenIndex = generateNum(0, generatedArray.length - 1);
  const correctAnswer = generatedArray[hiddenIndex];
  generatedArray[hiddenIndex] = '..';

  console.log(`Question: ${generatedArray}`);

  return correctAnswer.toString();
};
