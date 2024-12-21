console.log(Math.PI);  // Output = 3.141592653589793

// #######################################################//

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);
// Output = {value: 3.141592653589793, writable: false, enumerable: false, configurable: false}

// #######################################################//

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// Output = {value: 'ginger chai', writable: true,  enumerable: true, configurable: true}

// with defineProperty we can change the value of the properties
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false, 
    value: 5,
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// Output = {value: 5, writable: false,  enumerable: false, configurable: true}