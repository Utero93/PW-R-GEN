characterLength = 8;
var allChars = [];

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];
var symbols = [',', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '{', '}', '|', '<', '>', '?', '-', '=', '[', ']', ';', ',', '.', '/',];


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

// // Write password to the #password input
// function writePassword() {
//   // this will return either true/false, if it returns false then the requirements werent met
//   var correctPasswords = getPassword();

// if(correctPasswords) {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

}

// generate the password based upon users criteria
function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
      var randomIndex = Math.floor(Math.random() * allChars.length);
      password = password + allChars[randomIndex];
  }

  return password;
}

function getPassword() {
  allChars = [];
  characterLength = parseInt(prompt("How many characters would you need for your password? (8 min to 128 max)"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length must be between 8 - 128 characters long. Please enter again.")
    return false;
  }


  if (confirm("Would you like to include lower case letters?")) {
    allChars = allChars.concat(lowerCase);
  }

  if (confirm("Would you like to include upper case letters?")) {
    allChars = allChars.concat(upperCase);
  }

  if (confirm("Would you like to include special characters?")) {
    allChars = allChars.concat(symbols);
  }

  if (confirm("Would you like to include numbers?")) {
    allChars = allChars.concat(number);
  }

  return true;
}