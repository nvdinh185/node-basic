class Hero {
    constructor(options = {}, health) {
        this.options = options;
        this.health = health;
        this.heal = () => {
            return (this.health += 10);
        };
    }

    run() {
        console.log(`I have ${this.health} health and I am running...`);
    }
}

// let bigHero = new Hero({ name: "health", age: 10 }, 100);
// console.log(bigHero);
// Hero {
//     options: { name: 'health', age: 10 },
//     health: 100,
//         heal: [Function(anonymous)]
// }

// console.log(bigHero.heal()); // 110
// bigHero.run(); // I have 100 health and I am running...

module.exports = Hero;