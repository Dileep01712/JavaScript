// Singleton instance
// Object.create;

// object literals

const mySym = Symbol("key1");

const user = {
    name: 'user',
    "full name": "Happy user",
    [mySym]: "myKey1",
    age: 36,
    location: "mumbai",
    email: "user@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
};

console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]);
console.log(user[mySym]);
console.log(typeof user[mySym]);

user.email = "happy@gmail.com";
// Object.freeze(user);
user.email = "happy@google.com";
console.log(user);

user.greeting = function () {
    console.log("Hello js user");
}
user.greeting2 = function () {
    console.log(`Hello js user, ${this.name}`);
}

console.log(user.greeting); //[Function (anonymous)]
console.log(user.greeting());
console.log(user.greeting2());