//how to reverse a string of words

//define the function reverseWords passing a string parameter
function reverseWords(string){
    //create an array of all the words in our string
    var wordsArr = string.split(' ');

    //define an empty array to put all our reverse words into after reversing them
    var reversedWordsArr = [];

    //loop through our reverse words
    wordsArr.forEach(word => {
        var reversedWords = '';

        //looping every letter in our words backwards
        for (var i = word.length -1; i >= 0; i--) {
            reversedWords += word[i];
        }

        reversedWordsArr.push(reversedWords);
    });

    return reversedWordsArr.join(' ');
}


reverseWords('my name is samanhyia moses, i code like a boss')

// => ym eman si aiyhnamas ,sesom i edoc ekil a ssob