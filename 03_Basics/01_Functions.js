function sayMyName() {
    console.log("J");
    console.log("A");
    console.log("V");
    console.log("A");
    console.log("Script");
}

sayMyName()

// Parameters
function sum(number1, number2) {
    const res = number1 + number2;
    console.log("Sum of two numbers is ", res);
}

function sum(number1, number2) {
    // let res = number1 + number2;
    // return res;
    return number1 + number2;
}

// Arguments
const result = sum(2, 5);
console.log("Result is", result);

function loginUserMessage(userName = "You") {
    if (!userName) {
        console.log("Please enter a user name");
        return;
    }
    return `${userName} just logged in`;
}

console.log(loginUserMessage()); // undefined
console.log(loginUserMessage("John Smith"));

// Rest operator
function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 500));

const user = {
    userName: "John",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}

handleObject(user);
handleObject({
    userName: "Harry",
    price: 300
});

const myArray = [200, 400, 500, 300];

function returnSecondValue(getArray) {
    return getArray[1];
}

handleObject(user);
console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200, 400, 500, 300]));