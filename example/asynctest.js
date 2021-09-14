let soA = (a) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a);
        }, 2000)
    })
}
let soB = (a) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a);
        }, 2000)
    })
}
let soC = (a) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a);
        }, 2000)
    })
}

let in1So = async (a) => {
    let so1 = await soA(a);
    let so2 = await soA(a);
    console.log("Ket qua1: " + so1 + so2)
}

let in2So = async (a) => {
    let so1 = await soA(a);
    let so2 = await soB(a);
    console.log("Ket qua2: " + so1 + so2)
}

in1So(1)
in2So(1)