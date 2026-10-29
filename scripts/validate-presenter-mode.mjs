#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const file=process.argv[2];
const targetArg=process.argv.find(x=>x.startsWith('--target-minutes='));
const targetMinutes=targetArg?Number(targetArg.split('=')[1]):null;

if(!file){
  console.error('Usage: node scripts/validate-presenter-mode.mjs <deck.html> [--target-minutes=N]');
  process.exit(1);
}

const html=readFileSync(file,'utf8');

// Basic checks
if(!html.includes('presenter-runtime')){
  console.error('Missing presenter runtime');
  process.exit(1);
}

console.log('Presenter mode validation passed.');
