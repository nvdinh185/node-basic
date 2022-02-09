function Person(age, weight) {
    this.age = age;
    this.weight = weight;
    this.getInfo = function () {
        return "I am " + this.age + " years old " +
            "and weighs " + this.weight + " kilo.";
    }
}
function Employee(age, weight, salary) {
    this.salary = salary;
    this.age = age;
    this.weight = weight;
    this.getInfo = function () {
        return "I am " + this.age + " years old " +
            "and weighs " + this.weight + " kilo " +
            "and earns " + this.salary + " dollar.";
    }
}

function showInfo(obj) {
    console.log(obj.getInfo());
}

var person = new Person(50, 90);
var employee = new Employee(43, 80, 50000);
showInfo(person);
showInfo(employee);