//Is an algorithm that allows a user to search for a given value inside of a list
// - Search for a given value (key) inside of a list (numArray)
// Runs in O(log n) run time - very performant

//recursion is when a function calls itself

// function factorial(num){
//     if(num === 1){
//         return num;
//     }else{
//         return num * factorial(num - 1);
//     }
// }

// console.log(factorial(4));

function binarySearch(numArray, key){
    var middleIdx = Math.floor(numArray.length / 2);
    var middleElem = numArray[middleIdx];

    if (middleElem === key) return true;
    else if (middleElem < key && numArray.length > 1){
        return binarySearch(numArray.splice(middleIdx, numArray.length), key);
    }
    else if (middleElem > key && numArray.length > 1){
        return binarySearch(numArray.splice(0, middleIdx), key)
    }
    else return false;
}

console.log(binarySearch ([5, 7, 12, 16, 36, 42, 56, 71], 56), 15)

// results = false
