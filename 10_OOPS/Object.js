function multipleBy5(number) {
    return number * 5
}

multipleBy5.power = 2
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function () {
    this.score++;
}

createUser.prototype.printMe = function () {
    console.log(`Score: ${this.score}`);
}

const user1 = new createUser("Harry", 20);
const user2 = createUser("Joy", 30);

user1.printMe();