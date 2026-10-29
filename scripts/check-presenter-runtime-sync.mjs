#!/usr/bin/env node
import {readFileSync} from 'node:fs';
import {dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const files=[
  'assets/template.html',
  'assets/template-swiss.html',
];

function extract(html){
  const match=html.match(/<script id="presenter-runtime"[^>]*>([\s\S]*?)<\/script>/);
  return match ? match[1].trim() : null;
}

const contents=files.map(file=>{
  const html=readFileSync(resolve(root,file),'utf8');
  const runtime=extract(html);
  if(!runtime){
    console.error(`Missing presenter runtime in ${file}`);
    process.exit(1);
  }
  return runtime;
});

if(contents[0]!==contents[1]){
  console.error('Presenter runtime is out of sync between templates.');
  process.exit(1);
}

console.log('Presenter runtime is in sync.');
