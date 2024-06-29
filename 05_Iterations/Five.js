const coding = ["JS", "Python", "JavaScript", "CPP"]

coding.forEach(function (item) {
    console.log(item);
})

coding.forEach((item) => {
    console.log(item);
})

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe);

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

const myCoding = [
    {
        name: 'Javascript',
        file: 'js'
    },
    {
        name: 'Python',
        file: 'py'
    },
    {
        name: 'C++',
        file: 'cpp'
    },
]

myCoding.forEach((item) => { 
    console.log(item.name);
})