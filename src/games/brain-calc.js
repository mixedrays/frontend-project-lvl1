import { getRandomNumber } from '../index.js';
import { askForUserAnswer, showQuestion } from '../cli.js';

export const gameRules = 'What is the result of the expression?';

export const gameRound = () => {
  const operands = ['+', '-', '*'];
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operand = operands[getRandomNumber(0, 2)];
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

  showQuestion(`${number1} ${operand} ${number2}`);

  const userAnswer = askForUserAnswer();
  const correctAnswer = String(calcAnswer());

  return { userAnswer, correctAnswer };
};
