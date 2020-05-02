
// first alert to appear upn loading page
alert("SUP?? Welcome, Playa!")

// variables to be used in the form of strings

var alphaNumArray=[];
var lowerCaseChar=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseChar=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
var numericChar=["1","2","3","4","5","6","7","8","9","0"];
var specialChar=["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];

// function for generating the pw
function generatePassword() {

    var passwordString="";

    // booleans for the variables
    var useLowerCase=confirm("Do you want to include lowercase characters?");
    var useUpperCase=confirm("Do you want to include uppercase characters?");
    var useNumeric=confirm("Do you want to include numeric characters?");
    var useSpecial=confirm("Do you want to include special characters?");

    // loop for confirming pw criteia
    while (useLowerCase == false && useUpperCase == false && useNumeric == false && useSpecial == false) {
        alert("Please select one type of character");
        useLowerCase=confirm("Do you want to include lowercase characters?");
        useUpperCase=confirm("Do you want to include uppercase characters?");
        useNumeric=confirm("Do you want to include numeric characters?");
        useSpecial=confirm("Do you want to include special characters?");
    }

// loop for checking pw length
    var passwordLength=parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
    while(passwordLength < 8 || passwordLength > 128 || typeof(passwordLength) != "number" || passwordLength === NaN || passwordLength === null) {
        alert("Please choose a number that is more than 8 and less than 128 characters");
        passwordLength=parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
    } 

// populates the overall alphanumeric array that will add each selected PW criteria to array that will be the new pw
    if (useLowerCase==true){
        alphaNumArray.push(lowerCaseChar);
    
    }
    if (useUpperCase==true){
        alphaNumArray.push(upperCaseChar)
    
    }
    if (useNumeric==true){
        alphaNumArray.push(numericChar)
        
    }
    if (useSpecial==true){
        alphaNumArray.push(specialChar)
    }

    // loop for the pw length

    for(var i=0;i<passwordLength;i++){

        var randomCharArrayNum;
        var selectedCharArray;
        var randomCharNum;
        var randomChar;

        // a random number is generated for the alphanumeric array (length of alphanumeric array)
        
        randomCharArrayNum= parseInt(Math.floor(Math.random()*alphaNumArray.length)); //random number based on length of case array
        
        // a random number is generated for the character array (length of character array)

        //variable that stores selected array from case array
        selectedCharArray=alphaNumArray[randomCharArrayNum]; 
        
        // variable that stores random number based on length of selected array
        randomCharNum=Math.floor(Math.random()*selectedCharArray.length);

       
        randomChar=selectedCharArray[randomCharNum];
        //console.log(randomChar);
        // console.log("Your random character array num is " + randomCharArrayNum + " and your random character number is " + randomCharNum);

        //returns the password string based on the pw inpurt criteria
        passwordString+=randomChar;
        
        
    }
    // final pw in the final format that will be presented in the text box area
    passwordEntry.textContent=passwordString;    
}


