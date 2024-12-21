let score = 33

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

console.log(valueInNumber);

// "33" = 33
// "33abc" = NaN
// true = 1; false = 0;



let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 = true; 0 = false
// "" = false
// "Rohit" = true



let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);

// 33 = 33




// ############### Operations ############### //

let value = 3
let negValue = -value
console.log(negValue);  // Output = -3


let str1 = "Rohit"
let str2 = " Das"
let str3 = str1 + str2
console.log(str3);  // Output = Rohit Das


console.log(1 + 2);  // Output = 3
console.log("1" + "2");  // Output = 12
console.log("1" + 2);  // Output = 12
console.log(1 + "2");  // Output = 12
console.log("1" + 2 + 2);  // Output = 122
console.log(1 + 2 + "2");  // Output = 32


let gameCounter = 100
gameCounter++;
console.log(gameCounter);  // Output = 101
