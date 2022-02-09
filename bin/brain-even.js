#!/usr/bin/env node

import { TASK, playBrainEvenGame } from '../src/games/brain_even_game.js';
import startGame from '../src/index.js';

startGame(TASK, playBrainEvenGame);
