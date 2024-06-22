// Primitive => 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = .3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id == anotherId);

const bigNumber = 225688558558557n;



// Non-primitive or Reference => Array, Objects, Functions

const heros = ["hero1", "hero2", "hero3"]
let myObj = {
    // key: value,
    name: "hero1",
    age: 28
}

const myFunction = function (value) {
    console.log("Hello world");
}

console.log(typeof id); // data types: symbol
console.log(typeof outSideTemp); // data types: object
console.log(typeof bigNumber); // data types: bigint
console.log(typeof myFunction); // data types: function-object