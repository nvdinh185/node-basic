function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.showName = function () {
        console.log(this.firstName + ' ' + this.lastName);
    };
}

var psn1 = new Person('Khoa', 'Nguyen');
psn1.showName(); // Khoa Nguyen

// các property khai báo vào biến this có thể bị truy xuất từ bên ngoài
// object không còn bao đóng nữa
psn1.firstName = 'changed';
console.log(psn1.firstName); // changed