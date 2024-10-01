//////////////////////////////////////////Task 1/////////////////////////////////////////
// 1.Multiply 12 with 8, and console the result:
let result = 12 * 8;
console.log(result);

//2.Divide 10 by 2 add result to variables x, and console x:
let x = 10 / 2;
console.log(x);
// 3.Create two variables called num1 and num2, assign the value 20 to num1 and value 17 to num2 then addition(+) them in console.
let num1 = 20;
let num2 = 17;
console.log(num1 + num2);

//4.Create variables called name, surname and year assign values to them ('your name', 'your surname', ' your birth of year'),
//then add them to varibale name (info) and console info.
let name = 'Ramin';
let surname = 'Haciev';
let year = 1982;

//let info = name + ' ' + surname + ' ' + year;
//console.log(info);

let info = `${name} ${surname}. ${year}`;
console.log(info);

// 5.Console the remainder(%) when 17 is divided by 12.
let remainder = 17 % 12;
console.log(remainder);

// 6.Create a varibale called "city name" (camelCase). Assign value Baku, then call variable again
// and reassign value Gence, console result.

let cityName = 'Baku';
cityName = 'Gence'
console.log(cityName);

////////////////////////////////////////TASK2///////////////////////////////////////////////////////

//console.log('test1', test); // ?
// {
//     let test = "something"
//     console.log('test2', test); // ?
// }
// console.log('test3', test);  // ?

// console.log('test1', test);  // ?
// {
//     var test = "something"
//     console.log('test2', test); // ?
// }
// console.log('test3', test); // ?

// Example with let
// console.log('test1', test); // Error: ReferenceError: test is not defined
{
    let test = "something";
    console.log('test2', test); // Output: 'test2', 'something'
}
// console.log('test3', test);  // Error: ReferenceError: test is not defined

// Example with var
// console.log('test1', test);  // Output: undefined (variable is hoisted with undefined value)
{
    var test = "something";
    console.log('test2', test); // Output: 'test2', 'something'
}
console.log('test3', test); // Output: 'test3', 'something'

//////////////////////////////////////TASK3////////////////////////////////////////////////////////////
//Find the type of all the following cases

let firstname = "Ulfat"
let lastname = "Zakirli"
let birthYear  = 2000
year = "2000"
let city;
let qualification = null
let obj = { name: 'ulfat' }
let arr = ['a', 'b', 'c']

console.log(typeof firstname);//string
console.log(typeof lastname);//string
console.log(typeof birthYear);//number
console.log(typeof year);//string
console.log(typeof city);//undefined
console.log(typeof qualification);//object
console.log(qualification === null); // true
console.log(typeof obj);//object
console.log(typeof arr); // object
console.log(Array.isArray(arr)); // true

///////////////////////////////////TASK4//////////////////////////////////////////////////////////////

const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8];

// 1. Sum all the numbers in 'arr1'
let sum1 = 0;
for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
}
console.log('sum=', sum1);

// 2. Add two numbers (10, 88) to end of arr1 (push method)
arr1.push(10, 88);
console.log('newarr1', arr1);

// 3. Remove first two numbers from arr1
arr1.splice(0, 2);
console.log('arr1', arr1);

// 4. Add three numbers (0, 9, 11) in front of arr1 (unshift)
arr1.unshift(0, 9, 11);
console.log('unshift', arr1);

// 5. Remove four numbers in front of arr1 (shift)
for (let i = 0; i < 4; i++) {
    arr1.shift();
}
console.log(arr1);

///////////////////////////////////TASK5////////////////////////////////////////

// 1. Create an object add your name, surname, age and city.
const newobject = {
    firstName: 'Ramin',
    lastName: 'Haciyev',
    age: 42,
    city: "Gence"
};

// 2. Then change name to "Jhon"
newobject.firstName = "Jhon";
console.log('firstName=', newobject.firstName);

const user = {
    email: "ulfat@gmail.com",
    info: {
        gender: "Male",
        loc: {
            city: "Baku",
            street: "Nizami 22",
            education: {
                "uni name": "Code Academy",
            },
        },
    },
};

// 3. Console each value of user object
console.log(user.email);
console.log(user.info.gender);
console.log(user.info.loc.city);
console.log(user.info.loc.street);
console.log(user.info.loc.education['uni name']);

// 4. Console only keys of user
console.log('keys', Object.keys(user));
console.log('keys1', Object.keys(user.info));
console.log('keys2', Object.keys(user.info.loc));
console.log('keys3', Object.keys(user.info.loc.education));

for (key in user) {
    console.log(key);
}

for (key1 in user.info) {
    console.log(key1);
}

for (key2 in user.info.loc) {
    console.log(key2);
}

for (key3 in user.info.loc.education) {
    console.log(key3);
}

// 5. Console only values of user
console.log('values', Object.values(user));
console.log('values1', Object.values(user.info));
console.log('values2', Object.values(user.info.loc));
console.log('values3', Object.values(user.info.loc.education));

for (value in user) {
    console.log(user[value]);
}

for (value in user.info) {
    console.log(user.info[value]);
}

for (value in user.info.loc) {
    console.log(user.info.loc[value]);
}

for (value in user.info.loc.education) {
    console.log(user.info.loc.education[value]);
}

const mixedObject = {
    name: "ulfat",
    age: 25,
    isStudent: false,
    hobbies: null,
    year: 2024,
    address: undefined,
    surname: "Zakirli",
    contactInfo: {
        email: "ulfat@example.com",
        phone: null,
    },
    scores: [98, 87, 92],
};

// 6. Log only the 'keys' whose values are of type string
for (key in mixedObject) {
    if (typeof mixedObject[key] === 'string') {
        console.log(key);
    }
}

for (key in mixedObject.contactInfo) {
    if (typeof mixedObject.contactInfo[key] === 'string') {
        console.log(key);
    }
}

// 7. Log only the 'keys' whose values are of type number
for (key in mixedObject) {
    if (typeof mixedObject[key] === 'number') {
        console.log(key);
    }
}

// 8. Log only the 'keys' whose values are of type boolean
for (key in mixedObject) {
    if (typeof mixedObject[key] === 'boolean') {
        console.log(key);
    }
}

// 9. Log only the 'keys' whose values are of type undefined
for (key in mixedObject) {
    if (typeof mixedObject[key] === 'undefined') {
        console.log(key);
    }
}

for (key in mixedObject.contactInfo) {
    if (typeof mixedObject.contactInfo[key] === 'undefined') {
        console.log(key);
    }
}

// 10. Log only the 'keys' whose values are of type object
for (key in mixedObject) {
    if (typeof mixedObject[key] === 'object') {
        console.log(key);
    }
}

for (key in mixedObject.contactInfo) {
    if (typeof mixedObject.contactInfo[key] === 'object') {
        console.log(key);
    }
}

