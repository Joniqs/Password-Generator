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
  var answerChar = prompt("Length of password (10 - 64 characters)", "10");
  var convertedAnswer = parseInt(answerChar);
    if(convertedAnswer <= 64 && convertedAnswer >= 10) {
      console.log(convertedAnswer);
    } else {
      console.log("Not enough characters or too many.")
    }
  
  var answerLowercase = prompt("Do you want lowercase? Y or N", "Y");
  if(answerLowercase === "Y") {
    answerLowercase = true;
  } else {
    answerLowercase = false;
  }
  console.log("lowercase " + answerLowercase);

  var answerUppercase = prompt("Do you want uppercase ? Y or N", "Y");
  if(answerUppercase === "Y") {
    answerUppercase = true;
  } else {
    answerUppercase = false;
  }

  console.log("uppercase " + answerUppercase);

  var answerNumeric = prompt("Do you want numeric? Y or N", "Y");
  if(answerNumeric === "Y") {
    answerNumeric = true;
  } else {
    answerNumeric = false;
  }

  console.log("numeric " + answerNumeric);
  
  var answerSpecial = prompt("Do you want special characters in your password ?", "Y");
  if(answerSpecial === "Y") {
    answerSpecial = true;
  } else {
    answerSpecial = false;
  }

  var answerObject = {
    numberChar: convertedAnswer,
    lowercase: answerLowercase,
    uppercase: answerUppercase,
    numeric: answerNumeric,
    special: answerSpecial
  }

  console.log(answerObject);
  return answerObject;
}

// Function for getting a random element from a string
function getRandom(str) {
  var items = str.charAt(Math.floor(Math.random() * str.length));

  return items;
}

// Function to generate password with user input
function generatePassword() {
  var answers = getPasswordOptions();
  var passwordObject = {};
  var password = '';
  
  if(answers.lowercase) {
    passwordObject.lowerString = lowerCasedCharacters.join('');
    password += getRandom(passwordObject.lowerString);
  }
  if (answers.uppercase) {
    passwordObject.upperString = upperCasedCharacters.join('');
    password += getRandom(passwordObject.upperString);
  } 
  if (answers.numeric) {
    passwordObject.numericString = numericCharacters.join();
    password += getRandom(passwordObject.numericString);
  } 
  if(answers.special) {
    passwordObject.specialString = specialCharacters.join('');
    password += getRandom(passwordObject.specialString);
  }
  console.log(passwordObject); 
  for(i = password.length; i < answers.numberChar; i++) {
        password += getRandom(Object.values(passwordObject).join(''));  // fill the rest of the password with random characters
  }
  console.log("new pass:" + password);
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
