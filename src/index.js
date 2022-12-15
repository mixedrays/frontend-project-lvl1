import {
  showCongrats,
  showGreetings,
  askName,
  showWrong,
  showCorrect,
  showRules,
} from './cli.js';

// eslint-disable-next-line max-len
export const getRandomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1) + min);

export const isEven = (number) => number % 2 === 0;

export const getGCD = (number1, number2) => {
  let n1 = number1;
  let n2 = number2;

  while (n1 !== n2) {
    if (n1 > n2) {
      n1 -= n2;
    } else {
      n2 -= n1;
    }
  }

  return n1;
};

export const runGame = (rules, runRound) => {
  showGreetings();

  const name = askName();

  showRules(rules);

  for (let i = 0; i < 3; i += 1) {
    const { userAnswer, correctAnswer } = runRound();

    if (userAnswer === correctAnswer) {
      showCorrect();
    } else {
      showWrong(name, userAnswer, correctAnswer);
      return false;
    }
  }

  showCongrats(name);

  return undefined;
};
