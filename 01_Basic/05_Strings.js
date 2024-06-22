const name = "Ray"
const repoCount = 9

// console.log(name + repoCount+" numbers");

console.log(`Hello my name is ${name.toUpperCase()} and repo count is ${repoCount}`);

const gameName = new String("Hero-Jack-Red");

console.log(gameName[0]);
console.log(gameName.__proto__); // Object

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("o"));

const newString = gameName.substring(0, 3);
console.log(newString); // Last string is not included in this string. Op:- Her

const anotherString = gameName.slice(-3, 7);// Takes negative number at is will start from reverse of string.
console.log(anotherString);

const newString1 = "     hello  world  ";
console.log(newString1);
console.log(newString1.trim());

const url = "https://localhost.com/help%20topics";

console.log(url.replace('%20', '-'));

console.log(url.includes('/help-topics'));
console.log(url.includes('/help%20topics'));

console.log(gameName.split('-')); // Array is created based on `-`
