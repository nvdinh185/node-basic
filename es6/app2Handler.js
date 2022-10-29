(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const { greet, PI, multiplyNumbers } = require('./modules/main2.js');

let res = `${greet} 
        ${PI} 
        ${multiplyNumbers(2, 3)}`

console.log(res);
},{"./modules/main2.js":2}],2:[function(require,module,exports){
let greet = "Xin chào ES6!";
const PI = 3.14;

function multiplyNumbers(a, b) {
    return a * b;
}

// Xuất các biến và hàm
module.exports = { greet, PI, multiplyNumbers };
},{}]},{},[1]);
