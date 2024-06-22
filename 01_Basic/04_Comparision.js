console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// Strick check ===

console.log("2" === 2);

// +++++++++++++++++++++++++++++++++++
// Stack(Primitive), Heap(Non-Primitive)

let myName = "Happy";

let anotherName = myName;
anotherName = "Changed";
console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@example.com",
    upi: "upi@payment",
}

let userTwo = userOne;

userTwo.upi = "upi@pay";

console.log(userOne.upi);
console.log(userTwo.upi);