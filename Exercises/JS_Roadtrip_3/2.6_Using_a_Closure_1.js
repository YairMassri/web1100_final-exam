// Video 2.1 accompanies this exercise

// The Cave’s developers just got reports of icebergs in the area!
//
//  - Build a warning message by passing a "iceberg" obstacle as an argument
//    into the warningMaker function.
//  - Store the results in a new variable called icebergAlert.
//  - Call the icebergAlert function to view the warning message.
//
// Use the code below in your solution.
//
// Note: You do not need to change the existing warningMaker function.

function warningMaker(obstacle) {
  return function() {
    alert("Beware! There have been " + obstacle + " sightings in the Cove today!");
  };
}
















// Answer:
function warningMaker(obstacle) {
  return function() {
    alert("Beware! There have been " + obstacle + " sightings in the Cove today!");
  };
}

var icebergAlert = warningMaker("iceberg");

icebergAlert();

// Output in the alert window:
Beware! There have been iceberg sightings in the Cove today!
