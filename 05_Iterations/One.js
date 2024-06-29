// for loop

for (let i = 0; i < 10; i++) {
    let element = i;
    if (element == 5) {
        // console.log("The number is 5");
    }
    // console.log("Inside loop:",element);
}
// console.log("Outside loop:",element);

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop: ${j} and outer loop: ${i}`);
        // console.log(i + ' * ' + j + ' = ' + i * j);
    }
}

let myArray = ["A", "B", "C", "D", "E", "F", "G", "H"];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log("Array elements are: " + element);
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        break;
    }
    console.log(`Value of i is ${index}`);
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is ${index}`);
}