console.log("Hello World"); //single-line string
console.log(`This is a multi-line string
that spans across multiple lines.`);  //multi-line string


window.alert("This is an alert");    //alert box
/*

multiline comment
*/
let x;
let y;
x=100;
y=200;
let z = x + y;
console.log(z); //addition of two numbers

let age=20;
console.log(`You are ${age} years old`); //string interpolation
let a=10;
console.log("the value of a is " + a); //string concatenation

console.log(typeof a); //data type of variable
let isAdult = true;
console.log(typeof isAdult); //data type of boolean

let name="Yugen";
console.log(typeof name); //data type of string

let age1 = 25; //let keyword
let name1 = "John"; //let keyword
let isStudent = true; //let keyword

document.getElementById("p1").textContent = "Age: " + age1; //DOM manipulation
document.getElementById("p2").textContent = "Name: " + name1; //DOM manipulation
document.getElementById("p3").textContent = "Is Student: " + isStudent; //DOM manipulation

//------------------------------------------------------------------------------------------------------------//

//arithmetic operators

//+ - * / % **

let students=30;
students+=10; //students=students+10;
console.log(students);
students-=10;
console.log(students);

//operators precedence

//rules:

//1. ()
//2. ** (exponentiation)
//3. * / % (multiplication, division, modulus)
//4. + - (addition, subtraction)
//5. = (assignment)
//6. comparison operators
//7. logical operators
//8. ternary operator
//9. typeof operator


//---------------------------------------------------------------------------------------------------

//user input

//1. easy way to get user input is through prompt() function

// let userName = prompt("Enter your name: ");
// console.log("Hello " + userName);

//2. another way to get user input is through form elements

document.getElementById("mySubmit").onclick = function() {
    let userName = document.getElementById("myInput").value;
   document.getElementById("myh1").textContent = "Hello " + userName;
}