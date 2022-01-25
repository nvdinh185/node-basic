class Animal {
    constructor(legs) {
        this.legs = legs;
    }

    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
}

module.exports = Animal;