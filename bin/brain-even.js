#!/usr/bin/env node

import { game } from '../src/index.js';
import { askQuestion, showRules } from '../src/games/brain-even.js';

game(showRules, askQuestion);
