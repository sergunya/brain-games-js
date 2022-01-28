const generateNumber = () => Math.floor(Math.random() * 20);
const chooseOperatorNumber = () => Math.floor(Math.random() * 3);
export const getCalcGameTask = () => 'What is the result of the expression?';

export const playBrainCalcGame = () => {
  const num1 = generateNumber();
  const num2 = generateNumber();

  switch (chooseOperatorNumber()) {
    case 1:
      console.log(`Question: ${num1} + ${num2}`);
      return (num1 + num2).toString();
    case 2:
      console.log(`Question: ${num1} * ${num2}`);
      return (num1 * num2).toString();
    default:
      console.log(`Question: ${num1} - ${num2}`);
      return (num1 - num2).toString();
  }
};
