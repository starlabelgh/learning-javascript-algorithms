// The objective of the Caesar Ciphar is to shift every letter (string) in a given String
// by the number (num) that is passed in. So for example, if we pass in the string 'Moses' 
// and the number 2, it should return the string Oqugu. Every letter in the string shifted
// two places in the alphabet.

//create the function caesarCiphar in camelCase passing the two parameters
function caesarCiphar (str, num){
    num = num % 26;
    var lowerCaseString = str.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newString = '';

    for (var i = 0; i < lowerCaseString.length; i++){
        var currentLetter = lowerCaseString[i];
        if (currentLetter === ' ') {
            newString += currentLetter;
            continue;
        }

        var currentIndex = alphabet.indexOf(currentLetter);
        var newIndex = currentIndex + num;
        if (newIndex > 25) newIndex = newIndex - 26;
        if (newIndex < 0) newIndex = 26 + newIndex;
        if (str[i] === str[i].toUpperCase()) {
            newString += alphabet[newIndex].toUpperCase();
        }

        else newString += alphabet[newIndex];
    }

    return newString;
}

caesarCiphar('Moses', 2)