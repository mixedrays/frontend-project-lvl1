#!/usr/bin/env node

import { runGame } from '../src/index.js';
import { gameRules, gameRound } from '../src/games/brain-prime.js';

runGame(gameRules, gameRound);
