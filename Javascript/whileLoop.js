//########################### while ############################//

let index = 1
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 1
}  // Output = print 1 to 10

//#######################################################//

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}  // Output = Value is flash, Value is batman, Value is superman

//########################## do while #############################//

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);  // Output = Score is 11