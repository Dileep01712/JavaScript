class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return `123`;
    }
}

const user = new User("Kalki");
// console.log(user.createId());

class Teacher extends User {
    constructor(email) {
        super(email);
        this.email = email;
    }
}

const user1 = new Teacher("Kalki", "kalki@gmail.com");
console.log(user1.logMe());