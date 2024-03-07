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
    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char) == 'u'
    console.log("Character is a Vowel");
}
    else {
        return "Consonant";
    }
console.log(chechVowelOrConsonant)('b');

//Loops - for - while - do-while

for(i = 0, i<5; i++){
    console.log(i)
}

for(i =0; i<10;i++){
    if( i==3){
        continue;
    }
if(i==7){
    break;
}
    console.log(i);
}

let sampleText = "";
for(let i = 0; i<5; i++){
    console.log(sampleText);
}

//while loop

let i = 0;
while(i<=5){
    console.log(i);
    i++;
}

//do-while:
let j=0;
do{
    console.log(j);
    i--;
}while(j<15 && j>0)

//Password guessing game
{
function passwordGuessingGame(){
    const correctPassword = "Kenny"
    let attempts = 3;
    let userInput;

    console.log("Welcome to the password guessing game)";
    while(attempts>0){
        userInput = prompt("Enter Password");
        if(userInput == correctPassword)
        console.log("You guessed it right");
        return;
    }
    else{
        attempts --;
        console.log("Incorrect Password. You have" ,attempts, "left")
    }

}
console.log("You are out of attempts, try later.");

passwordGuessingGame();

do{
    userInput = ("Enter Password");
    if(userInput == correctPassword){
        console.log("You guessed it right");
        return;
    }
    else{
        attempts --;
        console.log("Incorrect password. You have" ,attempts, "lefts");
    }
}

}while (attempts>0)

//string manipuation functions

let firstName = "Kenny Woitte"
let greeting = "Heeeere's Kenny"

let text = "Hello, Adam Smith";
let length = text.length;
console.log(length);

let charPos = text.charAt(6);
console.log(charPos);

let indexOfComma = text.indexOf(",");
console.log(indexOfComma)

let fruits = "Apple, Banana, Mango"
let partofFruits = fruits.slice(7,13);
console.log(partofFruits);

//substring()

//Forms - HTML setup
<form id="registrationForm" onsubmit="validateForm()">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required/><br><br>



    <label for="password">Password:</label>
    <input type="password" id="password" name="password"/><br><br>



    <label for="confirmPassword">Confirm Password:</label>
    <input type="password" id="confirmPassword" name="confirmPassword" required/><br><br>
<input type="submit" value="Register"><br><br>
</form>

// Forms - Javascript setup

function validateForm(){
    const userName = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

//simple validation Javascript
if(password != confirmPassword){
    alert("YOur passwords do not match");
    return;
}
alert("Registration successful")
document.getElementById('registrationForm').onsubmit();
}




const inputVal = document.getElementById("inputVal").value;
const input = inputVal.toLowerCase();
console.log(input);
let reverseVal = "";
for (let i= input.length-1; i>=0; i--) {
     reverseVal += input[i];
 }
console.log(reverseVal);

//Condition to check the palindrome
  if (reverseVal == input) {
    result.innerHTML = "It is a Palindrome!!!";
  } else {
    result.innerHTML = "It is  not a Palindrome";
  }

  function palChecker(event) {
    event.preventDefault();
  
    const inputVal = document.getElementById("inputVal").value;
    const input = inputVal.toLowerCase();
    console.log(input);
  
    const split = input.split("");
    let reverse = split.reverse();
    let revWord = reverse.join("");
    const result = document.getElementById("result");
  
    //Condition to check the palindrome
    if (revWord == input) {
      result.innerHTML = "It is a Palindrome!!!";
    } else {
      result.innerHTML = "It is  not a Palindrome";
    }
  }