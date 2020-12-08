#!/usr/bin/env node
import {
  getPlayerName,
  getRandomInt,
  greatPlayer,
  askQuestions,
  showRules,
} from '../src/index.js';

import {
  QUESTIONS_NUMBER, TEXT_COLORS, locale, rulesGcdGame,
} from '../src/constants.js';

const getGcd = (a, b) => {
  if (b) {
    return getGcd(b, a % b);
  }
  return Math.abs(a);
};

const getGameQuestions = (count) => {
  const questions = [];

  for (let i = 0; i < count; i += 1) {
    const question = [];
    const firstOperand = getRandomInt(1, 100);
    const secondOperand = getRandomInt(1, 100);
    const textQuestion = `${firstOperand} ${secondOperand}`;
    const result = getGcd(firstOperand, secondOperand);

    question.push(textQuestion, result);
    questions.push(question);
  }
  return questions;
};

const brainGCDGame = () => {
  const gameQuestions = getGameQuestions(QUESTIONS_NUMBER);
  const playerName = getPlayerName(locale);

  greatPlayer(playerName, TEXT_COLORS, locale);
  showRules(TEXT_COLORS, rulesGcdGame);
  askQuestions(TEXT_COLORS, locale, gameQuestions, playerName);
};

brainGCDGame();
