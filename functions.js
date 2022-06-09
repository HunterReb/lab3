// kebab-case-here
// camelCase
// UpperCamelCase
// snake_case

// console.log(number)
// var number = 5

// when I define a function I specify its parameters
function sayHello(greeting, name){
    return `${greeting} ${name}`
  }
  
  // I pass in argument(s) when I call / invoke / run a function
  console.log("function return value is:", sayHello('Hi','Bob'))
  
  var add = function(firstNumber, secondNumber){
    return firstNumber + secondNumber
  }
  
  console.log("the sum is:", add(1, 5))
  
  function getTotalOfArray(numbers){
    // start total at zero
    var total = 0
    // loop around the array
    for (var number of numbers) { // for (var element of array) takes singular of each bit of array
      // for each element in the array add to total
      total += number // total = total + number
    }
    // return the result
    return total
  }
  
  var arrayToTotal = [1, 2, 3, 4, 5]
  console.log("total is:", getTotalOfArray(arrayToTotal))
  
  
  var isKeyInObject = function(object, keyToCheck){
    // get all the keys
    var keys = Object.keys(object)
    // loop around the keys
    for (var key of keys){
      // check if this key matches the keyToCheck
      if (key === keyToCheck){
        // immediately exit the function returning true - don't need to check any more
        return true
      }
    }
    // if we're here we've checked all the keys and not found a match so we can return false
    return false
  }
  var objectToCheck = { name: 'Wojtek', age: 30 } // this is what we're checking
  // prints false
  console.log("is banana key in object", isKeyInObject(objectToCheck, "banana")) 
  // prints true
  console.log("is name key in object", isKeyInObject(objectToCheck, "name")) 