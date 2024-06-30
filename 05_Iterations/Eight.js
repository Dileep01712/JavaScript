const myNums = [1, 2, 3, 4, 5]

// const myTotal = myNums.reduce(function (acc, curr) {
//     console.log(`acc: ${acc} and curr: ${curr}`);
//     return acc + curr;
// }, 0)

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'JS Course',
        price: 2999
    },
    {
        itemName: 'Data Science',
        price: 12999
    },
    {
        itemName: 'Mobile Dev Course',
        price: 5999
    },
    {
        itemName: 'Python Course',
        price: 999
    }
]

const total = shoppingCart.reduce((acc, item) => (acc + item.price), 0)
console.log("Total is " + total);