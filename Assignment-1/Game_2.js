// Sample

var dice1 = 2;
var dice2 =5;

var sum = dice1+dice2;
console.log(sum);

if(sum == 7 || sum == 11){
    console.log("You Win!");
}

else if(dice1 == dice2 && dice1&dice2 == 0){
    console.log("You lose");
}
else{
    console.log("Try Again");
}

//Functions
function greeting(fname, lname){
    console.log("Hello" + "" + fname + "" lname);
}

greeting(Kenny Woitte);
greeeting(Jorge Gonzalez);
    
function add(a,b){
    return a+b;
}

let result = add(3,4);
console.log(result);

//Scope - local, global

let globalVar = "I am global";
function examplefunction(){
    let localVar = "I am local";
    console.log(localVar)
}

console.log(localVar);
examplefunction();

//Types - Built in , User defined

console.log(Math.random()); // 0, 1 

//Range (0,1) - 1, 5 - (0,6)

function generateRandomNumber(){
    return Math.floor(Math.random()*6)+1
}

let firstRandomNumberGenerated = generateRandomNumber();
//console.log(firstRandomNumberGenerated);

//user-defined: find the max of the two numbers

function maxOfTwoNumbers(a,b){
    if(a>b){
        return a;
    }
    else{
        return b
    }
}
 
console.log(maxOfTwoNumbers(4,7));

// find if a numbe is an odd number or and even number

function checkOddorEven(number){
    if(number%2 == 0){
        console.log("Even number");
    else{
        console.log("Odd number");
        }
    }
}
console.log(checkOddorEven(4));

//find it a character is a vowel or a consonant
function chechVowelOrConsonant(character){
    if(char == 'a' || char == 'e' || char 'i' || char == 'o' || char) == 'u'
    console.log(Character is Vowel)
}
    else{
        return "Consonant";
    }
console.log(chechVowelOrConsonant)('b');