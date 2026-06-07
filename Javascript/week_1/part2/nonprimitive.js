let uname={
    fname:"Yugendra", 
    isloggedIn:true
};
console.log(typeof(uname)); // Output: object

// const magic

const magic=42;
console.log(magic); // Output: 42
//magic=100; // This will throw an error because magic is a constant and cannot be reassigned.  

const na={
    fname:"Yugendra", 
    isloggedIn:true
};
na.fname="Yugen"; // This is allowed because we are not reassigning the constant, but modifying the properties of the object it references.
console.log(na.fname); // Output: Yugendra Singh


//another way of accessing object properties

const n={
    "f name":"Yugendra", 
    "isloggedIn":true
};
console.log(n["f name"]); // Output: Yugendra
console.log(n["isloggedIn"]); // Output: true
console.log(typeof(n["f name"])); // Output: string

let today=new Date();
console.log(today);


//array

let arr=[1,2,3,4,5];
console.log(arr[0]); // Output: 1
console.log(arr.length); // Output: 5
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);


//type conversion
let num="42";
let convertedNum=Number(num);
console.log(convertedNum); // Output: 42

let isval=true;
console.log(isval+2);
console.log("i"+2);
console.log("1"+2);
//2 is treated as a string in the above two cases, resulting in string concatenation instead of numeric addition.
let val="10";
console.log(val-2); // Output: 8
//In this case, the - operator triggers type coercion, converting the string "10" to the number 10 before performing the subtraction.
let val2="10";
console.log(typeof (Number(val2)-2)); // Output: number

console.log( Number(null));
//output: 0
console.log(Number(undefined));
//output: NaN (Not a Number)