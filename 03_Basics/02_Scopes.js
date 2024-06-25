let num1 = 300;
if (true) {
    let num1 = 10;
    const num2 = 20;
    // var num3 = 30;
    console.log("Inner block: ", num1);
}

console.log(num1);
// console.log(num2);
// console.log(num3);

function one() {
    const userName = "John Doe";

    function two() {
        const website = "YouTube";
        console.log(userName);
    }
    // console.log(website);

    two();
}

one();

if (true) {
    const userName = "John Doe";
    if (userName === "John Doe") {
        const website = " YouTube";
        console.log(userName + website);
    }
    // console.log(website);
}

// console.log(userName);

console.log(addOne(5));

function addOne(num) {
    return num + 1;
}

console.log(addOne(5));

// addTwo(5); // Not acceptable
const addTwo = function (num) {
    return num + 2;
}

console.log(addTwo(5));