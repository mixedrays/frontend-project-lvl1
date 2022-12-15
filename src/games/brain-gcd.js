import { getGCD, getRandomNumber } from '../index.js';
import { askForUserAnswer, showQuestion } from '../cli.js';

export const gameRules = 'Find the greatest common divisor of given numbers.';

export const gameRound = () => {
  const questionNumber1 = getRandomNumber();
  const questionNumber2 = getRandomNumber();

  showQuestion(`${questionNumber1} ${questionNumber2}`);

  const userAnswer = askForUserAnswer();
  const correctAnswer = String(getGCD(questionNumber1, questionNumber2));

  return { userAnswer, correctAnswer };
};
