import { startGame, questionNumber } from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b) {
    return getGcd(b, a % b);
  }
  return Math.abs(a);
};

const generateGameRound = () => {
  const round = [];
  const firstRandomNumber = getRandomNumber(1, 100);
  const secondRandomNumber = getRandomNumber(1, 100);
  const correctAnswer = `${getGcd(firstRandomNumber, secondRandomNumber)}`;

  round.push(`${firstRandomNumber} ${secondRandomNumber}`, correctAnswer);

  return round;
};

const generateGameRounds = () => {
  const rounds = [];

  for (let i = 0; i < questionNumber; i += 1) {
    rounds.push(generateGameRound());
  }

  return rounds;
};

const gameQuestionsAndAnswers = generateGameRounds();

const brainGcdGame = () => startGame(gameQuestionsAndAnswers, gameRules);

export default brainGcdGame;
