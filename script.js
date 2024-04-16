// alert("JavaScript Tutorial")

// declaring variables
let a = "meh";
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

// JavaScript has 8 Datatypes
/*
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object
*/
{
    let x = true;
    console.log(typeof x);
    let y = null;
    console.log(typeof y);
    let z = 16;
    z += "Volvo";   // Appends the number to the string
    console.log(z);
    let m;
    console.log(typeof m); //undefined
}

// JavaScript Operators
{
    let a = 3;
    a--;
    let x = (100 + 50) * a;
}

// Exponential Notation
{
    let y = 123e5;    // 12300000
    let z = 123e-5;   // 0.00123
}

// JavaScript Comparison Operators
/*
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
*/

// When used on strings, the + operator is called the concatenation operator
{
    let text1 = "What a very ";
    text1 += "nice day";
}

// JavaScript Logical Operators
/*
&&	logical and
||	logical or
!	logical not
*/ 
{
    let x = true;
    let y = false;
    console.log(x && y);
}

// Operator Precedence
// Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).
// And (as in school mathematics) the precedence can be changed by using parentheses
// When many operations have the same precedence (like addition and subtraction or multiplication and division), they are computed from left to right

// Shift Assignment Operators
// x <<= y     left shift
// x >>= y	    right shift
// x >>>= y    unsigned right shift

// Bitwise Assignment Operators
// &   and
// |   or
// ^   xor

// Templates were introduced with ES6 (JavaScript 2016)
// Templates allow single and double quotes inside a string
{
    let x = `salam 'Iman' va "Omid"`;
}

// String
{
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let length = text.length;
    console.log(length);
}
// \'	'	Single quote
// \"	"	Double quote
// \\	\	Backslash
// example
{
    let text = "We are the so-called \"Vikings\" from the north.";
    console.log(text);
}
// Using a variable inside a string with ${}
{
    let x = 18;
    let text = `I'm turning ${x} tomorrow`;
    console.log(text);
}

// Breaking Long Lines
// For readability, programmers often like to avoid long code lines.
// A safe way to break up a statement is after an operator.
/*
    document.getElementById("demo").innerHTML =
    "Hello Dolly!";
*/

// New line in string
{
    let text1 = `aha injoori
doroste!`;
    let text2 = "aha injoori \n\doroste!";
    console.log(text1);
    console.log(text2); 
}

// == vs. ===
/*
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
*/
{
    let x = "15";
    if (x === 15) {
        console.log("ok");
    } else {
        console.log("not ok");
    }

}

// if, else, else if
{
    let time = 12;
    if (time < 10) {
        greeting = "Good morning";
      } else if (time < 20) {
        greeting = "Good day";
      } else {
        greeting = "Good evening";
      }
    console.log(greeting);
}

// Switch
{
    let day;
    switch (new Date().getDay()) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case  6:
        day = "Saturday";
        break;
      default:
        text = "Out of range!";      
    }
    console.log(day);
}

// Function
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
let value = toCelsius(77);
console.log(value);

// Expression Function
/*
The Function Expression allows us to create an anonymous function 
that doesn’t have any function name which is the main difference between Function Expression and Function Declaration
*/
let calMul = function Mul(x, y) {
  let z = x * y;
  return z;
}
console.log("Multiplication : " + calMul(7, 4));   // you can call the function with the variable name 
// you will get an error if you use expression function before declaring it(e.g, moving line above before let calMul)

// Arrow Function 
// is concise way of writing JavaScript functions in shorter way
let age = ( birth = 2000 ) => {   // default value is 2000
  return 2024 - birth;
}
console.log(age(2001));

// Calling a function inside of another function
function ageFn(newAge) {
  let myNewAge = newAge + 3;
  return myNewAge;
}

function salaryFn(newSalary) {
  let myNewSalary = newSalary + 200;
  return myNewSalary;
}

function myDetails(myAge, mySalary) {
  let myNewAge = ageFn(myAge);
  let myNewSalary = salaryFn(mySalary);
  console.log(`my age is ${myNewAge}, and my salary is ${myNewSalary}`);
}
myDetails(20, 700);

// Arrays
// An array is a special variable, which can hold more than one value
// It is a common practice to declare arrays with the const keyword
{
  const cars = ["Saab", "Volvo", "BMW"];
  console.log(cars);
  // Access to elements, starts from 0
  console.log(cars[1]);
}
// Using the JavaScript Keyword new
// For simplicity, readability and execution speed, use the array literal method
{
  const cars = new Array("Saab", "Volvo", "BMW");
  console.log(cars.length);
  // Changing an Array Element
  cars[0] = "Benz";
  console.log(cars);
  // Arrays are Objects
  console.log(typeof(cars));
  // How to Recognize an Array
  console.log(Array.isArray(cars));  // returns true
  // The Difference Between Arrays and Objects
  /*
  In JavaScript, arrays use numbered indexes.  
  In JavaScript, objects use named indexes.
  */
}

// JavaScript Array Methods
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  // toString() converts an array to a string of (comma separated) array values.
  console.log(fruits.toString()); // Result: Banana,Orange,Apple,Mango 
  // The at() method returns the same as []
  let fruit1 = fruits.at(2);
  let fruit2 = fruits[2];
  console.log(fruit1 === fruit2); // returns true
  // join(), It behaves just like toString(), but in addition you can specify the separator
  console.log(fruits.join(" - "));
  // The pop() method removes the last element from an array
  fruits.pop();
  console.log(fruits); // Mango will be popped
  // saving the popped element
  let x = fruits.pop();
  console.log(x);
  // The push() method adds a new element to an array (at the end)
  let y = fruits.push("Kiwi");
  console.log(fruits);
  // The push() method returns the new array length
  console.log(y);
  // The shift() method removes the first array element and "shifts" all other elements to a lower index
  let z = fruits.shift();
  console.log(fruits);
  // The shift() method returns the value that was "shifted out
  console.log(z); // returns "Banana"
  // The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
  let a = fruits.unshift("Lemon");
  console.log(fruits);
  // The unshift() method returns the new array length
  console.log(a);
  // The length property provides an easy way to append a new element to an array
  fruits[fruits.length] = "Apple";
  console.log(fruits);
  // The concat() method creates a new array by merging (concatenating) existing arrays
  // The concat() method can take any number of array arguments
  const myGirls = ["Zahra", "Sahar"];
  const myBoys = ["Iman", "Sina", "Reza"];
  const myChildren = myGirls.concat(myBoys);
  console.log(myChildren);
  // The concat() method can also take strings as arguments
  const arr1 = ["Emil", "Tobias", "Linus"];
  const arr2 = arr1.concat("Peter");
  console.log(arr2);
  // The splice() method can be used to add new items to an array
  const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
  fruits2.splice(2, 0, "Lemon", "Kiwi");
  console.log(fruits2);
  /*
  ------------------------------------
  The first parameter (2) defines the position where new elements should be added (spliced in).
  The second parameter (0) defines how many elements should be removed.
  The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
  ------------------------------------
  */
 // With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array
 fruits2.splice(0, 1);
 console.log(fruits2);
 // The slice() method slices out a piece of an array into a new array
 // The method selects elements from the start argument, and up to (but not including) the end argument
 const arr3 = fruits.slice(1, 3);  // Slice out a part of an array starting from array element 1 to 3(not including 3)
 console.log(arr3);
 // The sort() method sorts an array alphabetically
 console.log(fruits.sort());
 // The reverse() method reverses the elements in an array
 console.log(fruits.reverse());
}