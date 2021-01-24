import { startGame, numberOfRounds } from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (!Number.isInteger(num)) {
    return new Error('We usually restrict the terms prime and composite to positive integers.');
  }

  if (num === 1 || num === 0) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateGameRound = () => {
  const randomNumber = getRandomNumber(1, 100);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return [randomNumber, correctAnswer];
};

const generateGameRounds = () => {
  const rounds = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    rounds.push(generateGameRound());
  }

  startGame(rounds, gameRules);
};

export default generateGameRounds;
