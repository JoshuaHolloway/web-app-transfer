import dotenv from 'dotenv-safe';
import f from '@src/functions/f';

dotenv.config();

console.log('f(2, 3, 4): ', f(2, 3, 4));
