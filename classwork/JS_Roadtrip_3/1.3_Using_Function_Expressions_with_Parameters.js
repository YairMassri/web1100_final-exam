// Video 1.1 accompanies this exercise

// The devs at the Deathwoods Forest have determined a specific formula for
// the quantifiable amount of fear generated at the theme park. Their formula
// is based on the amount of people, the amount of rain, and the amount of
// sharks. Yes. Sharks.
//
//  - Analyze the fearGenerated formula.
//  - Assign appropriate values to the people, rain, and sharks variables
//    so that the amount of fear generated will be no less than 100, but no
//    more than 400.
//  - Call the fearGenerated function and pass in the variables as arguments.
//  - Store the result of that function in a new variable called fear.
//  - Log fear to the console
//
// Use the code below in your solution.
//
// Note: You do not need to change the existing fearGenerated function.

var people = ;
var rain = ;
var sharks = ;

var fearGenerated = function(numPeeps, rainInInches, numSharks) {
  var rainFear = numPeeps * rainInInches;
  var sharkFear = numSharks * numSharks * numSharks;
  var totalFear = sharkFear + rainFear;
  return totalFear;
};

















// Answer example:
var people = 10;
var rain = 2;
var sharks = 5;

var fearGenerated = function(numPeeps, rainInInches, numSharks) {
  var rainFear = numPeeps * rainInInches;
  var sharkFear = numSharks * numSharks * numSharks;
  var totalFear = sharkFear + rainFear;
  return totalFear;
};

var fear = fearGenerated(people, rain, sharks);
console.log(fear);

// Output:
145
