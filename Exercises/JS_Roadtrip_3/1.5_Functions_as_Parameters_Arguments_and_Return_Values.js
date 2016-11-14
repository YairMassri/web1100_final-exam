// Video 1.1 accompanies this exercise

// Well, it stands to reason that some people might not want to experience
// the Haunted Hemlock House if the fear is significantly elevated on that day.
//
//  - Inside the fearMessage function expression, use conditional statements
//    (e.g., if, else if) to check the integer value of the fear variable,
//    assigned on line 1, and decide whether its value is LOW or MEDIUM.
//
//  - For each fear range below we want to display a confirmation message with
//    the corresponding message. We can return a call to the confirm function
//    that has a single string argument containing the correct message.
//
// For fear levels less than 200 (i.e., fear < 200):
//
//      Fear Level: LOW
//      Still wanna ride?
//
// For fear levels from 200 through 300 inclusive (i.e., fear >= 200 && fear <= 300):
//
//      Fear Level: MEDIUM
//      Think you'll make it?
//
// Use the code below in your solution. Note: You don't need to change the
// code provided for you.

var fear = fearGenerated(numPeeps, rainInInches, numSharks);

var fearMessage = function() {
  // Insert conditional statements here

};

function confirmRide(confirmToGo) {
  return confirmToGo();
}

// Call confirmRide with the fearMessage function
var startRide = confirmRide(fearMessage);


















// Answer:
var fear = fearGenerated(numPeeps, rainInInches, numSharks);

var fearMessage = function() {
  if(fear < 200) {
    return confirm("Fear Level: LOW\nStill wanna ride?");
  } else if(fear >= 200 && fear <= 300) {
    return confirm("Fear Level: MEDIUM\nThink you'll make it?");
  }
};

function confirmRide(confirmToGo) {
  return confirmToGo();
}

var startRide = confirmRide(fearMessage);
