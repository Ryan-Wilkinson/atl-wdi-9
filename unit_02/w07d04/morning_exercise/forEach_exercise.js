words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];

words.map(function(n) {

});

console.log(words);

console.log('----------------------------------------------');

var squareMe = [0, 1, 10, 24, 595]

var squared = []

squareMe.forEach(function(n) {
	squared.push(n*n);
});

console.log(squared);

console.log('----------------------------------------------');

var numbers = [5,7,9,12,20]

var sum = 0

numbers.forEach(function(n) {
	sum += n;
});

console.log(sum/numbers.length);

console.log('----------------------------------------------');