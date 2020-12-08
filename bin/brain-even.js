#!/usr/bin/env node
import {
  getPlayerName,
  getRandomInt,
  greatPlayer,
  askQuestions,
  showRules,
} from '../src/index.js';

import {
  QUESTIONS_NUMBER, TEXT_COLORS, locale, rulesEvenGame,
} from '../src/constants.js';

const isNumberOddOrEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getGameQuestions = (count) => {
  const questions = [];

  for (let i = 0; i < count; i += 1) {
    const question = [];
    const randomNumber = getRandomInt(1, 10);
    const correctAnswer = isNumberOddOrEven(randomNumber);

    question.push(randomNumber, correctAnswer);
    questions.push(question);
  }
  return questions;
};

const brainEvenGame = () => {
  const gameQuestions = getGameQuestions(QUESTIONS_NUMBER);
  const playerName = getPlayerName(locale);

  greatPlayer(playerName, TEXT_COLORS, locale);
  showRules(TEXT_COLORS, rulesEvenGame);
  askQuestions(TEXT_COLORS, locale, gameQuestions, playerName);
};

brainEvenGame();
