// console.log('Hello')

// let age = 25
// console.log(age)

// const salary = 80000
// console.log(salary)

// let sum = 0
// sum = 5
// console.log(sum)

// const name = "Vishwas";
// const language = "JavaScript";
// const channel = `Codevolution`;

// const total = 0;
// const PI = 3.14;

// const isPrimaryNumber = true;
// const isNewUser = false;

// let result;
// console.log(result)

// const res = undefined; // not yet defined

// const data = null; // null value

//----------Data Types------------------

// const person = {
//   firstName: "Bruce",
//   lastName: "Wayne",
//   age: 30,
// };

// console.log(person.firstName);

// const oddNumbers = [1, 3, 5, 7, 9];
// console.log(oddNumbers[2])

// let a = 10
// a = 'Vishwas'
// a = true
// console.log(a)

//------------Operators----------------

// let x = 10
// let y = 5
// console.log(x % y)
// console.log(++x)
// console.log(--y)

// console.log(x >= y)

// const isValidNumber = x > 8 && 8 > y
// console.log(isValidNumber)

// const isValid = false
// console.log(!isValid);

// console.log('Bruce ' + 'Wayne');

// const isEven = 10 % 2 === 0 ? 'number is even' : 'number is odd'
// console.log(isEven);

//--------Type Conversions------------

// console.log(true + '3');
// console.log('8' / '2');
// console.log('bruce' - 'wayne');
// console.log('5' - null);
// console.log(5 - undefined);

// console.log(parseFloat('3.14'));
// console.log(String(500));
// console.log((500).toString()); // will not work on null or undefined
// console.log(Boolean(10)); // null undefined 0 ' ' NaN

//----------Equality---------------

// const var1 = '10'
// const var2 = 10

// console.log(var1 == var2); // automatically converts then compares
// console.log(var1 === var2); // must be same type

//-----Conditional Statements------

// const num = 0;

// if (num > 0) {
//   console.log("number is positive");
// } else if (num < 0) {
//   console.log("number is not positive");
// } else {
//   console.log("number is zero");
// }

// const color = "red";

// switch (color) {
//   case "red":
//     console.log("color is red");
//     break;
//   case "blue":
//     console.log("color is blue");
//     break;
//   default:
//     console.log("not valid color");
// }

//----------Looping Code-------------

// for (let i = 1; i <= 5; i++) {
//   console.log("iteration number " + i);
// }

// let i = 1;
// while (i <= 5) {
//   console.log("iteration number " + i);
//   i++;
// }

// let i = 6;
// do {
//   console.log("iteration number " + i);
//   i++;
// } while (i <= 5);

// const numArray = [1, 2, 3, 4, 5];

// for (const num of numArray) {
//   console.log("iteration number " + num);
// }

//----------Functions---------------

// function greet(username) {
//   console.log("good morning " + username);
// }

// greet("Bruce");
// greet("Wayne");

// function add(a, b) {
//   return a + b;
// }

// const arrowSum = (a, b) => a + b;
// const addFive = num => num + 5;

// const sum = arrowSum(25, 25);
// console.log(sum);

//-----------Scope---------------

// const myNum = 100;
// const myName = "superman";

// if (true) {
//   const myName = "michael";
//   console.log(myName);
//   console.log(myNum);
// }

// function testFn() {
//   const myName = "batman";
//   console.log(myName);
//   console.log(myNum);
// }

// testFn();
