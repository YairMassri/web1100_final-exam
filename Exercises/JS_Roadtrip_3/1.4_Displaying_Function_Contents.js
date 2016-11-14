// Video 1.1 accompanies this exercise

// Periodically, the devs at the Haunted Hemlock House need to be reminded
// of their formula. They would like to view the contents of the function,
// rather than executing it.
//
// Write one line of code to alert the contents of the variable that stores
// the function to the screen. Here is the fearGenerated function expression
// assignment for reference:

var fearGenerated = function(numPeeps, rainInInches, numSharks) {
  var rainFear = numPeeps * rainInInches;
  var sharkFear = numSharks * numSharks * numSharks;
  var totalFear = sharkFear + rainFear;
  return totalFear;
};

// Use the code above in your solution.

















// Answer example:
var fearGenerated = function(numPeeps, rainInInches, numSharks) {
  var rainFear = numPeeps * rainInInches;
  var sharkFear = numSharks * numSharks * numSharks;
  var totalFear = sharkFear + rainFear;
  return totalFear;
};

alert(fearGenerated);

// Output:
function(numPeeps, rainInInches, numSharks) {
  var rainFear = numPeeps * rainInInches;
  var sharkFear = numSharks * numSharks * numSharks;
  var totalFear = sharkFear + rainFear;
  return totalFear;
}
