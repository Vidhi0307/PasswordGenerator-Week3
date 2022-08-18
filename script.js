// Assignment Code
var generateBtn = document.querySelector("#generate");


//Homework Code starts here :
//creating arrays of the characters to be included in the password to be generated.

var NumericCharacterArray =['0','1','2','3','4','5','6','7','8','9'];
var UpperCaseAlphaArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z'];
var LowerCaseAlphaArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];
var SpecialCharactersArray = ['!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',"\",'^','_', ']',' ` ','{','|','}','~'];

function generatePassword() {
  // window prompts and alerts

 var passwordLength= window.prompt("How many characters would you like your password to contain?");
  var specialChar = window.confirm("Click OK to confirm including special characters");
  var NumChar= window.confirm("Click OK to confirm including Numeric characters");
 var lcaseAlphabet= window.confirm("Click OK to confirm including lowercase characters");
 var uCaseAlphabet = window.confirm("Click OK to confirm including uppercase characters");
console.log(passwordLength);
console.log(specialChar);
console.log(NumChar);
console.log(lcaseAlphabet);
console.log(lcaseAlphabet);

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
