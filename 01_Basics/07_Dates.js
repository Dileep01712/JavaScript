// Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); // Object

// let myCreateDate = new Date(2020, 7, 15, 5, 3); // Months => 0 - 11
// let myCreateDate = new Date("2020-08-15"); // Months => 0 - 11
let myCreateDate = new Date("08-15-2020"); // Months => 0 - 11
// console.log(myCreateDate.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', {
    weekday: "long",
    dateStyle:"full",
})