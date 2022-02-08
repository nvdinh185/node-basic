const Hero = require("./hero.js");

class miniHero extends Hero {
    constructor(options) {
        super(options);
        this.health = 50;
        this.heal = () => {
            return (this.health += 5);
        };
    }
}

let miniH = new miniHero({ name: "health", age: 10 });
console.log(miniH);
// miniHero {
//     options: { name: 'health', age: 10 },
//     health: 50,
//         heal: [Function(anonymous)]
// }