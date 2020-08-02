// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
generateBtn.addEventListener("click", generatePassword);



function generatePassword() {
  // these are my variables
  var characterChoice =[]

  var finalPassword =[]

  var minimumNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  var minimumLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var minimumUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  var minimumSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '?'];

  // these are my prompts and confirms
  var passwordLength = prompt("Enter amount of characters, must be more than 8 characters and less than 128 characters.");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("password must be 8 characters long and less than 128 characters!")
    passwordLength = 0;
    generatePassword()
  } else {
    var numbers = confirm("Do you want numbers?");
    console.log(numbers)
    if (numbers === true) {
      characterChoice.push(0)
    }
    var lowerCase = confirm("Do you want lowercase?");
    console.log(lowerCase)
    if (lowerCase === true) {
      characterChoice.push(1)
    }
    var upperCase = confirm("Do you want uppercase?");
    console.log(upperCase)
    if (upperCase === true) {
      characterChoice.push(2)
    }
    var symbols = confirm("Do you want symbols?")
    console.log(symbols)
    if (symbols === true) {
      characterChoice.push(3)
    }
    console.log(characterChoice)

    // for loop and math floor/random
    for (var i = 0; i < passwordLength; i++) {
      var arrayPick = Math.floor(Math.random() * characterChoice.length);
      console.log(arrayPick)
      if (arrayPick === 0 && characterChoice[0] === 0) {
        finalPassword.push(minimumNumbers[Math.floor(Math.random() * 10)])
      } else if (arrayPick === 1 && characterChoice[1] === 1) {
        finalPassword.push(minimumLowerCase[Math.floor(Math.random() * 26)])
      }else if (arrayPick === 2 && characterChoice[2] === 2) {
        finalPassword.push(minimumUpperCase[Math.floor(Math.random() * 26)])
      }else if (arrayPick === 3 && characterChoice[3] === 3) {
        finalPassword.push(minimumSymbols[Math.floor(Math.random() * 9)])
      } else {
        passwordLength ++
      }
    
    } 
  }

  var passwordText = document.querySelector("#password")
  console.log(finalPassword)
  var test = finalPassword.toString()


}