// Activity 1 : Arithmetic Operations

// Task 1: Write a program to add two numbers and log the result to the console.

(() => {
    const addNum =  (num1,num2) => num1 + num2;
    let sumOfNum = addNum(5,6)
    console.log(sumOfNum);
})();   //Output : 11

// Task 2: Write a program to subtract two numbers and log the result to the console.

(() => {
    const subtractNum =  (num1,num2) => num1 - num2;
    let differenceOfNum = subtractNum(5,6)
    console.log(differenceOfNum);
})();   //Output : -1

// Task 3: Write a program to multiply two numbers and log the result to the console.

(() => {
    const multiplyNum =  (num1,num2) => num1 * num2;
    let productOfNum = multiplyNum(5,6)
    console.log(productOfNum);
})();   //Output : 30


// Task 4: Write a program to divide two numbers and log the result to the console.

(() => {
    const divideNum = (num1,num2) => num1 / num2;
    let quotient = divideNum(5,6)
    console.log(quotient);
})();   //Output : 0.8333333333333334

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

(() => {
    const moduloNum = (num1,num2) => num1 % num2;
    let modulus = moduloNum(5,6)
    console.log(modulus);
})();  //Output : 5


//---------------------------------------------------------------------------------------------------------


// Activity 2: Assignment Operators

// Task 6: Use the += operator to add a number to a variable and log the result to the console. 

function addAssignOperate(numVar) {
    return numVar+= 5
}

console.log(addAssignOperate(15)); //Output : 20


// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.

function subtractAssignOperate(numVar) {
    return numVar-= 5
}

console.log(subtractAssignOperate(15)); //Output : 10


//---------------------------------------------------------------------------------------------------------


// Activity 3: Comparison Operators

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.

// First Example
const biggerNum = (number1,number2) => {
    if (number1 > number2) {
        console.log(`Number1 is Greater than Number2`);
    } else if (number1 < number2) {
        console.log(`Number1 is Smaller tha Number2`); 
    } else {
      console.log(`False Value`);  
    }
}
biggerNum(6,6)


// Second Example
const compareStudents = (student1, student2, criteria) => {
    if (student1[criteria] > student2[criteria]) {
      return `${student1.name} has a higher ${criteria} than ${student2.name}`;
    } else if (student1[criteria] < student2[criteria]) {
      return `${student2.name} has a higher ${criteria} than ${student1.name}`;
    } else {
      return `${student1.name} and ${student2.name} have the same ${criteria}`;
    }
  }
  
  const students = [
      { name: "Aarav", marks: 95 },
      { name: "Hardik", marks: 85},
      { name: "Divyanshu", marks: 95 }
  ];
  
  console.log(compareStudents(students[0], students[1], "marks")); 

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console. 

let numOne = 5;
let numTwo = 10;

console.log(`Is NumOne is Greater than Equal to :  ${numOne >= numTwo}`);
console.log(`Is NumOne is Less than Equal to : ${numOne <= numTwo}`);


// Task 10: Write a program to compare two numbers using == and === and log the result to the console.

let numThree = '10'
console.log(`Is NumOne is Equal to :  ${numThree == numTwo}`); // Checks Values only

console.log(`Is NumOne is Equal to :  ${numThree === numTwo}`); // Checks Value and type


//---------------------------------------------------------------------------------------------------------


// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
//                                                  OR
// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
//                                                  OR
// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.


function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return 'Leap Year';
    } else {
      return 'Not a Leap Year';
    }
  }

  console.log(isLeapYear());


// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let g = -5;
let result = g >= 0 ? 'Positive' : 'Negative';
console.log('Ternary Operator:', result);  // Output: Negative


// Feature Request 1: Arithmetic Operations Script
// Arithmetic Operations Script
let num1 = 20;
let num2 = 10;

console.log('Addition:', num1 + num2);
console.log('Subtraction:', num1 - num2);
console.log('Multiplication:', num1 * num2);
console.log('Division:', num1 / num2);
console.log('Remainder:', num1 % num2);


// Feature Request 2: Comparison and Logical Operators Script
// Comparison and Logical Operators Script
let x = 10;
let y = 20;

console.log('Greater Than:', x > y);
console.log('Less Than:', x < y);
console.log('Greater Than or Equal:', x >= y);
console.log('Less Than or Equal:', x <= y);
console.log('Equality:', x == y);
console.log('Strict Equality:', x === y);

console.log('Logical AND:', (x < y) && (x > 0));
console.log('Logical OR:', (x > y) || (x > 0));
console.log('Logical NOT:', !(x > y));


// Feature Request 3: Ternary Operator Script
// Ternary Operator Script

let number = 5;
let check = number >= 0 ? 'Positive' : 'Negative';
console.log('Ternary Operator:', check);  // Output: Positive