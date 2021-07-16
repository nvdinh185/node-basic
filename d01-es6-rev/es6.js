// The let keyword
var x = 10;
console.log(x);
{
    let x = 2;
    console.log(x);
}
console.log(x);

// The const keyword
const objConst = { a: "123", b: 123 };
objConst.a = 1111;
objConst.c = true;
// objConst = { a: "123", b: 123 }; // Not Allow
console.log("Object Const", objConst);

// Arrow Functions
const sum = (x, y) => x + y;
console.log(sum(1, 2));

// For/of
const cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
    text += x + "-";
}
console.log(text);

// Map Objects
// Create Objects
const apples = { name: 'Apples' };
const bananas = { name: 'Bananas' };
const oranges = { name: 'Oranges' };

// Create a new Map
const fruits = new Map();

// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);
console.log(fruits);

// Set Objects
const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters);

// TEMPLATE STRING
let string = "asfasdf";
let stringAdd = "asdfasdf" + "asdfasdf";

let temString = `Hieu test template: ${"test " + string}`;
console.log(temString);

// DESTRUCTURING
// OBJ
let obj = { a: "a", b: "b" };
let { a1, b1 } = obj;
console.log(a1, b1);

// ARR
let arrDe = [123, 456];
let [c, d, e] = arrDe;
console.log(c, d, e);

function returnArr() {
    let a = 111;
    let b = 222;
    return [a, b];
}

let [bien1, bien2] = returnArr();
console.log(bien1, bien2);

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);

// Default Parameters
function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
}
console.log(myFunction(5));

// Function Rest Parameter
function sumFns(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

let sumArr = sumFns(4, 9, 16, 25, 29, 100, 66, 77);
console.log(sumArr);