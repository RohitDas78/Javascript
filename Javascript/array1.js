//########################### array ############################//

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[0]);  // Output = 0  // 0th position element in array is 0

const myHeors = ["thor", "hulk"]
console.log(myHeors[0]);  // Output = thor

const myArr2 = new Array(1, 2, 3, 4)


//########################### array methods ############################//

myArr.push(6)
console.log(myArr);  // Push 6 in the array

myArr.pop()  // Last value remove

myArr.unshift(9)  // Put 9 at the first in the array
myArr.shift()  // First element in the array is delete

console.log(myArr.includes(9));  // Output = false  // to check 9 is include or not include in the array
console.log(myArr.indexOf(3));  // Output = 3  // in which position 3 has in the array

//#######################################################//

const newArr = myArr.join()

console.log(myArr);  // Output = [ 0, 1, 2, 3, 4, 5 ]
console.log( newArr);  // Output = 0, 1, 2, 3, 4, 5  // convert into string


//########################### slice ############################//

console.log("A ", myArr);  // Output = A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)
console.log(myn1);  // Output = [ 1, 2 ]  // Last array will not include

console.log("B ", myArr);  // Output = B  [ 0, 1, 2, 3, 4, 5 ]

//########################### splice ############################//

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);  // Output = C  [ 0, 4, 5 ]

console.log(myn2);  // Output = [ 1, 2, 3 ]