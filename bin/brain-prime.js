#!/usr/bin/env node
import {
  getPlayerName,
  greatPlayer,
  askQuestions,
  showRules,
  getGameQuestions,
} from '../src/index.js';

import {
  QUESTIONS_NUMBER, TEXT_COLORS, LOCALE, RULES_PRIME_GAME,
} from '../src/constants.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const brainPrimeGame = () => {
  const gameQuestions = getGameQuestions(QUESTIONS_NUMBER, isPrime, 1, 100);
  const playerName = getPlayerName(LOCALE);

  greatPlayer(playerName, TEXT_COLORS, LOCALE);
  showRules(TEXT_COLORS, RULES_PRIME_GAME);
  askQuestions(TEXT_COLORS, LOCALE, gameQuestions, playerName);
};

brainPrimeGame();
