#!/usr/bin/env node

import { runGame } from '../src/index.js';
import { gameRules, gameRound } from '../src/games/brain-gcd.js';

runGame(gameRules, gameRound);
