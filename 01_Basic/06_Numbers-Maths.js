// const score = 500;
// const balance = new Number(5035);
// console.log(score);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
// console.log(typeof balance.toString());

// const num = 25.8589;
// console.log(num.toPrecision(2));

// const result = 1000000;
// console.log(result.toLocaleString());
// console.log(result.toLocaleString('en-IN'));


// Maths

console.log(Math); // Object [Math] {}
console.log(Math.abs(-12));

console.log(Math.round(4.62));
console.log(Math.ceil(4.62)); // Top value
console.log(Math.floor(4.62)); // Bottom value

console.log(Math.min(2, 5, 9, 6));
console.log(Math.max(2, 5, 9, 6));

console.log(Math.random()); // Default value between 0-1
console.log((Math.random() * 10) + 1);
console.log((Math.random() * 10) + 1);

const min = 1;
const max = 6;

console.log(Math.random() * (max - min + 1));
console.log(Math.floor(Math.random() * (max - min + 1)));
console.log(Math.floor(Math.random() * (max - min + 1) + min));