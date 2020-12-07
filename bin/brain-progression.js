#!/usr/bin/env node
import readlineSync from 'readline-sync';

import {
  getPlayerName,
  getRandomInt,
  greatPlayer,
  checkAnswer,
  showRules,
} from '../src/index.js';

import {
  QUESTIONS_NUMBER, TEXT_COLORS, locale, rulesProgressionGame, ARITHMETIC_PROGRESSION_LENGTH,
} from '../src/constants.js';

const getArithmeticProgression = (start, step, length) => {
  const arithmeticProgression = [start];
  if (typeof start === 'number' && typeof step === 'number' && typeof length === 'number') {
    for (let i = 0; i < length; i += 1) {
      arithmeticProgression.push(arithmeticProgression[i] + step);
    }
  }
  return arithmeticProgression;
};

const getGameQuestions = (count) => {
  const questions = [];

  for (let i = 0; i < count; i += 1) {
    const question = [];
    const correctAnswer = [];
    const start = getRandomInt(1, 10);
    const step = getRandomInt(1, 3);
    const randomEmptyPart = getRandomInt(1, 11);

    const result = getArithmeticProgression(start, step, ARITHMETIC_PROGRESSION_LENGTH);
    for (let y = 0; y < result.length; y += 1) {
      if (y === randomEmptyPart) {
        const emptyPart = ' .. ';
        const correct = result[y];
        result[y] = emptyPart;
        correctAnswer.push(correct);
      }
    }
    question.push(result);
    question.push(correctAnswer);
    questions.push(question);
  }
  return questions;
};

const askQuestions = (questions, name) => {
  for (let i = 0; i < questions.length; i += 1) {
    const question = `${questions[i][0]}`;
    const correctAnswer = questions[i][1][0];

    console.log(TEXT_COLORS.yellow, `${locale.questions.gameQuestion.text1}${question}`);
    const answer = parseInt(readlineSync.question(locale.questions.gameQuestion.text2), 10);

    const isAnswerCorrect = checkAnswer(answer, correctAnswer);

    if (!isAnswerCorrect) {
      console.log(TEXT_COLORS.red, `'${answer}'${locale.answer.wrong.text1}'${correctAnswer}'`);
      console.log(`${locale.answer.wrong.text2}${name}`);
      break;
    } else {
      console.log(TEXT_COLORS.magenta, locale.answer.correct);
    }
    if (i === questions.length - 1) {
      console.log(TEXT_COLORS.magenta, `${locale.answer.finish.text1}${name}${locale.answer.finish.text2}`);
    }
  }
};

const brainProgressionGame = () => {
  const gameQuestions = getGameQuestions(QUESTIONS_NUMBER);
  const playerName = getPlayerName(locale);

  greatPlayer(playerName, TEXT_COLORS, locale);
  showRules(TEXT_COLORS, rulesProgressionGame);
  askQuestions(gameQuestions, playerName);
};

brainProgressionGame();
