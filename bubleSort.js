// Is a sorting algorithm that takes an array of numbers and return 
// the array in a sorted list of lowest to greatest number.
// It return array, sorted by bubble sort.

function bubbleSort(array){
    for (var i = array.length; i > 0; i--){
        for(var j = 0; j < i; j++){
            if (array[j] > array[j + 1]){
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

Console.log(bubbleSort([5, 3, 8, 2, 1, 4]))