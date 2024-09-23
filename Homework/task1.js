//Haciyev Ramin

//Data types:
// 1.Create a string, number, boolean, undefined, null, symbol, and bigint variable.
// 2.Print each variable type using typeof

//String
const studentname = 'Ramin'
console.log(typeof studentname);
//number
let age1 = 42
console.log(typeof age1);
//boolean
let codingisamazing = true
console.log(typeof codingisamazing);
//undefined
let codeacademy
console.log(typeof codeacademy);
//null
let empty = null
console.log(typeof empty);
//symbol
let typsymbol = Symbol('x')
console.log(typeof typsymbol);
//Bigint
let decades = 10n
console.log(typeof decades);

//in below example i get all types(results) in one line.
console.log(typeof studentname, typeof age1, typeof codingisamazing, typeof codeacademy, typeof empty,typeof typsymbol,typeof decades);

// 3.Use let, const, and var to declare variables and explain their differences with examples.

//let ,with this keyword we can change value after it is declared , if we can not assign a value during decleration process,
//type of this process give us "undefined"

let day = 18
day=19
console.log(day)

//const , with this keyword we can not change declared value ,we can assign a value when we declare const

let birthday = '14 march'
console.log(birthday);

//var , in this variable we can reassign and redeclare process

speciality = 'Cyber Security'
console.log(speciality);

// 4.Use backticks to create a dynamic message that includes (firstName,lastName,age,country,hobby,occupation) variables.

const firstName = 'Ramin'
const lastName = 'Haciyev'
let age = 42
const country = 'Azerbaijan'
let hobby = 'boks'
let occupation = 'Cyber Security Specialist'
console.log(`My name is ${firstName}${lastName} ,I am ${age},i am from ${country},i love play ${hobby} , and i wanna be ${occupation}`);

// 5.Use arithmetic operators (+, -, *, /, %).

//addition
let a=5, b=6
console.log(`sum= ${a+b}`);
//substraction
let c=44,d=33
console.log(`sub= ${c-d}`);
//division
let e=12,f=9
console.log(`div= ${e/f}`);
//multiplication
let h=8,k=32
console.log(`mul= ${h*k}`);
//modulus
let v=7,g=5
console.log(`mod= ${v%g}`);

// 6.Use comparison operators (==, ===, >, <, etc.)

let l=25
let t='25'
let r=15
let p=15

console.log(l==t); //true because vlaue of l equal to value of t
console.log(l===t); //false though values are same data types are different. '===' this show value and data types must be same
console.log(l>r);
console.log(p<l);
console.log(r<=p);

// 7.Use logical operators (&&, ||, !).
let q=4
let s=7
let j=true
console.log(q==4 || s==6); //or operator , one or both are true give us true
console.log(q==33 && s==7); //and operator , if both are true give us true
console.log(!j); //Not operator , this example give us false because not operator invert boolaen value of given expression
console.log(!q==3);




