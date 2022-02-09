#!/usr/bin/env node

import { TASK, playBrainPrimeGame } from '../src/games/brain_prime_game.js';
import startGame from '../src/index.js';

startGame(TASK, playBrainPrimeGame);
