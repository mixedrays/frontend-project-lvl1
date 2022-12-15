#!/usr/bin/env node

import { runGame } from '../src/index.js';
import { gameRules, gameRound } from '../src/games/brain-progression.js';

runGame(gameRules, gameRound);
