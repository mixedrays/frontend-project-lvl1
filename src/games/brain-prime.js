import { getRandomNumber, isPrime } from '../index.js';
import { askForUserAnswer, showQuestion } from '../cli.js';

export const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const gameRound = () => {
  const questionNumber = getRandomNumber();

  showQuestion(questionNumber);

  const userAnswer = askForUserAnswer();
  const correctAnswer = isPrime(questionNumber) ? 'yes' : 'no';

  return { userAnswer, correctAnswer };
};
