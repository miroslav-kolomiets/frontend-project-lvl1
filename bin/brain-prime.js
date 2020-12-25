#!/usr/bin/env node
import { startGame } from '../src/index.js';
import { QUESTIONS_NUMBER, RULES_PRIME_GAME } from '../src/constants.js';
import brainPrimeGame from '../src/games/prime-game.js';

startGame(brainPrimeGame(QUESTIONS_NUMBER), RULES_PRIME_GAME);
