let Animal = require('./animal');

class Bird extends Animal {
    constructor(legs) {
        super(legs);
    }

    walk() {
        console.log("I can't walk");
    }

    fly() {
        console.log('flying');
    }
}

module.exports = Bird;