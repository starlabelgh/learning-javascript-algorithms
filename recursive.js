//factorial of 4
// 4! = 4 * 3 * 2 * 1 = 24

function factorial(num){
    if(num <= 2){
      return num
    }else{
      return num * factorial(num - 1)
    }
  }
  
  console.log(factorial(4))