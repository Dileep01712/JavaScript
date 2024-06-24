// const appUser = new Object();
const appUser = {};

appUser.id = "125abx",
    appUser.name = "Happy",
    appUser.isLoggedIn = false,
    console.log(appUser);

const regularUser = {
    email: "user@example.com",
    fullName: {
        userFullName: {
            firstName: "John",
            lastName: "Smith",
        }
    }
}

console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullName);
console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {
    1: "a",
    2: "b",
    3: "c",
}

const obj2 = {
    4: "d",
    5: "e",
    6: "f",
}

const obj3 = { obj1, obj2 };
console.log(obj3);

const obj4 = Object.assign(obj1, obj2);
console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2);
console.log(obj5);

const obj6 = { ...obj1, ...obj2 };
console.log(obj6);

const users = [
    {
        id: 1,
        email: "user@example.com",
    },
    {
        id: 1,
        email: "user@example.com",
    },
    {
        id: 1,
        email: "user@example.com",
    }
]

users[1].email;

console.log(appUser);
console.log(Object.keys(appUser));
console.log(Object.values(appUser));
console.log(Object.entries(appUser));

console.log(appUser.id.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "JavaScript",
    price: "999",
    courseInstructor: "John",
}

// course.courseInstructor 

const { courseInstructor: cI } = course;
console.log(cI);

// {
//     "courseName": "JavaScript",
//     "price": "999",
//     "courseInstructor": "John",
// }

[{}, {}, {}, {}, {}, {}]

// Google => Random user generator, json formatter