#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';

const file = process.argv[2];
if (!file) {
  console.error('Usage: node scripts/validate-swiss-deck.mjs <deck.html>');
  process.exit(1);
}

const html = readFileSync(file, 'utf8');

// Basic Swiss layout checks
if (!html.includes('data-layout')) {
  console.error('Missing data-layout attributes');
  process.exit(1);
}

console.log('Swiss deck validation passed.');
