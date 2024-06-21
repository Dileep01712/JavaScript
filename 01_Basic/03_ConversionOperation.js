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