const axios = require('axios');
// https://niithanoi.edu.vn/cac-tinh-nang-cua-es6.html

// 1: TỪ KHÓA let

for (let i = 0; i < 5; i++) {
    console.log(i); // 0,1,2,3,4
}
// console.log(i); // undefined

// 2: TỪ KHÓA const

// Thay đổi giá trị thuộc tính của đối tượng
const PERSON = { name: "NIIT", age: 18 };
console.log(PERSON.age); // 18
PERSON.age = 19;
console.log(PERSON.age); // 19
// Thêm thuộc tính cho đối tượng
PERSON.gender = "man";
console.log(PERSON);

// Thay đổi phần tử trong mảng
const COLORS = ["Xanh", "Đỏ", "Tím", "Vàng"];
console.log(COLORS[0]); // Xanh
// Gán lại giá trị cho phần tử đầu tiên
COLORS[0] = "Hồng";
console.log(COLORS[0]); // Hồng
// Thêm phần tử vào mảng
COLORS.push("Trắng");
console.log(COLORS);

// 3. VÒNG LẶP for of
// Lặp qua mảng
let letters = ["a", "b", "c", "d", "e", "f"];

for (let letter of letters) {
    console.log(letter);
}

// Lặp qua chuỗi
let greet = "Hế lô";

for (character of greet) {
    console.log(character);
}

// 4. VÒNG LẶP for in

const objSinhVien = {
    id: 1,
    name: "Nguyen Van Dinh",
    age: 30
}

for (const key in objSinhVien) {
    console.log(key);
}

// 5: TEMPLATE LITERALS

// Chuỗi nhiều dòng
let str = `Mình muốn có một chuỗi
    ở trên nhiều dòng như thế này!`;
console.log(str);

// Tạo chuỗi sử dụng biến và biểu thức
let a = 6;
let b = 9;
let result = `Tổng của ${a} và ${b} là: ${a + b}.`;
console.log(result); // Tổng của 6 và 9 là: 15.

// 6: GIÁ TRỊ MẶC ĐỊNH CHO THAM SỐ

function sayHello(name = "NIIT") {
    return `Xin chào ${name}!`;
}

console.log(sayHello()); // Xin chào NIIT!
console.log(sayHello('Đen Vâu')); // Xin chào Đen Vâu

// 7: ARROW FUNCTION

var square = x => x * x;
console.log(square(5)); // 25

// Một tham số, Một câu lệnh
var hello = name => console.log("Xin chào " + name + "!");
hello("NIIT"); // Xin chào NIIT!

// Nhiều tham số, Một câu lệnh
var multiply = (x, y) => x * y;
console.log(multiply(6, 9)); // 54


// Một tham số, Nhiều câu lệnh
var test = age => {
    if (age > 18) {
        console.log("Đủ tuổi xyz");
    } else {
        console.log("Cấm xyz");
    }
}
test(21); // Đủ tuổi xyz

// Nhiều tham số, Nhiều câu lệnh
var divide = (x, y) => {
    if (y !== 0) {
        return x / y;
    }
}
console.log(divide(10, 2)); // 5

// Không tham số, Một câu lệnh
var hello = () => console.log('Xin chào ES6');
hello(); // Xin chào ES6!

// TỪ KHÓA THIS
function Person(fullName, age) {
    this.fullName = fullName;
    this.age = age;

    this.getInfo = function () {
        // Ngữ cảnh bên ngoài hàm (Đối tượng Person)
        return () => {// Ngữ cảnh bên trong hàm (Đối tượng Person)
            // return function () {// Ngữ cảnh bên trong hàm (Đối tượng 'Window')
            console.log(this.constructor.name); // Person
            console.log(`Tôi là ${this.fullName}. ${this.age} tuổi`);
        };
    }
}

var p = new Person('Linh Trang', 18);
var printInfo = p.getInfo();
printInfo(); // Tôi là Linh Trang. 18 tuổi

// 8: CLASSES

// Tạo một class
class Rectangle {
    // Hàm tạo (constructor)
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    // Phương thức của class
    getArea() {
        return this.length * this.width;
    }
}

class Square extends Rectangle {
    // constructor của class con
    constructor(length) {
        // Gọi đến constructor của class cha
        super(length, length);
    }

