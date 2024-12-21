const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    console.log(val);
} )  // Output = js, ruby, java, python, cpp


coding.forEach( (item) => {
    console.log(item);
} )  // Output = js, ruby, java, python, cpp


function printMe(item){
    console.log(item);
}
coding.forEach(printMe)  // Output = js, ruby, java, python, cpp


coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )  
// Item = js, ruby, java, python, cpp
// Index = 0,1,2,3,4
// Arr = [ 'js', 'ruby', 'java', 'python', 'cpp' ]

//#######################################################//    

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )  // Output = javascript, java, python

//#######################################################// 

const coding1 = ["js", "ruby", "java", "python", "cpp"]

const values = coding1.forEach( (item) => {
    console.log(item);  // Output = js, ruby, java, python, cpp
    return item  // Output = undifined
} )

console.log(values);

//#######################################################//

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = []

myNums.forEach( (num) => {  // Use For each
    if (num > 4) {
        newNums.push(num)
    }
} )
console.log(newNums);  // Output = [ 5, 6, 7, 8, 9, 10 ]