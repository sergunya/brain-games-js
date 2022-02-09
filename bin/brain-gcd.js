#!/usr/bin/env node

import { TASK, playGcdGame } from '../src/games/brain_gcd_game.js';
import startGame from '../src/index.js';

startGame(TASK, playGcdGame);
