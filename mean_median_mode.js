//find the mean, median and mode if a set of numbers in an array

function getMeanMedianMode(array){
    //call other three functions
    // return obj which has mean, median and mode

    return {
        mean: getMean(array),
        median: getMedian(array),
        mode: getMode(array)
    }
}

function getMean(array){
    var sum = 0;

    array.forEach(num => {
        sum += num;
    });

}

function getMedian(array){

}

function getMode(array){

}