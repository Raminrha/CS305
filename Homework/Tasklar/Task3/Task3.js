                            // ////////////// TASK 1 //////////////

// const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]

// 1.Sum all the numbers in 'arr1'
// let sum = 0;
// for (let i = 0; i < arr1.length; i++) {
//     sum += arr1[i];
// }
// console.log(`Sum = ${sum}`);

// 2.Add two numbers (10,88) to end of arr1 (push methods)

// arr1.push(10,88)
// console.log("push",arr1);

// // 3.Remove first two numbers from arr1

// arr1.shift()
// arr1.shift()
// console.log('shift',arr1); //shift method


// // 4.Add three numbers (0,9,11) in front of arr1(unshift)

// arr1.unshift(0,9,11)
// console.log('unshift=',arr1);

// // 5.Remove four numbers in front of arr1(shift)

// arr1.shift()
// arr1.shift()
// arr1.shift()
// arr1.shift()
// console.log(arr1);

// for(let i=0;i<4;i++){
//     arr1.shift()
// }
// console.log(arr1); //we cant write a number inside shift becausse of it i write with for loop


                              // ////////////// TASK 2 //////////////

//  const arr2 = ["Sabir", "Fatime", "Rufet", 'Mehman', 'Fatime', 'Gunel',"Fatime", "Cavid", 'Ramin', "Ali", "Polad"]

// 1.Console values from "Rufet" to "Ali"
// let sarr2=arr2.slice(2,10)
// console.log('sarr2',sarr2);  //slice method

// let farr2=arr2.filter((_,index) => index>=arr2.indexOf("Rufet") && index<arr2.indexOf("Ali")+1)
//  console.log('farr2',farr2); //
    
// // 2.Change Mehman to Fidan
// arr2.splice(arr2.indexOf('Mehman'),1,'Fidan')
// console.log(arr2);
// // 3.Console each name with map

// arr2.map(item => console.log(item) );


// // 4.Console only names which is Fatime
// filt=arr2.filter(item => item==='Fatime')
// console.log('filt=',filt);

// // 5.Console all names where name is Gunel, then change it to "Nihad"
// arr2.filter((item,index) =>  item==='Gunel' && arr2.splice(index,1,'Nihad'))
//  console.log('arr2=',arr2);

// // 6.Console last second value of arr2
// console.log(arr2[arr2.length-2]);

// // 7.Console length of arr2
// console.log('length',arr2.length);


                                 // ////////////// TASK 3 //////////////

// const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]

// // 1.Show only numbers

// numt=arr3.filter(item => typeof item ==='number' )
// console.log('numt',numt);

// // 2.Show only true values

// true1=arr3.filter(item => item )
// console.log('true1=',true1);

// // 3.Show only false values

// false1=arr3.filter(item => !item )
// console.log('false1=',false1);

// // 4.Show only strings

// stringt=arr3.filter(item => typeof item ==='string' )
// console.log('stringt',stringt);


                                // ////////////// TASK 4 //////////////

// const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]

// // 1.Console (only even numbers)

// odd=numbers.filter(item => item%2===1)
// console.log('odd',odd);

// // 2.Console (only odd numbers)

// even=numbers.filter(item => item%2===0)
// console.log('even',even);


                               // ////////////// TASK 5 //////////////

// const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]

// // 1.Console all values of arr4 -

// arr4.map(item => console.log('all arr4=',item))

// // if value is number add it 10, if value is string add to it value + is string,if is value falsy value add to it value+ is falsly value(with return word)
// // Example: [10,'true',false]
// // Result: [20, "true is string", "false is falsy value"]
// //arr4.map(item => typeof item==='number'? console.log(item+10))

// const arrx=arr4.map(item => { if(typeof item==='number'){
//   return item+10
// }
// else if (typeof item==='string'){
//   return item + ' '+ 'is string'
// }
// else {item +' '+ 'is falsy value'}
// })
// console.log(arrx);

// // 2.Sum all numbers of arr4

// k=arr4.reduce((acc,item) => typeof item==='number' ?  acc+=item : acc,0)
// console.log('sumarr4',k);

// // 3.Count only the values that are true

// k1=arr4.filter(item => item).length
// console.log('ctrue=',k1);

