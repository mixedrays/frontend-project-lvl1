import askName from './cli.js';

// eslint-disable-next-line max-len
export const getRandomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1) + min);

export const isEven = (number) => number % 2 === 0;

export const game = (showRules, askQuestion) => {
  const name = askName();

  showRules();

  for (let i = 0; i < 3; i += 1) {
    if (!askQuestion(name)) {
      return false;
    }
  }

  console.log(`Congratulations, ${name}`);

  return undefined;
};
