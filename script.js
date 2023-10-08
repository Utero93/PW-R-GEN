// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    var password = "";
    lowerCase = "abcdefghijklmnopqrstuvwxyz";
    upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    numbers = "0123456789";
    symbols = "~!@#$%^&*()+{}|<>?-=[]\;',./";
    allChars = "upperCase + lowerCase + numbers + symbols";
  
  password += upperCase[Math.floor(math.random() * upperCase.length)];
  password += lowerCase[Math.floor(math.random() * lowerCase.length)];
  password += number[Math.floor(math.random() * number.length)];
  password += symbols[Math.floor(math.random() * symbols.length)];
  
  while (length > password.length) {
    password += allChars[math.floor(math.random() * allChars.length)];
  }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
