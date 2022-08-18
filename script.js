// Assignment Code
var generateBtn = document.querySelector("#generate");


//Homework Code starts here :
//creating arrays of the characters to be included in the password to be generated.
//variable in the function declared here.
var arrIndex;

var NumericCharacterArray =['0','1','2','3','4','5','6','7','8','9'];
var UpperCaseAlphaArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z'];
var LowerCaseAlphaArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];
var SpecialCharactersArray = ['!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','^','_', ']',' ` ','{','|','}','~'];

function generatePassword() {


 var passwordLength= window.prompt("How many characters would you like your password to contain?");
 UserPasswordLength = parseInt(passwordLength);//changing string input to int.
// validating input
 if ((UserPasswordLength >= 8 && UserPasswordLength <= 128))
  {

    // window prompts and alerts
      var specialChar = window.confirm("Click OK to confirm including special characters\n (Don't use spaces or backslash)");
      var NumChar= window.confirm("Click OK to confirm including Numeric characters");
      var lcaseAlphabet= window.confirm("Click OK to confirm including lowercase characters");
      var uCaseAlphabet = window.confirm("Click OK to confirm including uppercase characters");
      var userChoicePassword =[];

    //code to confirm at least one of the character type is chosen
            if(!specialChar && !NumChar && !lcaseAlphabet && !uCaseAlphabet )
            {
             
              window.alert("You need to include at least one of the character types");
              return ;

            }
            else
            {
                //creating array for all the character types included by the user
               if(specialChar)
                  {
                      userChoicePassword = userChoicePassword.concat(SpecialCharactersArray);

                  }
               if(NumChar)
                  {
                      userChoicePassword = userChoicePassword.concat(NumericCharacterArray);

                  }
              if(lcaseAlphabet)
                  {
                    userChoicePassword = userChoicePassword.concat(LowerCaseAlphaArray);
              
                  }
              if(uCaseAlphabet)
                  {
                    userChoicePassword = userChoicePassword.concat(UpperCaseAlphaArray);
                    
                  }
                  console.log(userChoicePassword);
                }
    }

  else {
    window.alert("Password should have more than 8 and less than 128 characters \n Also password cannot be null. ")
    return;
  }

 // Initializing it to be an empty string

  var passwordGenarated='';
  
//generating randow index number and then concatenating password with random characters.
  for(var i = 0; i < UserPasswordLength; ++i){

    arrIndex = Math.floor(Math.random() * userChoicePassword.length);
     passwordGenarated = passwordGenarated + userChoicePassword[arrIndex];
    
  }
  console.log(passwordGenarated);
  return passwordGenarated;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 console.log(password);
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
