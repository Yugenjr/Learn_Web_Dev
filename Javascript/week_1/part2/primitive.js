//number

let num1=120;
console.log(typeof(num1)); // Output: 120
let num2=new Number(120);
console.log(typeof(num2)); // Output: object

//string
let str1="hello";
console.log(typeof(str1)); // Output: string
let str2=new String("hello");
console.log(typeof(str2)); // Output: object        

//boolean
let val=true;
console.log(typeof(val)); // Output: boolean
let val2=new Boolean(false);
console.log(typeof(val2)); // Output: object

let f=null;
console.log(typeof(f)); // Output: object
let u=undefined;
console.log(typeof(u)); // Output: undefined

//string interpolation
let n="Yugendra";
let greeting=`Hello, ${n}!`;
console.log(greeting); // Output: Hello, Yugendra!  


//symbols

let sym1=Symbol("id");
let sym2=Symbol("id");
console.log(sym1===sym2); // Output: false