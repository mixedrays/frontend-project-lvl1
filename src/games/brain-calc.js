import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

export const showRules = () => {
  console.log('What is the result of the expression?');
};

export const askQuestion = (name) => {
  const operands = ['+', '-', '*'];
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operand = operands[getRandomNumber(0, 2)];

  console.log('Question: ', `${number1} ${operand} ${number2}`);
  const answer = readlineSync.question('Your answer: ');

  const calcAnswer = () => {
    switch (operand) {
      case '+':
        return number1 + number2;
      case '-':
        return number1 - number2;
      case '*':
        return number1 * number2;
      default:
        return null;
    }
  };

  const correctAnswer = calcAnswer();

  if (String(answer) === String(correctAnswer)) {
    console.log('Correct!');
    return true;
  }

  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\n Let's try again, ${name}!`);
  return false;
};
