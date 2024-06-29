// for of loop

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}

const msg = "Hello World!";
for (const m of msg) {
    console.log(m);
}

// maps

const map = new Map();
map.set('name1', 'Jack');
map.set('name2', 'Bob');
map.set('name3', 'Oggy');
map.set('name4', 'Mosh');

console.log(map);

for (const key  of map) {
    console.log(key); // Array
}

for (const [key, value] of map) {
    console.log(key,":-", value); // Key and value
}

const myObj = {
    'game1': 'NFS',
    'game2': 'COD',
    'game2': 'PUBG',
}

// for (const [key, value] of myObj) {
//     console.log(key, ":-", value);
// }
