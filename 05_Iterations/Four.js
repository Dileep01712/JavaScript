// For-in loop
const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple',
}

for (const key in myObj) {
    console.log(key); // keys
}

for (const key in myObj) {
    console.log(myObj[key]); // values
}

for (const key in myObj) {
    console.log(`The key is ${key} and value is ${myObj[key]}`);
}


const myArray = ["JS", "CPP", "Ruby", "Java", "Swift"];

for (const key in myArray) {
    console.log(key); // index number
}

for (const key in myArray) {
    console.log(myArray[key]); // values
}

for (const key in myArray) {
    console.log(`The key is ${key} and value is ${myArray[key]}`);
}

// const map = new Map();
// map.set('name1', 'Jack');
// map.set('name2', 'Bob');
// map.set('name3', 'Oggy');
// map.set('name4', 'Mosh');

// for (const key in map) {
//      console.log(key);
// }

