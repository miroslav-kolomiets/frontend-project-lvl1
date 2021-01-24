import { startGame, questionNumber } from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1 || num === 0) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateGameRound = () => {
  const round = [];
  const randomNumber = getRandomNumber(1, 100);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  round.push(randomNumber, correctAnswer);
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

const brainPrimeGame = () => startGame(gameQuestionsAndAnswers, gameRules);

export default brainPrimeGame;
