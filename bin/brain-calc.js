#!/usr/bin/env node

import { TASK, playBrainCalcGame } from '../src/games/brain_calc_game.js';
import startGame from '../src/index.js';

startGame(TASK, playBrainCalcGame);
