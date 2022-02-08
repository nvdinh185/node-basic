function User(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.increaseAge = function () {
        this.age += 1;
    }
}

const user1 = new User('messi', 31, 'messi@gmail.com');
const user2 = new User('ronaldo', 32, 'ronaldo@gmail.com');
const user3 = new User('nani', 31, 'nani@gmail.com');

console.log(user1);
user1.name = "Beckham";// có thể truy cập thuộc tính từ bên ngoài object
user1.increaseAge();
console.log(user1);
