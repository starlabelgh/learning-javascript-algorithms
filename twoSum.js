//Results should be in a fornm of an array
// Any number in the 'numArray' can be used in multiple pairs

// Is an array that returns a pair of numbers that sum up to the given array
// Example: [1,3,4,5,6], 7 = [1,6], [3,4]

function twoSum(numArray, sum){
    var pairs = [];
    var hashtable = [];

    for (var i = 0; i < numArray.length; i++){
        var currNum = numArray[i];

        var counterpart = sum - currNum;
        if (hashtable.indexOf(counterpart) !== -1){
            pairs.push([ currNum, counterpart ]);
        }

        hashtable.push(currNum);
    }

    return pairs;
}

//console.log(twoSum([1,6,4,5,3,3], 7))
//Answer [1, 6], [4, 3], [4, 3]

console.log(twoSum([40, 11, 19, 17, -12], 28))

//Answer [17, 11], [-12, 40]