function Animals(name, age) {
    let newAnimal = Object.create(animalConstructor);
    newAnimal.name = name;
    newAnimal.age = age;
    return newAnimal;
}

let animalConstructor = {
    sing: function () {
        return `${this.name} can sing`;
    },
    dance: function () {
        return `${this.name} can dance`;
    }
}

function Cats(name, age, whiskerColor) {
    let newCat = Animals(name, age);
    Object.setPrototypeOf(newCat, catConstructor);
    newCat.whiskerColor = whiskerColor;
    return newCat;
}

let catConstructor = {
    whiskers() {
        return `I have ${this.whiskerColor} whiskers`;
    }
}

Object.setPrototypeOf(catConstructor, animalConstructor);
const clara = Cats("Clara", 33, "purple");
console.log(clara.sing());
console.log(clara.whiskers());
// Expected Output
// "Clara can sing"
// "I have purple whiskers"