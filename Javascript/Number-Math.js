const score = 400
console.log(score);  // Output = 400

//#######################################################//

const balance = new Number(100)

console.log(balance);  // Output = [Number: 100]
console.log(balance.toString());  // Output = 100  // convert into string
console.log(balance.toFixed(2));  // Output = 100.00  // Fixed two decimel number

//#######################################################//

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));  // Output = 124  // Convert into roundoff value

//#######################################################//

const hundreds = 1000000

console.log(hundreds.toLocaleString());  // Output = 1,000,000  // To count zero easily



//########################### Maths ############################//

console.log(Math);  // Output = Object [Math] {}
console.log(Math.abs(-4));  // Output = 4  // Only negative value change into positive value
console.log(Math.round(5.69));  // Output = 6 // Roundoff the value
console.log(Math.ceil(5.69));  // Output = 6  // Always choose the big roundoff number
console.log(Math.floor(5.69));  // Output = 5  // Always choose the small roundoff number
console.log(Math.min(4,3,6,8));  // Output = 3  // Find the minimum value from the array
console.log(Math.max(4,3,6,8));  // Output = 8  // Find the maximum value from the array
console.log(Math.random());  // Randomly generate decimal numbers between 0 and 1


const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);  // Output = 11
