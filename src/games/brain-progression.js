import { getRandomNumber } from '../index.js';
import { askForUserAnswer, showQuestion } from '../cli.js';

export const gameRules = 'What number is missing in the progression?';

export const gameRound = () => {
  const progressionLength = getRandomNumber(6, 11);
  const progressionStep = getRandomNumber(1, 15);
  const progressionFirst = getRandomNumber(0, 50);
  const hiddenPosition = getRandomNumber(0, progressionLength - 1);
  const progression = Array(progressionLength).fill(0)
    .map((_, index) => progressionFirst + index * progressionStep);
  const hiddenNumber = progression[hiddenPosition];
  progression[hiddenPosition] = '..';
  const question = progression.join(' ');

  showQuestion(question);

  const userAnswer = askForUserAnswer();
  const correctAnswer = String(hiddenNumber);

  return { userAnswer, correctAnswer };
};
