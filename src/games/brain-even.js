import { getRandomNumber, isEven } from '../index.js';
import { askForUserAnswer, showQuestion } from '../cli.js';

export const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

export const gameRound = () => {
  const questionNumber = getRandomNumber();

  showQuestion(questionNumber);

  const userAnswer = askForUserAnswer();
  const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';

  return { userAnswer, correctAnswer };
};
