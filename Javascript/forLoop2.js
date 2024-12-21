//########################### for of ############################//

// ["", "", ""] array
// [{}, {}, {}] object

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);  // to print 1 to 5
}

//#######################################################//

const greetings = "Rohit Das"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}  // to print each character in the given string

//#######################################################//

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }  // Error

//########################## for in #############################//

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}  // Key = js, cpp, rb, swift  // Object = javascript, C++, ruby, swift by apple

//#######################################################//

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log([key]);
}  // Output = 0,1,2,3,4