//Palindrome get elements and functions
function checkPalindrome() {
    const inputText = document.getElementById('inputText').value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedText = inputText.split('').reverse().join('');

    if (inputText === reversedText) {
        document.getElementById('result').textContent = `${inputText} is a palindrome!`;
    } else {
        document.getElementById('result').textContent = `${inputText} is not a palindrome.`;
    }
}