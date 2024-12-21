
function sayMyName(){
    console.log("R");
    console.log("O");
    console.log("H");
    console.log("I");
    console.log("T");
}
sayMyName()  

//#######################################################//

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
addTwoNumbers(2 + 3)  // Output = 5


function addTwoNumbers(number1, number2){

    let result = number1 + number2
    return result
    // return number1 + number2
}
const result = addTwoNumbers(3, 5)
console.log("Result: ", result);  // Output = Result:  8

//#######################################################//

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("rohit"))  // Output = rohit just logged in
console.log(loginUserMessage())  // Output = PLease enter a username

//#######################################################//

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))  // Output = [ 500, 2000 ]


const user = {
    username: "rohit",
    prices: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)  // Output = Username is rohit and price is undefined
// or
handleObject({
    username: "sam",
    price: 399  // Output = Username is sam and price is 399
})

//#######################################################//

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));  // Output = 400
console.log(returnSecondValue([200, 400, 500, 1000]));  // Output = 400