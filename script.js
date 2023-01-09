// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  //I'm using while loop to keep my user in prompts if they don't choose any option
  
  // Prompt asking user for length of their password, using default value of 16 so their password is fairly secure
  var answerChar = prompt("Length of password (10 - 64 characters)", "16");
  // Prompts value are strings so i'm converting it to int before validating it's answer
  var convertedAnswer = parseInt(answerChar);
  // Creating variable that will store information if option was chosen or not.
  var optionsType = 0;
  // Checking if convertedAnswer is less or equal to 64 and if it's bigger or equal to 10
  while (typeof answerChar !== "number" || answer < 10 || answer > 64){
    // If number is valid - break out of while loop and continue
    if (answerChar >= 10 && answerChar <= 64) {
      convertedAnswer = answerChar;
      break;
    }
    // if not valid, repeat prompt
    else {
      answerChar = prompt(
        "Not enough characters or too many! \n Please choose a number between 10 and 64."
      );
    }
  }
  
  while(true){
  var answerLowercase = confirm("Do you want lowercase?");
  if(!answerLowercase) {
    answerLowercase = false;
  } else {
    answerLowercase = true;
    optionsType++;
  }
  
  checkBoolean(answerLowercase);
  console.log("lowercase " + answerLowercase);

  var answerUppercase = confirm("Do you want uppercase ?");
  if(!answerUppercase) {
    answerUppercase = false;
  } else {
    answerUppercase = true;
    optionsType++;
  }

  checkBoolean(answerUppercase);
  console.log("uppercase " + answerUppercase);

  var answerNumeric = confirm("Do you want numeric?");
  if(!answerNumeric) {
    answerNumeric = false;
  } else {
    answerNumeric = true;
    optionsType++;
  }

  checkBoolean(answerNumeric);
  console.log("numeric " + answerNumeric);
  
  var answerSpecial = confirm("Do you want special characters in your password ?");
  if(!answerSpecial) {
    answerSpecial = false;
  } else {
    answerSpecial = true;
    optionsType++;
  }

  checkBoolean(answerSpecial);
  console.log("special " + answerSpecial);

  if(optionsType === 0) {
    alert("You need to select at least one character type!");
    answerObject = {};
    continue;
  } else {
    var answerObject = {
      numberChar: convertedAnswer,
      lowercase: answerLowercase,
      uppercase: answerUppercase,
      numeric: answerNumeric,
      special: answerSpecial
    }
  }
  
  console.log(answerObject);
  return answerObject;
  }
}

// Function for getting a random element from a string
function getRandom(string) {
  var random = string.charAt(Math.floor(Math.random() * string.length));

  return random;
}

// Function for checking if prompt is true or false, it will return a boolean and optionOpted
function checkBoolean(Boolean) {
  var optionOpted = 0;
  var option =''
  if(!Boolean) {
    option = false;
  } else {
    option = true;
    optionOpted++;
  }
  console.log("Check boolean function value: " + option, optionOpted);
  return option, optionOpted;
}




// Function to generate password with user input
function generatePassword() {
  // Bringing user prompts values (object)
  var answers = getPasswordOptions();
  // Declaring password object where i'll store characters based on user prompts
  var passwordObject = {};
  // Declaring password string to store generated password
  var password = '';
  // Checking if lowercase option was chosen(true)
  if(answers.lowercase) {
    // Adding lowercase characters to my password object by concatenating all of the elements
    // in a lowerCasedCharacters array and returning a new string with those elements.
    passwordObject.lowerString = lowerCasedCharacters.join('');
    // Adding a random lowercased character
    password += getRandom(passwordObject.lowerString);
  }
  // Checking if uppercase option was chosen(true)
  if (answers.uppercase) {
    // Adding uppercase characters to my password object by concatenating all of the elements
    // in a upperCasedCharacters array and returning a new string with those elements.
    passwordObject.upperString = upperCasedCharacters.join('');
    // Adding a random uppercased character
    password += getRandom(passwordObject.upperString);
  } 
  // Checking if numeric option was chosen(true)
  if (answers.numeric) {
    // Adding numeric characters to my password object by concatenating all of the elements
    // in a numericCharacters array and returning a new string with those elements.
    passwordObject.numericString = numericCharacters.join();
    // Adding a random uppercased character
    password += getRandom(passwordObject.numericString);
  } 
  // Checking if numeric option was chosen(true)
  if(answers.special) {
    // Adding special characters to my password object by concatenating all of the elements
    // in a specialCharacters array and returning a new string with those elements.
    passwordObject.specialString = specialCharacters.join('');
    password += getRandom(passwordObject.specialString);
  }
  // Filling the rest of the password based on how many characters are already stored is password variable
  for(i = password.length; i < answers.numberChar; i++) {
        // Fill the rest of the password with random characters that are stored in passwordObject dependent on user choices
        password += getRandom(Object.values(passwordObject).join(''));  
  }
  // Returning new password
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
