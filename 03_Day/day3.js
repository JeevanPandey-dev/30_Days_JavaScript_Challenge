// Activity 1: If-Else Statements

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console. 

function checkingForNum(number) {
    if (number > 0) {
        return console.log(`${number} is Positive Number`);
    } else if (number < 0) {
        return console.log(`${number} is Negative Number`);
    } else if (number == 0) {
        return console.log(`${number} is Equal to Zero`); 
    } else {
        return console.log(`${number} is Not A Number`);
    }
}
checkingForNum("abc") // Output: abc Not A Number


// Task 2: Write a program to check if a person is eligible to vote (age 18) and log the result to the console.

const checkEligibilty = (age) => {
    if (age >= 18) {
        return "You Are Eligible to Vote"
    } else {
        return "Not Eligible to Vote"
    }
}

console.log(checkEligibilty(5)); //Output : Not Eligible to Vote



// Activity 2: Nested If-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.


function largestNumber(num1,num2,num3){
    if (num1 >= num2) {
        if (num1 >= num3) {
            console.log(num1 + ' is the largest number.');
        } else {
            console.log(num3 + ' is the largest number.');
        }
    } else if (num2 >= num3) {
        console.log(num2 + ' is the largest number.');
    } else {
        console.log(num3 + ' is the largest number.');
    }
}
largestNumber(15,10,20);


// Same Question without Nested if-else conditions
function largeNum(numA,numB,numC) {
    if (numA > numB && numA > numC) {
        return `${numA} Is the Largest Number here`
    } else if (numB > numA && numB > numC) {
        return `${numB} Is the Largest Number here`
    } else {
        return `${numC} Is the Largest Number here`
    } 
}

console.log(largeNum(10,12,18));




// Activity 3: Switch Case


// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let dayInWeek = 5;

switch (dayInWeek) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        
}

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', C', 'D', 'F) based on a score and log the grade to the console.

let score = 85;

switch (true) {
    case score >= 90:
        console.log("Grade A");
        break;
    case score >= 80:
        console.log("Grade B");   
        break;
    case score >= 70:
        console.log("Grade C");
        break;
    case score >= 60:
        console.log("Grade D");   
        break;
    default:
        console.log("Fail");
    }


// Activity 4: Conditional (Ternary) Operator

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.


 

// Activity 5: Combining Conditions

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.



// Feature Request 1: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.



// Feature Request 2: Create a script to check if a person is eligible to vote based on their age and log the result.