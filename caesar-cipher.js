// The objective of the Caesar Ciphar is to shift every letter (string) in a given String
// by the number (num) that is passed in. So for example, if we pass in the string 'Moses' 
// and the number 2, it should return the string Oqugu. Every letter in the string shifted
// two places in the alphabet.

//create the function caesarCiphar in camelCase passing the two parameters
function caesarCiphar (str, num){

    //using the modulus operator to takecare of passed negetive number
    num = num % 26;

    //making the entire string into lowercase
    var lowerCaseString = str.toLowerCase();

    //create alphabet array filled with all the alphabet
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    //add a new string
    var newString = '';

    // looping through all the variables
    for (var i = 0; i < lowerCaseString.length; i++){
        var currentLetter = lowerCaseString[i];

        //adding a space character
        if (currentLetter === ' ') {
            newString += currentLetter;
            continue;
        }

        //determine where our current letter is in the alphabet array
        var currentIndex = alphabet.indexOf(currentLetter);
        
        //shift the current letter to the number parsed in the algorithm
        var newIndex = currentIndex + num;

        //to cut the count and loop it back to the begining when it gets to the last alphabet i.e 25
        if (newIndex > 25) newIndex = newIndex - 26;
        if (newIndex < 0) newIndex = 26 + newIndex;

        //handling uppercase letter by making the parsed string uppercase
        if (str[i] === str[i].toUpperCase()) {
            newString += alphabet[newIndex].toUpperCase();
        }
        //if is  not uppercase then continue with this code
        else newString += alphabet[newIndex];
    }

    return newString;
}

caesarCiphar('Moses', 2)