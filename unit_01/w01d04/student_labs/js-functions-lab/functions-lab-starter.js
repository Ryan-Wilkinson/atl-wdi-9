// Question 1
function maxOfTwoNumbers(num1, num2) {
   if (num1 > num2); {
     return num1;
   }
  
   else if (num2 > num1); {
     return num2;
 }
}

// Question 2
function maxOfThree(num1, num2, num3) {
   var maxSolution = Math.max(num1, num2, num3);
   return maxSolution;
}

// Question 3
function isCharacterAVowel(character) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    if (character in vowels) {
     return true; 
    }
    else {
     return false;
    }
}

// Question 4
function sumArray(itsAnArray) {
 var results = 0;
 for (var i = 0; i < this.length; i++) {
   results += itsAnArray[i];
 }
   return results;
}


// Question 4
function multiplyArray(itsAnArray) {
 var results = 0;
 for (var i = 0; i < this.length; i++) {
   results *= itsAnArray[i];
 }
   return results;
}


// Question 5
var numberOfArguments = function(arguements){
  return arguments.length;  
}



// Question 6
function wordReverse(stringToReverse) {
	var arrayOfWords = stringToReverse.split(' ');

	var reversedWords = arrayOfWords.reverse(' ');

	return reversedWords.join(' ');
}


// Question 7
function findLongestWord (stringy) {
   var words = stringyy.split(' ');
   var maxLength = 0;
 for (var i = 0; i < words.length; i++); {
  if (words[i] > maxLength) {
   maxLength = words[i].length;
  }
 }
 return (maxLength);
}


// Question 8
function filterLongWords (arrayy, i) {
   var newArray = [];
 for (var i = 0; i < arrayy.length; i++);
   if (arrayy[i].length > i) {
    newArray.push(arayy[i]);
   }
  return newArray;
}

// needed to google a lot for this one and still have no clue what really is going on, still need to study more about "push"

// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

