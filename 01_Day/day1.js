// DAY 1: VARIABLES AND DATA TYPES
/* ----------Variables and Data Types---------- */

// Tasks/Activities:


// Activity 1: Variable Declaration


//---> Task 1: Declare a variable using var, assign it a number, and log the value to the console.

var numAssign = function() {
    return `You Assigned with Number = ${6}`;
  }
  
  console.log(numAssign()); //Output : You Assigned with Number = 6

//--> Task 2: Declare a variable using let, assign it a string, and log the value to the console.

let textAssign = function() {
    return `You Assigned with Text = ${"Jeevan Pandey"}`;
  };
  
  console.log(textAssign()); //Output : You Assigned with Text = Jeevan Pandey

//--------------------------------------------------------------------------------------------------------


// Activity 2: Constant Declaration


// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

const boolValue = () => {
    return `The Bool Value is = ${true}`;
}

console.log(boolValue()); //Output : The Bool Value is = true

//---------------------------------------------------------------------------------------------------------


// Activity 3: Data Types


// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

let numberVar = 50 ;
let stringVar = "Hello Chai";
let booleanVar = true;
let objectVar = {name:"Jeevan Pandey",age:22};
let arrayVar = [1,2,3,4,5,6];

console.log(typeof(numberVar)); //Output : number
console.log(typeof(stringVar)); //Output : string
console.log(typeof(booleanVar)); //Output : boolean
console.log(typeof(objectVar)); //Output : object
console.log(typeof(arrayVar)); //Output : object

//----------------------------------------------------------------------------------------------------------


// Activity 4: Reassigning Variables

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let assignedValue = "Initial Value";
console.log("Initial Value of assignedValue:", assignedValue); //Output : Initial Value of assignedValue: Initial Value

assignedValue = "New Value";
console.log(assignedValue); //Output : New Value

//-----------------------------------------------------------------------------------------------------------


// Activity 5: Understanding const

// Task 6: Try reassigning a variable declared with const and observe the error.

const reassignedValue = "Initial Value";
console.log("Initial Value of reassignedValue:", reassignedValue);

// reassignedValue = "New Value";
console.log(reassignedValue); //Output : TypeError: Assignment to constant variable

//----------------------------------------------------------------------------------------------------------

// Feature Request:

// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

let str = "Hello Chai!";
let num = 50;
let bool = true;
let undefined;
let nullVal = null; 
let obj = {key:"",value:""};
let arr = [1,2,3,4,5]

console.log("Value:", str, "Type:", typeof str); //Output :   Value: Hello Chai! Type: string
console.log("Value:", num, "Type:", typeof num); //Output :   Value: 50 Type: number
console.log("Value:", bool, "Type:", typeof bool); //Output :   Value: true Type: boolean
console.log("Value:", undefined, "Type:", typeof undefined); //Output :   Value: undefined Type: undefined
console.log("Value:", nullVal, "Type:", typeof nullVal); //Output :   Value: null Type: object
console.log("Value:", obj, "Type:", typeof obj); //Output :   Value: { key: '', value: '' } Type: object
console.log("Value:", arr, "Type:", typeof arr); //Output :   Value: [ 1, 2, 3, 4, 5 ] Type: object



// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

// Using let
let assignedlet = "Initial Value";
console.log("Initial Value of assignedlet:", assignedlet); 

assignedlet = "New Value";
console.log(assignedlet); 

//Output : We can Reassign the Value of any Variable which we have declared with 'let'.
           

// Using const
const assignedConst = "Initial Value";
console.log("Initial Value of assignedConst:", assignedConst);

assignedConst = "New Value";
console.log(assignedConst); 

//Output : We cannot Reassign the Value of any Variable which we have declared with 'const'.