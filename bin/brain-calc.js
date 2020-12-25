#!/usr/bin/env node
import { startGame } from '../src/index.js';
import { QUESTIONS_NUMBER, RULES_CALC_GAME } from "../src/constants.js";
import brainCalcGame from '../src/games/calc-game.js';

startGame(brainCalcGame(QUESTIONS_NUMBER), RULES_CALC_GAME);
