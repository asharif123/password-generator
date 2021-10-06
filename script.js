// Assignment Code
var generateBtn = document.querySelector("#generate");

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
    var upperCase = window.prompt("Do you want uppercase letters in your password? Enter Yes or No").toUpperCase();
    var lowerCase = window.prompt("Do you want lowercase letters in your password? Enter Yes or No").toUpperCase();
    var numbersCase = window.prompt("Do you want numbers in your password? Enter Yes or No").toUpperCase();
    var specialCase = window.prompt("Do you want special characters in your password? Enter Yes or No").toUpperCase();

    // If user fails to select any character type, tell user to make at least 1 selection and start process over
    if (upperCase === "NO" && lowerCase === "NO" && numbersCase === "NO" && specialCase === "NO") {
      window.alert("Please select at least 1 character type! Starting Over!")
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

      // contains different selections that user can make
      var selectionMap = { 

      // possible testcases if user selects upperCase
        upperCase: {lowerCase: "NO", numbersCase: "NO", specialCase: "NO"},
        upperCase: {lowerCase: "YES", numbersCase: "YES", specialCase: "YES"},
        upperCase: {lowerCase: "YES", numbersCase: "NO", specialCase: "NO"},
        upperCase: {lowerCase: "NO", numbersCase: "YES", specialCase: "NO"},
        upperCase: {lowerCase: "NO",numbersCase: "NO", specialCase: "YES"},
        upperCase: {lowerCase: "YES",numbersCase: "YES", specialCase: "NO"},
        upperCase: {lowerCase: "YES",numbersCase: "NO", specialCase: "YES"},
        upperCase: {lowerCase: "NO",numbersCase: "YES", specialCase: "YES"},

      // possible testcases if user selects lowerCase
        lowerCase: {upperCase: "NO", numbersCase: "NO", specialCase: "NO"},
        lowerCase: {upperCase: "YES", numbersCase: "YES", specialCase: "YES"},
        lowerCase: {upperCase: "YES", numbersCase: "NO", specialCase: "NO"},
        lowerCase: {upperCase: "NO", numbersCase: "YES", specialCase: "NO"},
        lowerCase: {upperCase: "NO",numbersCase: "NO", specialCase: "YES"},
        lowerCase: {upperCase: "YES",numbersCase: "YES", specialCase: "NO"},
        lowerCase: {upperCase: "YES",numbersCase: "NO", specialCase: "YES"},
        lowerCase: {upperCase: "NO",numbersCase: "YES", specialCase: "YES"},

      // possible testcases if user selects numbersCase
        numbersCase: {upperCase: "NO", lowerCase: "NO", specialCase: "NO"},
        numbersCase: {upperCase: "YES", lowerCase: "YES", specialCase: "YES"},
        numbersCase: {upperCase: "YES", lowerCase: "NO", specialCase: "NO"},
        numbersCase: {upperCase: "NO", lowerCase: "YES", specialCase: "NO"},
        numbersCase: {upperCase: "NO", lowerCase: "NO", specialCase: "YES"},
        numbersCase: {upperCase: "YES", lowerCase: "YES", specialCase: "NO"},
        numbersCase: {upperCase: "YES", lowerCase: "NO", specialCase: "YES"},
        numbersCase: {upperCase: "NO", lowerCase: "YES", specialCase: "YES"},

      // possible testcases if user selects specialCase
        specialCase: {upperCase: "NO", lowerCase: "NO", numbersCase: "NO"},
        specialCase: {upperCase: "YES", lowerCase: "YES", numbersCase: "YES"},
        specialCase: {upperCase: "YES", lowerCase: "NO", numbersCase: "NO"},
        specialCase: {upperCase: "NO", lowerCase: "YES", numbersCase: "NO"},
        specialCase: {upperCase: "NO", lowerCase: "NO", numbersCase: "YES"},
        specialCase: {upperCase: "YES", lowerCase: "YES", numbersCase: "NO"},
        specialCase: {upperCase: "YES", lowerCase: "NO", numbersCase: "YES"},
        specialCase: {upperCase: "NO", lowerCase: "YES", numbersCase: "YES"},
      }
    }

    // if user selected upperCase, see if user selected other character options

    if (upperCase === "YES") {
      if (upperCase["lowerCase"] === "YES" && upperCase["numbersCase"] === "YES" && upperCase["specialCase"] === "YES") {
        var possibleCharacters = characterTypeMap["lowerCase"] + characterTypeMap["upperCase"] + characterTypeMap["numbers"] + characterTypeMap["specialCharacters"];
      }

      else if (upperCase["lowerCase"] === "YES" && upperCase["numbersCase"] === "NO" && upperCase["specialCase"] === "NO") {
        var possibleCharacters = characterTypeMap["lowerCase"] + characterTypeMap["upperCase"];
      }

      else if (upperCase["lowerCase"] === "NO" && upperCase["numbersCase"] === "YES" && upperCase["specialCase"] === "NO") {
        var possibleCharacters = characterTypeMap["upperCase"] + characterTypeMap["numbersCase"];
      }

      else if (upperCase["lowerCase"] === "NO" && upperCase["numbersCase"] === "NO" && upperCase["specialCase"] === "YES") {
        var possibleCharacters = characterTypeMap["upperCase"] + characterTypeMap["specialCase"];
      }

      else if (upperCase["lowerCase"] === "YES" && upperCase["numbersCase"] === "YES" && upperCase["specialCase"] === "NO") {
        var possibleCharacters = characterTypeMap["lowerCase"] + characterTypeMap["upperCase"] + characterTypeMap["numbersCase"];
      }

      else if (upperCase["lowerCase"] === "YES" && upperCase["numbersCase"] === "NO" && upperCase["specialCase"] === "YES") {
        var possibleCharacters = characterTypeMap["lowerCase"] + characterTypeMap["upperCase"] + characterTypeMap["specialCase"];
      }

      else if (upperCase["lowerCase"] === "NO" && upperCase["numbersCase"] === "YES" && upperCase["specialCase"] === "YES") {
        var possibleCharacters = characterTypeMap["upperCase"] + characterTypeMap["numbersCase"] + characterTypeMap["specialCase"];
      }

      else {
        var possibleCharacters = characterTypeMap["upperCase"];
      }
      // generate password based off selected criteria
      for (var i = 0; i < passwordLength; i++) {
        password += possibleCharacters.charAt(Math.floor(Math.random()*(possibleCharacters.length)))
      }

    }
          // show the newly created password
    window.alert(password);

  }
}

generatedPassword();
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // put the generated password in the textarea section
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
