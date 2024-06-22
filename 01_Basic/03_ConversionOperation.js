let score = "17abc";

console.log(typeof score);
console.log(typeof (score));

let value = Number(score);
console.log(typeof value);
console.log(typeof (value));

console.log(value);

// "17" => 17
// "17abc" => NaN -> type is number
// true => 1; false => 0

let isLoggedIn = 0;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "abc" => true

let someNumber = 17
let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);


// Operations

let numValue = 12
let negValue = -numValue
console.log(negValue);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3);
console.log(2 / 3);
console.log(2 % 3);

let str1 = "hello"
let str2 = "world"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log((3 + 4) * 5 % 3);

console.log(true);
console.log(+true);
console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;
console.log(num1);

let gameCounter = 100;
++gameCounter;
gameCounter++;
console.log(gameCounter);