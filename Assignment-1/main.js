// function executeFunction(){
//    document.getElementById('sample').innerHTML = 'Hello Kenny'
// }

//Variable - Var, let, const

//var - reassign , redeclare
var x = 5;//integer
var firstname = "Kenny" //string
var status = true; //boolean

var x = 6;
var y = 4;
var z = x=y;
console.log("Sum of x and y is:", z);

var x = 2;
console.log(x);

y = 7;
console.log(y);

console.log(z);

//let - reassign

let lName="Woitte";
console.log("My full name is"+ ""+ firstname + "" + lName);


console.log("My full name is"+ ""+ firstname + "" + lName);

firstname ="Roland";

//const - no reassign or redclare
const pi= 3.14;
console.log(pi);

//Operators 

var firstnum= 4;
var secondnum= 5;

console.log(firstnum+secondnum);
console.log(firstnum-secondnum);
console.log(firstnum*secondnum);
console.log(firstnum/secondnum);
console.log(firstnum%secondnum);
console.log(--firstnum);

//Assignment
console.log(firstnum += secondnum);
console.log(firstnum -= secondnum);

//comparison operators- >, < , >=, <=, !=
//== operator compares the vaules of the two variables after type conversion
//=== operator compares the values of the two variables without type conversion

console.log(firstnum > secondnum);

//logical operators - AND OR NOT (&&, ||, !)
let isAdult = true;
let hasLiscense = true;

let canDrive = isAdult && hasLiscense;
console.log(canDrive);

let hasCar = true;
let hasBike = false;

let hasVehicle = hasCar || hasBike;
console.log(hasVehicle);

let isStudent = true;
let isNotStudent = !isStudent;
console.log(isNotStudent);

let age = 25;
let hasExperience = true;

let isEligible = age>= 18 && hasExperience;
console.log(isEligible);

//Conditionals: if, if-else, if-else if-else

var ageOfPerson = 20;
if(ageOfPerson >= 18){
    console.log("You are an adult!")
}
else{
    console.log("You are not an adult");
}

let hour = 15;
if(hour <12){
    console.log("It is warm !")
}
else if(hour >= 15){
    console.log("It's hot")
}
else{
    console.log("Its cold");
}

//Sample game

var dice1 = 2;
var dice2 = 5;

var sum = dice1+dice2;
console.log(sum);

if(sum = 7 || sum == 11){
    console.log("You win");
}
else if(dice1=dice2 && dice1%dice2 == 0){
    console.log("You lose")
}
else( 
    console.log("Try again !")
)

//Functions
function greeting(fname){
    console.log("Hello" + "" + fname + lName);
}

greeting("Kenny", "Woitte")
greeting("Roland", "Johannesen")

function add(a,b){
    return a+b;

}

let result = add(3,4);
console.log(result);

//Scope - local, global

let globalVar = "I am global";
function exampleFunction(){
    let localVar = "I am local";
    console.log(globalVar);
}

//Types - Built in , User defined

console.log(Math.random()); // 0, 1 

//Range (0,1) - 1, 5 - (1,5)

function generateRandomNumber(){
    return (Math.random()*5)+1
}

let randomnumberGenerated = generateRandomNumber();
//console.log(randomnumberGenerated);

//user-defined: find the max of two numbers

function maxOfTwoNumbers(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}

console.log(maxOfTwoNumbers(4,7));
