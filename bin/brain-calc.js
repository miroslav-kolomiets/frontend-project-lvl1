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
  QUESTIONS_NUMBER, TEXT_COLORS, locale, rulesCalcGame,
} from '../src/constants.js';

const getGameQuestions = (count) => {
  const questions = [];
  const mathematicalSymbols = ['+', '-', '*'];

  for (let i = 0; i < count; i += 1) {
    const question = [];
    const firstOperand = getRandomInt(1, 10);
    const secondOperand = getRandomInt(1, 10);
    const mathematicalSymbol = mathematicalSymbols[getRandomInt(0, 3)];
    const textQuestion = `${firstOperand}${mathematicalSymbol}${secondOperand}`;
    /* eslint-disable no-eval */
    const result = eval(textQuestion);

    question.push(textQuestion, result);

    questions.push(question);
  }
  return questions;
};

const askQuestions = (questions, name) => {
  for (let i = 0; i < questions.length; i += 1) {
    const question = questions[i][0];
    const correctAnswer = questions[i][1];

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

const brainCalcGame = () => {
  const gameQuestions = getGameQuestions(QUESTIONS_NUMBER);
  const playerName = getPlayerName(locale);

  greatPlayer(playerName, TEXT_COLORS, locale);
  showRules(TEXT_COLORS, rulesCalcGame);
  askQuestions(gameQuestions, playerName);
};

brainCalcGame();