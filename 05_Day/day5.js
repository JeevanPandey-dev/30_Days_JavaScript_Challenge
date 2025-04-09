//Activity 1: Function Declaration

//Task 1 Write a function to check if a number is even or odd and log the result to the console.

function checkTheNumbers(numVal) {
   if (numVal % 2 === 0) {
    return "The Number is Even";
   } else {
    return "The Number is Odd";
   } 
}

console.log(checkTheNumbers(5));
 

//Task 2 Write a function to calculate the square of a number and return the result.

function squareOfNum(num) {
    return num * num ;
}
console.log(squareOfNum(5));


//Activity 2: Function Expression

//Task 3 Write a function expression to find the maximum of two numbers and log the result to the console.

const calculateMaxNum = function(num1,num2){
    const maxNum = num1 > num2 ? num1 : num2;
    console.log(`Max Value between ${num1} and ${num2} is ${maxNum} `);
}
calculateMaxNum(20,15)


//Task 4 Write a function expression to concatenate two strings and return the result.

function strConcat(str1,str2) {
    return str1 + str2;
}

console.log(strConcat("Hello ","World!"));


//Activity 3: Arrow Functions

//Task 5 Write an arrow function to calculate the sum of two numbers and return the result.

const sumNum = (numOne, numTwo) => {
    return numOne + numTwo;
}
console.log(sumNum(5,4));


//Task 6 Write an arrow function to check if a string contains a specific character and return a boolean value.


const charCheck = (str , char) => str.includes(char);

console.log(charCheck("Hello, World", "s"));


//Activity 4: Function Parameters and Default Values

//Task 7 Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function sumOfNums(a, b = 1) {
    return a * b;
}
console.log(sumOfNums(8));


//Task 8 Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function greetMsg(name,age = 18) {
    return console.log(`Hello ${name}! Glad to Know you are ${age}`);
}
greetMsg("Hardik")

//Activity 5: Higher-Order Functions

//Task 9 Write a higher-order function that takes a function and a number, and calls the function that many times.

function highOrderFunc(func,n) {
    for (let i = 0; i < n; i++) {
        func();
    }
}

const retFunc = () => console.log("Hello!");

highOrderFunc(retFunc,5);


//Task 10 Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function applyFunc(func1, func2, value) {
    return func2(func1(value)) 
}

const multiplyByFive = multiplyNum => multiplyNum * 5;
const addEight = addNum => addNum + 8;

console.log(applyFunc(multiplyByFive, addEight, 15));




// Feature Request 1: Write a script that includes a function to check if a number is even or odd and logs the result.

function checkNum(number) {
    if (number % 2 === 0) {
        console.log(`${number} is a Even Number`);
    } else {
        console.log(`${number} is a Odd Number`);
    }
}

checkNum(85652652525)

// Feature Request 2: Create a script that includes a function to calculate the square of a number and returns the result.

function calSquare(number) {
    return number * number;
}
console.log(calSquare(8));


// Feature Request 3: Write a script that includes a function expression to concatenate two strings and returns the result.

const concatStr = function(strOne,strTwo) {
    return console.log(strOne + strTwo);
}
concatStr("Hello ","Chai!")

// Feature Request 4: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.

const calSum = (number1,number2) => console.log(number1 + number2);
calSum(5,9)

// Feature Request 5: Write a script that includes a higher-order function to apply a given function multiple times.

function hOFunc(funct,frequency) {
    for (let i = 0; i < frequency; i++) {
        funct()
    }
}

const newFunct = () => console.log("Hello Chai!");

hOFunc(newFunct, 10)