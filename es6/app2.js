const { greet, PI, multiplyNumbers } = require('./modules/main2.js');

let res = `${greet} 
        ${PI} 
        ${multiplyNumbers(2, 3)}`

console.log(res);