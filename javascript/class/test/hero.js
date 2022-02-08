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
// Hero {
//     options: { name: 'health', age: 10 },
//     health: 100,
//         heal: [Function(anonymous)]
// }

// console.log(bigHero.heal());//110

module.exports = Hero;