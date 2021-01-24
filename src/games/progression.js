import { startGame, numberOfRounds } from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'What number is missing in the progression?';
const arithmeticProgressionLength = 10;

const generateGameRound = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(2, 4);
  const randomEmptyPart = getRandomNumber(0, arithmeticProgressionLength);
  let correctAnswer = '';

  const arithmeticProgression = [];

  for (let i = 0; i < arithmeticProgressionLength; i += 1) {
    if (i === randomEmptyPart) {
      arithmeticProgression.push('..');
      correctAnswer = (start + i * step).toString(10);
    } else {
      arithmeticProgression.push(start + i * step);
    }
  }

  return [arithmeticProgression.join(' '), correctAnswer];
};

const generateGameRounds = () => {
  const rounds = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    rounds.push(generateGameRound());
  }

  startGame(rounds, gameRules);
};

export default generateGameRounds;
