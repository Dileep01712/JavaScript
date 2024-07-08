class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`User name is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A New course was added by ${this.username}`);
    }
}

const user1 = new Teacher("Happy", "happy@gmail.com", "1259");
user1.addCourse()

const user2 = new User("Happy");
user2.logMe();

console.log(user1 === user2);
console.log(user1 === Teacher);
console.log(user1 instanceof Teacher);
console.log(user1 instanceof User);