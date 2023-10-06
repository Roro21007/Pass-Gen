// Assignment code here

// *prompts for criteria
// *which criteria
//    8-128, lowercase, uppercase, numeric, special characters
// input validated character selected when prompt answered
// password generated that matches criteria
// password written on page

var criteria = prompt("Minimum 8 Characters, Include at least 1 Uppercase, Numeric, and Special Character")

var choice = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "0123456789",
  characters: ",./?!@#$%&*';:"
  
  
}

if (choice != "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
  var capital = alert("Please Include Uppercase")
} else { (choice != 0, 1, 2, 3, 4, 5, 6, 7, 8, 9) 
  var number = alert("Please Include Number")
} if (choice != ",./?!@#$%&*';:") {
  var special = alert("Please Include Special Character")
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var generatePassword = "abcdefghijklmnopqrstuvwxyz0123456789.,!@#$%&*"





// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  choice.chooserandom();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//chooseRandom: function() {
//  for (var i = 0; i < 77; i++)
//}