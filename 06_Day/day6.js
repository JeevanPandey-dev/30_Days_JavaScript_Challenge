// Activity 1: Array Creation and Access

// Task 1 Create an array of numbers from 1 to 5 and log the array to the console.

const NumArr = [1,2,3,4,5]

console.log(NumArr);

// Task 2 Access the first and last elements of the array and log them to the console.

const newArr = ["Aarav","Neeru","Faiz","Monu"]

console.log(newArr[0], newArr.at(-1));

//  Activity 2: Array Methods (Basic)

// Task 3 Use the `push` method to add a new member to the end of the array and log the updated array.

newArr.push("Harsh")
console.log(newArr);

// Task 4 Use the `pop` method to remove the last element from the array and log the updated array.

newArr.pop()
console.log(newArr);

// Task 5 Use the `shift` method to remove the first element from the array and log the updated array.

newArr.shift()
console.log(newArr);

// Task 6 Use the `unshift` method to add a new element to the beginning of the array and log the updated array.

newArr.unshift('Harsha')
console.log(newArr);

//  Activity 3: Array Methods (Intermediate)

// Task 7 Use the `map` method to create a new array where each number is doubled and log the new array.

const myNums = [1, 2, 3, 4, 5, 6]

const doubledMyNums = myNums.map((numbers) => numbers * 2);

console.log(doubledMyNums);

// Task 8 Use the `filter` method to create a new array with only even numbers and log the new array.

const evenNums = myNums.filter((number) => number % 2 === 0);
console.log(evenNums);


// Task 9 Use the `reduce` method to calculate the sum of all numbers in the array and log the result.

const totalValOfNums = myNums.reduce((Acc, currVal) => Acc + currVal)
console.log(totalValOfNums);


//  Activity 4: Array Iteration

// Task 10 Use a `for` loop to iterate over the array and log each element to the console.

const superHeroes = ["SpiderMan", "Capt.America", "IronMan", "Ultron", "Thanos", "Loki", "Dr.Doom", "Dr.Strange"]

for (let i = 0; i < superHeroes.length; i++) {
    const element = superHeroes[i];
    console.log(element);
}

// Task 11 Use the `forEach` method to iterate over the array and log each element to the console.

superHeroes.forEach((allHeroes) => console.log(allHeroes))

//  Activity 5: Multi-dimensional Arrays

// Task 12 Create a two-dimensional array (matrix) and log the entire array to the console.

// const twoDArr = [
//     ["Apple","Banana","Cherry","Strawberry"],
//     ["Potato","Tomato","Brinjal","Onion"]
// ]
// console.log(twoDArr);


const my2DArr = [];
const rows = 5;
const columns = 5;

for (let i = 0; i < rows; i++) {
    my2DArr[i] = [];
    for (let j = 0; j < columns; j++) {
        my2DArr[i][j] = j; 
    }
}

console.log(my2DArr);


// Task 13 Access and log a specific element from the two-dimensional array.

const accessingArr = my2DArr;
my2DArr[1][4] = 8;

console.log(accessingArr);


//  Feature Requests

// Array Manipulation Script Write a script that demonstrates the creation of an array, adding and removing elements using **push**, **pop**, **shift**, and **unshift** methods.

const arrManipulation = () => {
    const arr = ["Harsha","Neeraj","Kaushal","Aarav"]
    console.log(`Intial Array : ${arr}`);
    
    arr.push("Durgesh");
    console.log(`Push Method Array : ${arr}`);
    
    arr.pop()
    console.log(`Pop Method Array : ${arr}`);
    
    arr.shift()
    console.log(`Shift Method Array : ${arr}`);

    arr.unshift("Harsha")
    console.log(`Unshift Method Array : ${arr}`);
}

arrManipulation()

// Array Transformation Script Create a script that uses **map**, **filter**, and **reduce** methods to transform and aggregate array data.

const arrTransformation = () => {
    const numArr = [8, 6, 5, 9, 2, 7, 4]
    console.log(numArr);
    
    const halfTheNums = numArr.map((dividingNumsInArr) => {return dividingNumsInArr / 2})
    console.log(halfTheNums);
    
    const numsDivisibleBy = numArr.filter((divisibleNumsByThree) => divisibleNumsByThree % 3 === 0 )
    console.log(numsDivisibleBy);
    
    const multipleOf = numArr.reduce((acc,currVal) => acc * currVal )
    console.log(multipleOf);
}

arrTransformation()

// Array Iteration Script Write a script that iterates over an array using both `for` loop and `forEach` method and logs each element.

const arrayIteration = () => {
    const arr = [1, 2, 3, 4, 5];

    console.log('Using for loop:');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    console.log('Using forEach:');
    arr.forEach(num => console.log(num));
};

arrayIteration();

// Two-dimensional Array Script Create a script that demonstrates the creation and manipulation of a two-dimensional array.

const twoDimensionalArray = () => {
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    console.log('Matrix:', matrix);

    const element = matrix[2][1]; 
    console.log('Specific element:', element);

    matrix[0][0] = 0; 
    console.log('Modified matrix:', matrix);
};
twoDimensionalArray();