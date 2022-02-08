//Hàm khởi tạo đối tượng
function person(name, age) {
    this.name = name;
    this.age = age;
    this.changeName = function (name) {
        this.name = name;
    }
}

//Tạo đối tượng
var p = new person("Khoa", 19);
console.log(p.name);

p.changeName("Vân");
//Giờ p.name bằng "Vân"
console.log(p.name);