// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptedPassword() {
//         return `${this.password}abc`;
//     }

//     changeUserName() {
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const user1 = new User("First", "first@example.com", "1203")
// console.log(user1);
// console.log(user1.encryptedPassword);
// console.log(user1.changeUserName());

// Behind the scenes

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptedPassword = function () {
    return `${this.password}abc`;
}

User.prototype.changeUserName = function () {
    return `${this.username.toUpperCase()}`;
}

const user2 = new User("First", "first@example.com", "1203")
console.log(user2);
console.log(user2.encryptedPassword);
console.log(user2.changeUserName());