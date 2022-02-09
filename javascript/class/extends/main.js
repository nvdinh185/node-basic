let Animal = require('./animal');
const Bird = require('./bird');
const Dog = require('./dog');


let animal = new Animal(2);
animal.walk(); // walking on 2 legs

let bird = new Bird(0);
bird.walk(); // I can't walk
bird.fly(); // I'm flying

let dog = new Dog(4, "white");
dog.walk(); // walking on 4 legs
console.log(dog.getColor()); // white
