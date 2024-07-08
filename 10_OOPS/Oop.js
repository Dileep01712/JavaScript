const user = {
    userName: "Bob",
    loginCount: 8,
    signedIn: false,

    getUserDetails: function () {
        console.log("Got user details from database");
        console.log(`Username: ${this.userName}`);
        console.log(this);
    }
}

console.log([user]);
console.log(user.userName);
console.log(user.getUserDetails());
console.log(this);

function User(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`Welcome ${this.userName}`);
    }
    return this // Implicity return is added
}


const userOne = new User("Jack", 12, true);
const userTwo = new User("Oggy", 10, false);
console.log(userOne);
console.log(userOne.greeting());
// console.log(userOne.counstrutor);
console.log(userTwo);