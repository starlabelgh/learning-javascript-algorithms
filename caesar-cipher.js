function carsarCiphar (str, num){
    num = num % 26;
    var lowerCaseString = str.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newString = ' ';

    for (var i = 0; i < lowerCaseString.length; i++){
        var currenLetter = lowerCaseString[i];
        if (currenLetter === ' ') {
            newString += currenLetter;
            continue;
        }

        var currenLetter = alphabet.indexOf(currenLetter);
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

carsarCiphar('Moses', 2)