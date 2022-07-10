// Is a special sequence of numbers called the fabinocci sequence
// 1, ,1 , 2, 3, 5, 8, 13, 21, 34
// the first two numbers are 1 and 1 then the rest of the numbers
// that follows is the sum of the previous two numbers.

function fabinocci(position){
    if (position < 3) return 1;
    else return fabinocci(position - 1) + fabinocci(position - 2);

}

console.log(fabinocci(6));
