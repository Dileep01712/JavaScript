const user = {
    username: "admin",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage();
user.username = "Jack";
user.welcomeMessage();

console.log(this); // Empty object

function test() {
    let user = "Bob";
    console.log(this.user);
}

test();

const first = () => {
    let user = "Jack";
    console.log(this); // Empty object
    console.log(this.user);
}

first();

const addTwo = (num1, num2) => {
    return num1 + num2; // Explicit return
}

console.log(addTwo(2, 2));

const fun1 = (num1, num2) => num1 + num2; // Implicite return 
console.log(fun1(2, 2));

const fun2 = (num1, num2) => (num1 + num2) // Implicite return 
console.log(fun2(2, 2));

const fun3 = () => ({ user: "Oggy" }) // returning object
console.log(fun3());   