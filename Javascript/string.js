const myName = "Rohit Das"
const broName = "Ranit Das"

console.log(`My name is ${myName} and my brother name is ${broName}`);

//#######################################################//

const gameName = new String('rohit-das')

console.log(gameName[0]);  // Output = r  // r = 0, o = 1, h = 2, i = 3, t = 4
console.log(gameName.length);  // Output = 9
console.log(gameName.toUpperCase());  // Output = ROHIT-DAS
console.log(gameName.charAt(3));  // Output = i
console.log(gameName.indexOf('h'));  // Output = 2

const newString = gameName.substring(0,3)
console.log(newString);  // Output = roh  // last value will not be include

const anotherString = gameName.slice(-8,4)
console.log(anotherString);  // Output = ohi  // There will be add negative value also

console.log(gameName.split("-")); // Output = [ 'rohit', 'das' ]


//#######################################################//

const newStringOne = "    rohit    "

console.log(newStringOne);  // Output =    rohit   
console.log(newStringOne.trim());  // Output = rohit
// Normal output print the spaces but trim only print the text not spaces

//#######################################################//

const url = "https://rohit.com/rohit%20das"

console.log(url.replace('%20','-'))  // Replace "%20" to "-" in this url
console.log(url.includes('rohit'));  // rohit is include or not in this url
