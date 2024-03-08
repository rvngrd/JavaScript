// alert("hello mashti :D")

// declaring variables
let a = "aha";
//camelCase is a variable naming convention where the first word is always in lowercase and every other word starts with a capital letter
let firstName = "Iman";
console.log(firstName);

// Variables declared with the var always have Global Scope
// let has a scope and the variable can't be used out of its scope(Function Scope)

{
    let b = "bb";
    var x = "xx";
    x = 12;
}
console.log(x);
// console.log(b);     //Uncaught ReferenceError: b is not defined

// Variables defined with let can not be redeclared
// Variables defined with var can be redeclared
var y = "John Doe";
var y = 0;

// Declaring a const(JavaScript const variables must be assigned a value when they are declared)
// Declaring a variable with const is similar to let when it comes to Block Scope(Function Scope)
const PI = 3.14;

/* Use const when you declare:
A.new Array
B.new Object
C.new Function
D.new RegExp 
*/
const cars = ["Saab", "Volvo", "BMW"];
// You can change an element:
cars[0] = "Toyota";
// You can add an element:
cars.push("Audi");
console.log(cars);


// Hoisting
// Variables defined with var are hoisted to the top and can be initialized at any time.
// Meaning: You can use the variable before it is declared
carName = "Volvo";
var carName;
// Using a const variable before it is declared will result in a ReferenceError
