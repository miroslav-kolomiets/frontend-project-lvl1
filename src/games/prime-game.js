import { getGameQuestions } from '../index.js';
import { QUESTIONS_NUMBER } from '../constants.js';

const gameRange = {
  start: 1,
  end: 100,
};

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const brainPrimeGame = () => getGameQuestions(QUESTIONS_NUMBER, isPrime, gameRange.start, gameRange.end);

export default brainPrimeGame;
