function Person(firstName, lastName) {
    var fstName = firstName;
    var lstName = lastName;

    this.setFirstName = function (firstName) {
        fstName = firstName;
    };

    this.getFirstName = function () {
        return fstName;
    };

    this.setLastName = function (lastName) {
        lstName = lastName;
    };

    this.getLastName = function () {
        return lstName;
    };
}

var person = new Person('Khoa', 'Nguyen');
console.log(person.fstName); // Undefined, không thể truy cập được


console.log(person.getFirstName()); // Khoa