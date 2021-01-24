import { startGame, questionNumber } from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const generateGameRound = () => {
  const round = [];
  const randomNumber = getRandomNumber(1, 10);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

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

const brainEvenGame = () => startGame(gameQuestionsAndAnswers, gameRules);

export default brainEvenGame;
