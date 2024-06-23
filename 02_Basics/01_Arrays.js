// Array => JavaScript, arrays are resizable and can contain a mix of different data types.

const myArray = [0, 1, 2, "hello", 4, 5, true, 7, 8, 9, 10];
const myHeros = ["hello", "world"]

const myArray2 = new Array(1, 2, 3, 4, 5);
console.log(myArray[0]);

// Array methods

myArray.push(99);
myArray.push(100);
myArray.pop(); // remove last element
console.log(myArray);

myArray.unshift(99);
myArray.shift(); // remove

console.log(myArray.includes(99));
console.log(myArray.indexOf(199)); // `-1` not found

const myArray3 = myArray.join();
console.log(myArray);
console.log(myArray3);
console.log(typeof myArray3);

// slice, splice

console.log("A", myArray);
const myn1 = myArray.slice(1, 4);
console.log(myn1);

console.log("B", myArray);
const myn2 = myArray.splice(1, 4); // manipulates the original array
console.log("C", myArray);
console.log(myn2);