//########################### for ############################//

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
}  // Output = 1,2,3,4,5 is best number,6,7,8,9,10

//#######################################################//

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    console.log(`Inner loop value ${j} and outer loop ${i}`);
    console.log(i + '*' + j + ' = ' + i*j );  // print 1 to 10 table
   }
}

//#######################################################//

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);  // Output = 3
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);  // Output = flash, batman, superman
}

//########################### break ############################//

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);  // when 5 is there print detected 5
        break  // after 5 nothing print in the output
    }
   console.log(`Value of i is ${index}`);  // print 1 to 20
}

//########################### continue ############################//

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);  // when 5 is there print detected 5
        continue  // All print in the output
    }
   console.log(`Value of i is ${index}`);  // print 1 to 20
}