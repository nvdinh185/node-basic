class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    increaseAge() {
        this.age += 1; //tăng thêm tuổi  
    }
}

const user1 = new User('messi', 31, 'messi@gmail.com');
console.log(user1); //User {name: "messi", age: 31, email: "messi@gmail.com"}
user1.name = "beckham";// vẫn có thể truy cập được thuộc tính từ bên ngoài class ???
user1.increaseAge();
console.log(user1); // User {name: "messi", age: 32, email: "messi@gmail.com"}