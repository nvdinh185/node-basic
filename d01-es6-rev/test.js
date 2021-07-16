////// SPREAD

let arr = [1, 2, 3, 4, 5]; // 1 dia chi bien

arr.splice(arr.length, 0, 6, 7, 8, (res) => console.log("res:", res));
console.log("origin arr", arr);

let arrNew = [...arr]; // 1 dia chi bien khac

console.log(arr === arrNew);

function sampleCallBack(this1) {
    console.log(this1);
}

// (() => {
//     alert("Arrow Func");
// })();