let Animal = require('./animal');

class Dog extends Animal {
    constructor(legs, color) {
        super(legs);
        this.color = color;
    }

    getColor() {
        return this.color;
    }
}

module.exports = Dog;