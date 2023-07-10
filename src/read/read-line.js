import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const answer = await rl.question('답을 입력하세요: ');

console.log(`당신이 입력한 답은: ${answer}`);

rl.close();