    // Phương thức của class con
    getPerimeter() {
        return 2 * (this.length + this.width);
    }
}

// Khởi tạo đối tượng (thể hiện của class Rectangle)
let rectangle = new Rectangle(5, 10);
// Tính diện tích hình chữ nhật
console.log(rectangle.getArea()); // 50

// Khởi tạo đối tượng của class Square
let square1 = new Square(5);
// Tính chu vi
console.log(square1.getPerimeter()); // 20

// Tính diện tích hình vuông
console.log(square1.getArea()); // 25

// 9: REST PARAMETERS

function sortNumbers(...numbers) {
    return numbers.sort();
}

console.log(sortNumbers(3, 5, 7));
// Kết quả: [3, 5, 7]

console.log(sortNumbers(3, 5, 7, 1, 0));
// Kết quả: [0, 1, 3, 5, 7]

function arrayNumbers(a, b, ...numbers) {
    return numbers;
}

console.log(arrayNumbers(3, 5, 7, 1, 0));
// Kết quả: [7, 0, 1]

// 10: SPREAD OPERATOR

function addNumbers(a, b, c) {
    return a + b + c;
}

let numbers = [2, 3, 4];

// Trong ES5
// Cách truyền mảng làm đối số của hàm
console.log(addNumbers.apply(null, numbers)); // 9

// Trong ES6
// Sử dụng toán tử Spread
console.log(addNumbers(...numbers)); // 9

let color1 = ["Xanh", "Đỏ", "Tím"];
let color2 = ["Vàng", "Hồng"];

// Tạo một mảng mới bằng cách chèn mảng đã có
let colors = [...color1, "Nâu", "Đen", "Trắng", ...color2];

console.log(colors);
// ["Xanh", "Đỏ", "Tím", "Nâu", "Đen", "Trắng", "Vàng", "Hồng"]

let obj1 = {
    a: 1,
    b: "123"
}

let obj2 = {
    c: 2,
    d: "456"
}

let obj12 = {
    ...obj1,
    e: "789",
    ...obj2
}
console.log(obj12);// { a: 1, b: '123', e: '789', c: 2, d: '456' }

// 11: DESTRUCTURING ASSIGNMENT

// Cú pháp ES6
let colors1 = ["Xanh", "Đỏ"];

let [a1, b1] = colors1; // Phép gán hủy cấu trúc mảng

console.log(a1); // Xanh
console.log(b1); // Đỏ

// Cú pháp ES6
let colors2 = ["Xanh", "Đỏ", "Tím"];

let [a2, ...r] = colors2;

console.log(a2); // Xanh
console.log(r); // ["Đỏ", "Tím"]
console.log(Array.isArray(r)); // true

// Cú pháp ES6
let school = { name: "NIIT", age: 18 };

let { name, age } = school; // Phép gán hủy cấu trúc đối tượng

console.log(name); // NIIT
console.log(age); // 18

// 12. PROMISE

const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("I love You !!");
    }, 3000);
});

promise.then(value => {
    console.log(value);
});

// 13. Async / Await

// cách 1: 
function getJSON() {

    // To make the function blocking we manually create a Promise.
    return new Promise(function (resolve) {
        axios.get('https://tutorialzine.com/misc/files/example.json')
            .then(function (json) {

                // The data from the request is available in a .then block
                // We return the result using resolve.
                resolve(json);
            });
    });
}
getJSON()
    .then(res => {
        console.log(res.data.length);
    }).catch(err => {
        console.log(err);
    })

axios.get('https://tutorialzine.com/misc/files/example.json')
    .then(function (json) {
        console.log(json.data.length);
    });
// cách 2:
// Async/Await approach

// The async keyword will automatically create a new Promise and return it.
async function getJSONAsync() {

    // The await keyword saves us from having to write a .then() block.
    let json = await axios.get('https://tutorialzine.com/misc/files/example.json');

    // The result of the GET request is available in the json variable.
    // We return it just like in a regular synchronous function.
    return json;
}
getJSONAsync()
    .then(res => {
        console.log(res.data.length);
    }).catch(err => {
        console.log(err);
    });

(async () => {
    let json = await axios.get('https://tutorialzine.com/misc/files/example.json');
    console.log(json.data.length);
})();