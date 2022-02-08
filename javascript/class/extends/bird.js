let Animal = require('./animal');

class Bird extends Animal {
    constructor(legs) {
        super(legs);
    }

    walk() {
        console.log("I can't walk");
    }

    fly() {
        console.log("I'm flying");
    }
}

module.exports = Bird;