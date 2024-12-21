const myNums = [1, 2, 3]         // acc = accumulator  currval = current value

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);  // Output = acc: 0 and currval: 1 , acc: 1 and currval: 2 , cc: 3 and currval: 3
    return acc + currval
}, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)  // output = 6

console.log(myTotal);  // Output = 6

//#######################################################//

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
// Total amount of bill payment
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);  // Output = 22996