// // 4.Count only the values that are string

// k2=arr4.filter(item => typeof item==='string').length
// console.log('cstring=',k2);

// // 5.Count only the values that are false

// k3=arr4.filter(item => !item).length
// console.log('cfalse=',k3);


                                 ////////////// TASK 6 //////////////

//let fullName = 'Ramin Haciyev Ramiz'

// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)

//let separray=fullName.split('')
//console.log('separray',separray);//this method split to letters

//let separrayw=fullName.split(' ')
//console.log('separrayw', separrayw); //this method split to words

// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin

// let separray2=fullName.split(' ')
// console.log('separray2',separray);
// ccc=separray2.splice(1,1,separray2[0])
// console.log(ccc);
//const swape=(array,index1,index2)=>{
  //let y = array[index1];
  //array[index1] = array[index2];
  //array[index2] = y;


//};
//let fullName1 = ['Ramin', 'Haciyev','Ramiz']
//swape(fullName1,0,1)
//console.log('swape=',fullName1);

//const swape1=(array)=>{
  //let y = array[0]
  //array[0] = array[1];
  //array[1] = y;

//};
//let fullName2 = ['Ramin', 'Haciyev','Ramiz']
//swape1(fullName2)
//console.log('swape1=',fullName2);

// const swapElements = (array, index1, index2) => {
//   let temp = array[index1];
//   array[index1] = array[index2];
//   array[index2] = temp;
// };

// let myArray = [12, -2, 55, 68, 80];
// swapElements(myArray, 0, 1);
// console.log(myArray); // [-2,12,55,68,80]


// const separrayw1=fullName.split(' ',3)
// if(separrayw1.length===3) {
//   console.log(separrayw1[1] ,separrayw1[0],separrayw1[2]);  //i wrote with function in third question


//console.log('separrayw1', separrayw1);

// 3) Alinan yeni arrayi stringe cevirin(join)


// function swapprocess(anystring,index1,index2){
//   let  carray=anystring.split(' ');
//   [carray[index1],carray[index2]]=[carray[index2],carray[index1]]
//   return carray.join(' ')
// }
// const swapstring=swapprocess(fullName,0,1)
// console.log('swapstring=',swapstring);




// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

// let arr = [8, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]


//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin

// const fives=arr.filter(item => item===5).length
// console.log('fives=',fives);

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin

// const sumall=arr.reduce((acc,item) => acc+item ,0)
// console.log('sumall=',sumall);

//6) arrayda tekrar olunan reqemleri artan sira ile duzun

// arr.sort((a,b) => a-b)
// console.log(arr);

//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
// logMath.max(...arr)


// const biggest=arr.filter(item => item===Math.max(...arr)).length
// console.log('biggest=',biggest);


//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)

// lname=arr.includes(fullName1[1].length ) 
// console.log('lname=',lname);

//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin

// let fNumber = arr.find(num => num % 3 === 2);
// let fIndex = arr.findIndex(num => num % 3 === 2);
// console.log(fnumber: ${fNumber}, findex: ${fIndex});


//10) arraydaki en boyuk reqemin ilk indexini tapin

// let fIndexb = arr.findIndex(item => item===Math.max(...arr));
// console.log(fIndexb);

//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin

// let indexes = arr.map((item, index) => (item === 4 ? index : -1))
// let four=indexes.filter(index => index!==-1)
// console.log('indexesof4',four);

//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin

// let firstIndex = arr.indexOf(5); 
// let lastIndex = arr.lastIndexOf(5);
// console.log(bfive= ${firstIndex} );
// console.log(sfive= ${lastIndex});

//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
// const newarray=arr.filter(item => item>2)
// console.log('difference',arr.length-newarray.length);


//14) 7 reqeminin indexleri cemini tapin.

// let indsum7 = arr.reduce((acc,item,index)=>{
//     if(item===7){
//         return acc+index
//     }
//     return acc
// })
// console.log('sum7=',indsum7);

//15
// function something(a) {
//   let test = [];
//   for (let i of a) {
//       let Count = (i.name.match(/t/gi) || []).length;
//       if (Count == 2) {
//           test.push(i.key);
//       }
//   }
//   return test;
// }
// console.log(something(arr2));