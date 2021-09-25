// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var characterCount = prompt("Length of password(8-128 charcters)?");
  var specialCharacters = prompt("Special characters(y/n)?");
  var upperCase = prompt("Uppercase(y/n)?");
  var numberCharcter = prompt("Numbers(y/n)?");

  function generatePassword(){
    if(8 <= characterCount && characterCount <= 128 && specialCharacters.toLowerCase() == "n" && upperCase.toLowerCase() == "n" && numberCharcter.toLowerCase() == "n"){
      var pass = '';
      var str = 'abcdefghijklmnopqrstuvwxyz';
        
      for (i = 1; i <= parseInt(characterCount); i++) {
          var char = Math.floor(Math.random()
                      * str.length + 1);
            
          pass += str.charAt(char)
      }
        
      return pass;

    }else if(8 <= characterCount && characterCount <= 128 && specialCharacters.toLowerCase() == "n" && upperCase.toLowerCase() == "n" && numberCharcter.toLowerCase() == "y"){
      var pass = '';
            var str = 'abcdefghijklmnopqrstuvwxyz0123456789';
              
            for (i = 1; i <= parseInt(characterCount); i++) {
                var char = Math.floor(Math.random()
                            * str.length + 1);
                  
                pass += str.charAt(char)
            }
              
            return pass;

    }else if(8 <= characterCount && characterCount <= 128 && specialCharacters.toLowerCase() == "n" && upperCase.toLowerCase() == "y" && numberCharcter.toLowerCase() == "n"){
      var pass = '';
            var str = 'abcdefghijklmnopqrstuvwxyz' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
              
            for (i = 1; i <= parseInt(characterCount); i++) {
                var char = Math.floor(Math.random()
                            * str.length + 1);
                  
                pass += str.charAt(char)
            }
              
            return pass;

    }else if(8 <= characterCount && characterCount <= 128 && specialCharacters.toLowerCase() == "n" && upperCase.toLowerCase() == "y" && numberCharcter.toLowerCase() == "y"){
      var pass = '';
            var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
                    'abcdefghijklmnopqrstuvwxyz0123456789';
              
            for (i = 1; i <= parseInt(characterCount); i++) {
                var char = Math.floor(Math.random()
                            * str.length + 1);
                  
                pass += str.charAt(char)
            }
              
            return pass;

    }else if(8 <= characterCount && characterCount <= 128 && specialCharacters.toLowerCase() == "y" && upperCase.toLowerCase() == "n" && numberCharcter.toLowerCase() == "n"){
      var pass = '';
            var str = 'abcdefghijklmnopqrstuvwxyz' + " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
              
            for (i = 1; i <= parseInt(characterCount); i++) {
                var char = Math.floor(Math.random()
                            * str.length + 1);
                  
                pass += str.charAt(char)
            }
              
            return pass;

    }else if(8 <= characterCount && characterCount <= 128 && specialCharacters.toLowerCase() == "y" && upperCase.toLowerCase() == "n" && numberCharcter.toLowerCase() == "y"){
      var pass = '';
            var str = 'abcdefghijklmnopqrstuvwxyz0123456789' + " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
              
            for (i = 1; i <= parseInt(characterCount); i++) {
                var char = Math.floor(Math.random()
                            * str.length + 1);
                  
                pass += str.charAt(char)
            }
              
            return pass;

    }else if(8 <= characterCount && characterCount <= 128 && specialCharacters.toLowerCase() == "y" && upperCase.toLowerCase() == "y" && numberCharcter.toLowerCase() == "n"){
      var pass = '';
            var str = 'abcdefghijklmnopqrstuvwxyz' + " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
              
            for (i = 1; i <= parseInt(characterCount); i++) {
                var char = Math.floor(Math.random()
                            * str.length + 1);
                  
                pass += str.charAt(char)
            }
              
            return pass;

    }else if(8 <= characterCount && characterCount <= 128 && specialCharacters.toLowerCase() == "y" && upperCase.toLowerCase() == "y" && numberCharcter.toLowerCase() == "y"){
      var pass = '';
            var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
                    'abcdefghijklmnopqrstuvwxyz0123456789' + " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
              
            for (i = 1; i <= parseInt(characterCount); i++) {
                var char = Math.floor(Math.random()
                            * str.length + 1);
                  
                pass += str.charAt(char)
            }
              
            return pass;

    }else {
      alert("Invalid entry");
      var pass = "Try Again!"
    };

    return pass;

  };
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);