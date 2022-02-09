import generateNum from '../generate_number.js';

export const TASK = 'What number is missing in the progression?';

const generateProgression = (start, step, len = 10) => {
  const result = [];

  for (let i = 0; i < len; i += 1) {
    result.push(start + step * i);
  }

  return result;
};

export const playBrainProgression = () => {
  const generatedArray = generateProgression(generateNum(), generateNum(2, 5));
  const hiddenIndex = generateNum(0, generatedArray.length - 1);
  const correctAnswer = generatedArray[hiddenIndex];
  generatedArray[hiddenIndex] = '..';

  return {
    question: `${generatedArray.join(' ')}`,
    correctAnswer: correctAnswer.toString(),
  };
};
