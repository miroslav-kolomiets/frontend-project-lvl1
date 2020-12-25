#!/usr/bin/env node
import { startGame } from '../src/index.js';
import { QUESTIONS_NUMBER, RULES_PROGRESSION_GAME } from "../src/constants.js";
import brainProgressionGame from '../src/games/progression-game.js';

startGame(brainProgressionGame(QUESTIONS_NUMBER), RULES_PROGRESSION_GAME);
