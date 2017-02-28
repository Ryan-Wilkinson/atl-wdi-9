//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

var lengths = function(arrayOfStrings) {
	var arrayOfNumbers = [];

	for (var i = 0; i < arrayOfStrings.length; i++) {
		var lengthOfString = arrayOfStrings[i].length;

		arrayOfNumbers.push(lengthOfString);
	}
	return arrayOfNumbers;
}

// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

// 1. define a function called transmogrifier
// 2. define the parameters, called base1, base2, and exponent
// 3. find the product of base 1 and base 2
// 4. raise the product to the power of exponent
// 5. return the transmogrified number

var transmogrifier = function(base1, base2, exponent) {
	var productOfBases = (base1 * base2);
	return Math.pow(productOfBases, exponent);
}

// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// 1. define a function called wordReverse
// 2. define one perameter called stringToReverse
// 3. turn the string into an array of words
// 4. create an empty array to store the reversed array
// 5. working backwars through the original array, place them into the empty array
// 6. return the reversed array as a string

function wordReverse(stringToReverse) {
	var arrayOfWords = stringToReverse.split(' ');

	var reversedWords = arrayOfWords.reverse(' ');

	return reversedWords.join(' ');
}

