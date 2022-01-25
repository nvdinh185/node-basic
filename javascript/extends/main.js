let Animal = require('./animal');
const Bird = require('./bird');
const Dog = require('./dog');


let animal = new Animal(2);
animal.walk();

let bird = new Bird(0);
bird.walk();
bird.fly();

let dog = new Dog(4, "white");
console.log(dog.getColor());
