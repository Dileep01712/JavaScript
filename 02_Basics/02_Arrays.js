const superHeros = ["heros1", "heros2", "heros3", "heros4", "heros5"];
const superMaxHeros = ["maxHeros1", "maxHeros2", "maxHeros3", "maxHeros4", "maxHeros5"];

superHeros.push(superMaxHeros);
console.log(superHeros);
console.log(superHeros[5][3]);

const allHeros = superHeros.concat(superMaxHeros);
console.log(allHeros);

const allHeros2 = [...superHeros, ...superMaxHeros];
console.log(allHeros2);

const anotherArray = [1, 2, 3, 4, [5, 6, 7, 8, [9, 10]]]

const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);

console.log(Array.isArray("Hello"));
console.log(Array.from("Hello"));
console.log(Array.from({ key: "value" })); // Specify what should be in the array it should include key or value

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));