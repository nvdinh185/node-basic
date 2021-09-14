////// ARROW FUNCTION


////// IIFE: https://developer.mozilla.org/en-US/docs/Glossary/IIFE≠


function sampleFnArg(cb) {
  cb("Called Callback");
}

////// CLASS
class Human {
  constructor(name) {
    this.name = name;
  }

  func1 = () => {
    console.log(this.name);
  };
}

let hieu = new Human("Hieu");
hieu.func1();

// Object Constructor (ES5)

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

var myFather = new Person("John", "Doe", 50, "blue");

console.log(myFather);

////// SPREAD

let arr1 = [1, 2, 3, 4, 5]; // 1 dia chi bien

arr1.splice(arr1.length, 0, 6, 7, 8, () => console.log(123));
console.log("origin arr", arr1);

let arrNew1 = [...arr1]; // 1 dia chi bien khac

console.log(arr1 === arrNew1);

////// REST PARAMETER
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
// ARGUMENTS (ES5)
function testArg() {
  console.log("Test Arg", arguments);
}

testArg(1, 2, 3);

// REST
function testRest(...tests) {
  console.log("Test Rest", tests);
}

testRest(4, 5, 6);

////// DESTRUCTURING
// OBJ
let obj = { a: "123", b: "b" };
let { a, b } = obj;
console.log(a, b);

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

////// TEMPLATE STRING
let string = "asfasdf";
let stringAdd = "asdfasdf" + "asdfasdf";

let temString = `Hieu test template: ${"test " + string}`;
console.log(temString);

////// LET CONST
const objConst = { a: "123", b: 321 };
objConst.a = 1111;
objConst.c = 2222;
console.log("Object Const", objConst);

if (true) {
  let blockScope = 123;
}

console.log(blockScope);

////// OBJECT LITERAL
var car = {
  myCar: "Saturn",
  getCar: "Honda",
  special: "sales",
};
