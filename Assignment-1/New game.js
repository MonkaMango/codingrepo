// JS to generate # 1-6
const firstRandomNum = Math.floor(Math.random() * 6) + 1

// images/dice1.png upto images/dice6.png
const firstDiceImage = 'img/dice' + firstRandomNum + '.png';

document.querySelectorAll('img')[0].setAttribute ('src', firstDiceImage) 

// JS to generate # 1-6
const secondRandomNum = Math.floor(Math.random() * 6) + 1

// images/dice1.png upto images/dice6.png
const secondDiceImage = 'img/dice' + secondRandomNum + '.png';

document.querySelectorAll('img')[1].setAttribute ('src', secondDiceImage)


// Logic for winner
if (firstRandomNum > secondRandomNum) {
    document.querySelector('h1').innerHTML = 'The Winner is Player 1'
}

else if (firstRandomNum < secondRandomNum){
    document.querySelector('h1').innerHTML = 'The Winner is Player 2'
}

else {
    document.querySelector('h1').innerHTML = "It's a Draw!";
}