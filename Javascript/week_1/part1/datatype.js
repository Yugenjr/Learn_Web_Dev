/* 
  Some of the data types in JavaScript are:
  1. String: Represents a sequence of characters. Example: "Hello, World!"
  2. Number: Represents numeric values, including integers and floating-point numbers. Example: 42, 3.14
  3. Boolean: Represents a logical value that can be either true or false. Example: true, false
  4. Null: Represents the intentional absence of any object value. Example: null
  5. Undefined: Represents a variable that has been declared but has not been assigned a value. Example: undefined
  6. Object: Represents a collection of properties and values. Example: { name: "Yugendra", age: 19 }
  7. Symbol: Represents a unique identifier. Example: Symbol("id")
  8. BigInt: Represents integers with arbitrary precision. Example: 9007199254740991n
*/ 

var a = "Hello, World!"; // String
var sc=42; // Number

//let and var are used to declare variables in JavaScript. The main differences between them are:
//1. Scope: var is function-scoped, while let is block-scoped. This means that variables declared with var are accessible throughout the entire function, while variables declared with let are only accessible within the block they are defined in (e.g., within a loop or an if statement).
let teatypes = ["Green Tea", "Black Tea", "Oolong Tea"]; // Array of strings
let person = { name: "Yugendra", age: 19 }; // Object with properties name and age
let getscore = sc;
console.log(getscore); // Output: 42