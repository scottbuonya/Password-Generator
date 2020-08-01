// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
generateBtn.addEventListener("click", generatePassword);



function generatePassword() {


  var minimumNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  var minimumLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var minimumUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  var minimumSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '?'];

  var passwordLength = prompt("Enter amount of characters, must be more than 8 characters and less than 128 characters.");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("password must be 8 characters long and less than 128 characters!")
    passwordLength = 0;
    generatePassword()
  } else {
    
  }
}