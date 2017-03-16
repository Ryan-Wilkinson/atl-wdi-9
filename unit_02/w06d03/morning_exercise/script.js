//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
  var smallBarrel = 60;
  var largeBarrel = (total - (small * smallBarrel)) / large;

return largeBarrel;
};

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
  var circumferece = 24901;

  var totalGallons = circumferece / milesPerGallon;
  var totalCost = totalGallons * fuelPrice;

  return totalCost;
};

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d){
  var costco = (b / 100) * a;
  var kirkland = (d / 100) * c;
  var totalJuiceGallons = (a + c);
  var totalJuicePercent = costco + kirkland;

  var complete = totalJuicePercent / totalJuiceGallons;

  return complete; 
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
