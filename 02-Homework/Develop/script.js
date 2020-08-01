// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("Enter the number of characters for your password");
  
  var numbers = confirm("Do you want numbers?");

  var lowerCase = confirm("Do you want lowercase?");

  var upperCase = confirm("Do you want uppercase?");

  var symbols = confirm("Do you want symbols?");
  
  var minimumCount = 8;
  
  var minimumNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  var minimumLowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  var minimumUpperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  var minimumSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '?'];
}

var functionArray = {
  getNumbers: function() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
  },
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
