// Activity 1: For Loop

// Task 1 Write a program to print numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
    // console.log(i); 
}

// Task 2 Write a program to print the multiplication table of 5 using a for loop.

// console.log("Table of 5");
for (let i = 1; i <= 10; i++) {
    // console.log(`5 x ${i} = ${5 * i}`);
}

// Activity 2: While Loop

// Task 3 Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let sum = 0;
let numBer = 1;
while (numBer <= 10) {
    sum += numBer;
    numBer++;
}
// console.log(`Sum of Number = ${sum} `);

// Task 4 Write a program to print numbers from 10 to 1 using a while loop.

let count = 10;

while (count >= 1) {
    // console.log(count);
    count--;
}

// Activity 3: Do While Loop

// Task 5 Write a program to print numbers from 1 to 5 using a do...while loop.

let numVal = 1;

do {
    // console.log(numVal);
    numVal++
} while (numVal <= 5);

// Task 6 Write a program to calculate the factorial of a number using a do...while loop.

let num = 8;
let factorial = 1;
let anotherNum = 1;

do {
    factorial *= anotherNum;
    anotherNum++    
} while (anotherNum <= num);

// console.log(`The Factorial of ${num} is ${factorial}`);

// Activity 4: Nested Loops

// Task 7 Write a program to print a pattern using nested for loops:

// ```
//     *
//     *  *
//     *  *  *
//     *  *  *  *
//     *  *  *  *  *
// ```

let rows = 7

for (let i = 1; i <= rows; i++) {
    let pattern = " ";
    for (let j = 1; j <= i; j++) {
        pattern += "*"
    }
    // console.log(pattern);
}

// Activity 5: Loop Control Statements

// Task 8 Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for (let i = 1; i < 10; i++) {
    if (i == 5) {
       continue ; //Number 5 willbe skipped
    }
    // console.log(i);
}


// Task 9 Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for (let j = 1; j <= 10; j++) {
    if (j == 7) {
        break ; // Loop will break here
    }
    // console.log(j);
}




// Feature Request 1: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.

// For Loop
// console.log("Numbers From 1 to 10 using For Loop");

for (let num = 1; num <= 10; num++) {
    // console.log(num);
}


// While Loop
// console.log("Numbers From 1 to 10 using While Loop");

let nums = 1;

while (nums <= 10) {
    // console.log(nums);
    nums++;
}

// Feature Request 2: Create a script that prints the multiplication table of 5 using a for loop.

// console.log("Table of 5");
for (let table = 1; table <= 10; table++) {
    // console.log(`5 x ${table} = ${5 * table}`);
}

// Feature Request 3: Write a script that prints a pattern of stars using nested loops.

/*
    * * * * * 
    * * * * 
    * * * 
    * * 
    * 
*/

let totalRows = 5;

for (let i = totalRows; i >= 1; i--) {
    let starPattern = '';
    for (let j = 1; j <= i; j++) {
    starPattern += " * ";
    }
    console.log(starPattern);
}


// Feature Request 4: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.

let sumOfNum = 0;
let currentNum = 1;

while (currentNum <= 10) {
    sumOfNum += currentNum;
    currentNum++ ;
}
console.log(`Sum of Numbers from 1 to 10 is : ${sumOfNum}`);


// Feature Request 5: Create a script that calculates the factorial of a number using a do...while loop.

let Num = 10;
let factorialIs = 1;
let newNum = 1;

do {
   factorialIs *= newNum;
   newNum++; 
} while (newNum <= Num);

console.log(`The Factorial of ${Num} is ${factorialIs}`);
