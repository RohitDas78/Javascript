// ########################## Dates #############################//

let myDate = new Date()

console.log(myDate.toString());  // Output = Tue Dec 03 2024 11:58:48 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());  // Output = Tue Dec 03 2024
console.log(myDate.toLocaleString());  // Output = 12/3/2024, 11:58:48 AM
console.log(typeof myDate);  // Output = object

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());  // Output = Mon Jan 23 2023

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate1.toLocaleString());  // Output = 1/23/2023, 5:03:00 AM

let myCreatedDate2 = new Date("2023-01-14")
console.log(myCreatedDate2.toLocaleString());  // Output = 1/14/2023, 5:30:00 AM

let myCreatedDate3 = new Date("01-14-2023")
console.log(myCreatedDate3.toLocaleString());  // Output = 1/14/2023, 12:00:00 AM

// #######################################################//

let myTimeStamp = Date.now()

console.log(myTimeStamp);  // Output = 1733208285389
console.log(myCreatedDate.getTime());  // To get compare two number
console.log(Math.floor(Date.now()/1000));  // Output = 1733208700  // Convert mili seconds into seconds

// #######################################################//

let newDate = new Date()

console.log(newDate);  // To get date
console.log(newDate.getMonth());  // To get month
console.log(newDate.getDay());  // To get day

`${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})