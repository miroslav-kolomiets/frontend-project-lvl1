import { getGameQuestions } from '../index.js';
import { QUESTIONS_NUMBER } from '../constants.js';

const gameRange = {
  start: 1,
  end: 10,
};

const isNumberOddOrEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const brainEvenGame = () => {
  return getGameQuestions(QUESTIONS_NUMBER, isNumberOddOrEven, gameRange.start, gameRange.end);
};

export default brainEvenGame;
