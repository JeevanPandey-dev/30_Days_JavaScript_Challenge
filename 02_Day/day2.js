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


// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console. 

const marksObtainedByStudents = {
    Aarav : 56,
    Hardik : 65,
    Divyanshu : 72,
    Manvik : 84
} 

const compareNums = (marksObtainedByStudents) => {
    if (marksObtainedByStudents.Aarav < marksObtainedByStudents.Hardik) {
        console.log(`Number1 is Greater than Number2`);
    // } else if (number1 < number2) {
    //     console.log(`Number1 is Smaller tha Number2`); 
    } else {
      console.log(`False Value`);  
    }
}
compareNums()

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.




// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

// Task 13: Write a program that uses the operator to negate a condition and log the result to the console.




// Activity 5: Ternary Operator

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.