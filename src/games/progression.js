import { startGame, getRandomNumber } from '../index.js';

const PROGRESSION_GAME_RULES = 'What number is missing in the progression?';
const ARITHMETIC_PROGRESSION_LENGTH = 9;
const QUESTIONS_NUMBER = 3;

const getArithmeticProgression = (start, step, length) => {
  const arithmeticProgression = [start];
  for (let i = 0; i < length; i += 1) {
    arithmeticProgression.push(arithmeticProgression[i] + step);
  }
  return arithmeticProgression;
};

const getGameQuestionsAndAnswers = () => {
  const questions = [];

  for (let i = 0; i < QUESTIONS_NUMBER; i += 1) {
    const question = [];
    let correctAnswer = '';
    const start = getRandomNumber(1, 10);
    const step = getRandomNumber(1, 3);
    const randomEmptyPart = getRandomNumber(1, 11);

    const result = getArithmeticProgression(start, step, ARITHMETIC_PROGRESSION_LENGTH);
    for (let y = 0; y < result.length; y += 1) {
      if (y === randomEmptyPart) {
        const emptyPart = ' .. ';
        const correct = result[y];
        result[y] = emptyPart;
        correctAnswer = correct.toString(10);
      }
    }

    question.push(result.join(' '), correctAnswer);
    questions.push(question);
  }

  return questions;
};

const gameQuestionsAndAnswers = getGameQuestionsAndAnswers();

const brainProgressionGame = () => startGame(gameQuestionsAndAnswers, PROGRESSION_GAME_RULES);

export default brainProgressionGame;
