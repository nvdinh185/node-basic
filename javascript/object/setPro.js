let key = "hello";
let val = "world";

// Old way 
// const obj = {
//     key: key,
//     val: val
// }

// Modern way 
const obj = {
    key,
    val,
}
console.log(obj);// { key: 'hello', val: 'world' }

const x = 'khoa';

const obj2 = {
    [x]: 07
}

console.log(obj2);// { khoa: 7 }