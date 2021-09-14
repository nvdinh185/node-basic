import { greet, PI, multiplyNumbers } from './modules/main.js';

let res = `${greet} 
        ${PI} 
        ${multiplyNumbers(2, 3)}`

alert(res);