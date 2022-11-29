

document.querySelector("#generate").addEventListener("click", typePassword);


var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Length = "";
var SpecialCharacter;
var NumericCharacter;
var UpperCase;
var LowerCase;

function generatePassword() {
  var Length = (prompt("The amount of characters for your password from 8-50"));

  while(Length <= 7 || Length >= 51) {
      alert("Password must be 8-50 characters long!");
      var Length = (prompt("How many characters would you like your password to contain?"));
      } 
      alert(`Your password is going to have ${confirmLength} characters!`);
    var SpecialCharacter = confirm("Press OK if you would like to include special characters");
    var NumericCharacter = confirm("Press OK if you would like to include numeric characters");    
    var LowerCase = confirm("Press OK if you would like to include lowercase characters");
    var UpperCase = confirm("Press OK if you would like to include uppercase characters");
      while(UpperCase === false && LowerCase === false && SpecialCharacter === false && NumericCharacter === false) {
        alert("Chose at least one parameter!");
        var SpecialCharacter = confirm("Press OK to confirm if you would like to include special characters");
        var NumericCharacter = confirm("Press OK to confirm if you would like to include numeric characters");    
        var LowerCase = confirm("Press OK to confirm if you would like to include lowercase characters");
        var UpperCase = confirm("Press OK to confirm if you would like to include uppercase characters");   
    } 

     
      var passwordCharacters = []
    if (SpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }
    if (NumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }  
    if (LowerCase) {
      passwordCharacters = passwordCharacters.concat(charLower)
    }
    if (UpperCase) {
      passwordCharacters = passwordCharacters.concat(charUpper)
    }
      console.log(passwordCharacters)

    
      var userPassword = ""
      
      for (var i = 0; i < Length; i++) {
        userPassword = userPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(userPassword)
      }
      return userPassword;
}

function typePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

