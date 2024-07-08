let myName = "Bheem";

console.log(myName.trueLength);

let myHeros = ["A", "B", "C"]

let heroPower = {
    A: "Apple",
    B: "Banana",
    C: "Cookie",

    getPower: function () {
        console.log(`Power is ${this.heroPower}`);
    }
}

Object.prototype.Bheem = function () {
    console.log(`Bheem is present in all objects`);
}

Array.prototype.heyBheem = function () {
    console.log(`Bheem is present here`);
}

heroPower.Bheem();
myHeros.heyBheem();
// heroPower.heyBheem();
myHeros.Bheem();

// Inheritance

const User = {
    name: 'Smith',
    email: 'smith@example.com',
}

const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport,
}

Teacher.__proto__ = User

// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherName = "Visual Code        "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True lenght is ${this.trim().length}`);
}

anotherName.trueLength();
"Oggy".trueLength();
"Kung".trueLength();