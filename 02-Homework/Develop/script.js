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
  var numbers = confirm("Do you want numbers?")
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
