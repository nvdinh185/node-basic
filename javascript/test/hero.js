class Hero {
    constructor(options = {}, health) {
        this.options = options;
        this.health = health;
        this.heal = () => {
            return (this.health += 10);
        };
    }
}

// let bigHero = new Hero({ name: "health", age: 10 }, 100);
// console.log(bigHero);

// console.log(bigHero.heal());

module.exports = Hero;