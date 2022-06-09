function harmlessRansonNote (noteText, magazineText) {
    var noteArr = noteText.split('');
    var magazineArr = magazineText.split('');
    var magazineObj = {};

    magazineArr.forEach(word => {
        if (!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++;
    });

    var noteIsPossible = true;
    noteArr.forEach(word => {
        if (magazineObj[word]) {
            magazineObj[word]--;
            if (magazineObj[word] < 0) noteIsPossible = false;
        }
        else noteIsPossible = false;
    });

    return noteIsPossible;
} 

harmlessRansonNote('this is a note from a secret admirer',' there are different types of fonts you can use, this is just and example of simple fonts you can have access to in your own way. This is the truth, Akus mothers waakye is the best I have ever tasted, is really really awesome.')