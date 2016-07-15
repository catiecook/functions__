
// Define a function called oldestPerson that takes an object with names as keys and ages as values (e.g., {'Chuck': 22, 'Brian': 46}), and then returns the name of the oldest living person.



  function oldestPerson(obj) {
    var sorted=[] //convert object to array
    for(var i in obj) {
      if(obj.hasOwnProperty(i))
        sorted.push([i, obj[i]])//now objects are in their own arrays [key, value]


      sorted.sort(function(a, b) {
        return b[1]-a[1] //sort them by value
      });

      return sorted
    }
  }
var namesAges = {
  Chuck : 54,
  Brian : 67,
  April : 34,
  Jason : 31,
  Miles : 19,
  Homer : 87,
}

console.log(oldestPerson(namesAges))

// Define a function called longestWord that takes a string and returns the longest word in the string.
function longestWord(string) {
  var words= [];
  var index = [];
  var wordLength = 0

  string = string.replace(/\W/g,' '); //remove punctuation
  words = string.split(' '); //put into array

for(var i=0; i<words.length-1; i++){

	if(words[i].length > words[i+1].length){
		wordLength = words[i].length
	}
}
for(var j=0; j<words.length; j++) {

	if(words[j].length > wordLength){
		index[j] = words[j]
	}
	else if(words[j].length === wordLength){
		index.push(words[j])
	}
}

return "The longest word(s): " + index.join(' ')
}

var sentence = "This word missiisiispp fdsfdooeosjjdjd ggooee"
console.log(longestWord(sentence));

// Define a function called factorial that takes a random number as an argument and then returns the factorial of that given number.

function factorial(n) {
	if(n === 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
}
var num = Math.floor(Math.random()*100)
console.log(factorial(num))



// Bonus: Write a function called palindrome that takes a string as an argument and returns the string in reversed order. Return true if the string is the same as the reversed string, otherwise return false.

function palindrome(str) {
	var revStr = str.split('').reverse().join('');
	if (revStr === str) {
		return true
	}
	else {return false}
}
var pali = "hannah hannah"
console.log(palindrome(pali))
