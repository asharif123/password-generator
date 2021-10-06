

// INSTRUCTIONS:
// when user hits button, give user options what to include

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Write password to the #password input:

// ----------------------------------------------------------------------------------------------------------


// generates password
function generatedPassword() {


  // ASK user for length of password, must be between 8 to 128 characters
  var passwordLength = parseInt(window.prompt("How long do you want your password to be? (Must be between 8 to 128 characters!"));
  
    // check if string is number and has 8 to 128 characters  
  if (passwordLength < 8 || passwordLength > 128 || parseInt(passwordLength) !== parseInt(passwordLength)) {
    window.alert("Please enter a number between 8 to 128!")
    generatedPassword();
  }

  else {
    // verify user selected character type (lowercase, uppercase, numeric, and/or special characters)
    var upperCase = window.prompt("Do you want uppercase letters in your password? \(Enter Yes or No)").toUpperCase();
    var lowerCase = window.prompt("Do you want lowercase letters in your password? \(Enter Yes or No)").toUpperCase();
    var numbersCase = window.prompt("Do you want numbers in your password? Enter \(Enter Yes or No)").toUpperCase();
    var specialCase = window.prompt("Do you want special characters in your password? \(Enter Yes or No)").toUpperCase();

    // If user fails to select any character type, tell user to make at least 1 selection and start process over
    if (upperCase !== "YES" && lowerCase !== "YES" && numbersCase !== "YES" && specialCase !== "YES") {
      window.alert("Please select at least 1 character type by entering \"Yes\"! Starting Over!")
      generatedPassword();
    }

    // once user has made selection type, generate password based off of user's selection type

    else {
      // stores user's generated password
      var password = '';

      // contains lowercase, uppercase, numbers, and special characters
      characterTypeMap = {
        lowerCase: "abcdefghijklmnopqrstuvwxyz",
        upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        numbers: "0123456789",
        specialCharacters: "!@#$%^&*\)[]{}\|;:'\".,<?>+=-_"
      };

      // store character selections that user has made
      var characterSelections = '';

      // store characters in characterSelections list based on character types that user has selected
      if (upperCase === "YES") {
        characterSelections += characterTypeMap["upperCase"];
      }

      if (lowerCase === "YES") {
        characterSelections += characterTypeMap["lowerCase"];
      }

      if (numbersCase === "YES") {
        characterSelections += characterTypeMap["numbers"];
      }

      if (specialCase === "YES") {
        characterSelections += characterTypeMap["specialCharacters"];
      }

      // generate random password based off user selections
      // create newly generated password
      for (var i = 0; i < passwordLength; i++) {
        password += characterSelections.charAt(Math.floor(Math.random() * characterSelections.length))
      }
      window.alert("Your password is: " + password);
      return password;
    }
    
  }
}


// function prints the password in the textbox
function writePassword() {
  var password = generatedPassword();
  var passwordText = document.querySelector("#password");

  // put the generated password in the textarea section
  passwordText.value = password;

}

