// if

const isUserLoggedIn = true;
const temprature = 41;

if (temprature === 40) {
    console.log("Less than 40");
}
else {
    console.log("Temprature is greater than 40");
}
console.log("Executed");

/*
<, >, <=, >=, ==, !=, ===, !==
*/

const score = 200;
if (score > 100) {
    let power = "Fly";
    console.log(`User prower:  ${power}`);
}
// console.log(`User prower:  ${power}`);

const balance = 1000;

// if (balance > 500) console.log(`Balance: ${balance}`),
// console.log(`Balance: ${balance}`);

if (balance < 500) {
    console.log("Less than 500");
}
else if (balance < 750) {
    console.log("Less than 750");
}
else if (balance < 1000) {
    console.log("Less than 1000");
}
else {
    console.log("Greater than 1000");
}

const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (isUserLoggedIn && debitCard) {
    console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
