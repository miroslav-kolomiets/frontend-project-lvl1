import { startGame, questionNumber } from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'What number is missing in the progression?';

const getArithmeticProgression = (start, step, length) => {
  const arithmeticProgression = [start];
  for (let i = 0; i < length; i += 1) {
    arithmeticProgression.push(arithmeticProgression[i] + step);
  }
  return arithmeticProgression;
};

const generateGameRound = () => {
  const round = [];
  let correctAnswer = '';
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 3);
  const randomEmptyPart = getRandomNumber(1, 11);

  const result = getArithmeticProgression(start, step, 10);
  for (let y = 0; y < result.length; y += 1) {
    if (y === randomEmptyPart) {
      const emptyPart = '..';
      const correct = result[y];
      result[y] = emptyPart;
      correctAnswer = correct.toString(10);
    }
  }

  round.push(result.join(' '), correctAnswer);

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

const brainProgressionGame = () => startGame(gameQuestionsAndAnswers, gameRules);

export default brainProgressionGame;
