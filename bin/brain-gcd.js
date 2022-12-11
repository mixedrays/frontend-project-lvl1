#!/usr/bin/env node

import { runGame } from '../src/index.js';
import { askQuestion, showRules } from '../src/games/brain-gcd.js';

runGame(showRules, askQuestion);
