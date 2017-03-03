$(function(){
    alert("Everything is ready, let's do this");

	$('#addHome').removeClass('btn-danger').addClass('btn-success');  

	var $newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com<a>' );
	$newLink.appendTo('body');

	$('.jumbotron').addClass('text-center');
	

	$('#addHome').on('click', function($event) {
    console.log($event);
    console.log(this)
	});


	$('#homes tbody').on('click', 'tr', function($event) {
	alert('You are about to delete this row');
	var $rowThatWasClicked = $(this);
	$rowThatWasClicked.remove();
	});
  
 	

// $('#addHome').click(function($event) {
// 	var house = newHomes.pop();      // or .shift
// 	var $homeTr = $(
// 				`
// 				<tr>
// 				<td>${house.address}</td>
// 				<td>${house.sf}</td>
// 				<td>${house.bedrooms}</td>
// 				<td>${house.bath}</td>
// 				<td>${house.price}</td>
// 				<td><button class="btn btn-xs btn-danger">Remove</button></td>
// 				</tr>
// 				`
// 	);

// 	$homeTr.appendTo('tbody');
// })

var newHomes = [
    {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
    {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
    {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
    {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
	];


newHomes.forEach(function(home) {
	var homeInfoRowHTML = '<tr><td>' + home.address + '</td><td>' + home.sf + '</td><td>' + home.bedrooms + '</td><td>' + home.baths + '</td><td>' + home.price + '</td><td>' + "<button class='btn btn-xs btn-danger'>Remove</button></td>" 
	var $homeInfoRowObject = $(homeInfoRowHTML);
	$('#homes tbody').append($homeInfoRowObject);
});


})