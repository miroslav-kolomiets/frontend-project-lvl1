import { startGame, numberOfRounds } from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const generateGameRound = () => {
  const randomNumber = getRandomNumber(1, 10);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

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
