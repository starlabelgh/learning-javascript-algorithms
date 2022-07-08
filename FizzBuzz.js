//how to print fizz or buzz or fizzbuzz when a number is generated is divisible by 3

function fizzBuzz(num){
    for (var i = 1; i <= num; i++){
      if(i%3===0 && i%5===0)console.log('FizzBuzz')
      else if(i%3 ===0)consoe.log('Fizz')
      else if(i%5 ===0)console.log('Buzz')
      else console.log(i)
    }
  }
  
  fizzBuzz(30)
  
  //refacted fizzbuzz
  function fizzBuzz(num){
    for (var i = 1; i <= num; i++){
      if(i%15 ===0)console.log('FizzBuzz')
      else if(i%3 ===0)consoe.log('Fizz')
      else if(i%5 ===0)console.log('Buzz')
      else console.log(i)
    }
  }
  
  fizzBuzz(30)