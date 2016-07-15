// write your functions here
//node nameofFile

//Define a function called sum that takes two numbers as arguments and returns their sum.

function sum(a, b) {
  var summation = a+b;
  return summation
}
console.log(sum(3, 6))

// Define a function called isEqual that takes two arguments and returns a boolean. Return true if the two arguments are equal and return false if they are not.
function isEqual(a, b) {
  if(a === b){
    return true
  }
  else {
    return false
  }
}

console.log(isEqual(4, 5))
console.log(isEqual(3, 3))

// Define a function called discountPercentage that returns the total discount ($), given the original amount and discount percentage (as arguments). Return a warning if the discount amount is greater than 100 or less that 0 percent.

function discountPercentage (a, b){
  if (b < 0 || b > 100) {
    return "Those are not correct discount amounts, please choose a number between 0-100"
  }
  else {
    var discount = (a * (b*.01))
    return discount + "%"
  }
}

console.log(discountPercentage(87, 20))

// Define a function called stringCapitalize that takes a string as an argument and returns the same string with the first letter of each word capitalized. Assume that each individual word is separated by only one space.
// Define a function called evenNumbers that takes a random integer, from 0 to 100, and outputs all the even integers from 0 to that random number.

function stringCapitalize(str) {

  var words = str.split(' ')

  for (var i in words) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1)
  }

  return words.join(' ')

}

console.log(stringCapitalize("the quick brown fox"))

// Define a function called evenNumbers that takes a random integer, from 0 to 100, and outputs all the even integers from 0 to that random number.


function evenNumbers(a) {
  if(a > 100) {
    return "Please pick a number between 0 and 100"
  }
  else {
  for(var i=0; i<a; i+=2) {
    console.log(i)
  }
  return a
}

}
console.log(evenNumbers(34))

// Define a function called isDivisible that takes two arguments and returns a boolean. Return true if the first argument is divisible by the second; otherwise, return false.

function isDivisible(a, b){
  if (a%b === 0) {
    return true;
  }

  else {
    return false
  }
}
console.log(isDivisible(10,2))

// Bonus: Write a function called oddNumbers that takes a random integer, from 0 to 100. If the number is greater than 40 then output all the odd integers from 40 to the random number. If the number is less than 40, output all the odd integers from 0 to 40.

function oddNumbers(a) {

  if(a > 40){
    for(var i=41; i<a; i++) {
      console.log(i)

    }
    return "Original number: " + a
  }
    else {
      for(var j =1; j<=40; j++){
        console.log(j)
      }
      return "Original number: " + a
    }
  }

  console.log(oddNumbers(37))

  
