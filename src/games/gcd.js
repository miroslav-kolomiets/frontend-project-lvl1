import { startGame, numberOfRounds } from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b) {
    return getGcd(b, a % b);
  }
  return Math.abs(a);
};

const generateGameRound = () => {
  const firstRandomNumber = getRandomNumber(1, 100);
  const secondRandomNumber = getRandomNumber(1, 100);
  const correctAnswer = `${getGcd(firstRandomNumber, secondRandomNumber)}`;

  return [`${firstRandomNumber} ${secondRandomNumber}`, correctAnswer];
};

const generateGameRounds = () => {
  const rounds = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    rounds.push(generateGameRound());
  }

  startGame(rounds, gameRules);
};

export default generateGameRounds;
