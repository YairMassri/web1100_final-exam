// Video 2.9 accompanies this exercise

// The Closures Cave devs are troubled by the amount of the warnings that
// have been coming back lately. Some obstacles have resulted in many warnings,
// while others have not.
//
// They’d like you modify the warningMaker function to internally count the
// number of times a particular warning has been issued.
//
// In order to accomplish this, you’ll need to set up a count variable and
// figure out how to increment it appropriately within the context of your
// functions.
//
// Lastly, add that count to the alert message. The format of the message
// should match the following:
//
//    Beware! There have been <obstacle> sightings in the Cove today!
//    <number> have been spotted at the <location>!
//    This is alert #<count> today for <obstacle> danger.
//
// Use the code below in your solution:

function warningMaker(obstacle) {
  // create a count
  return function(number, location) {
    // keep track of warnings
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          // finish the warning message here

    );
  };
}















// Answer example:
function warningMaker(obstacle) {
  // create a count
  var count = 0;
  return function(number, location) {
    // keep track of warnings
    count++;

    alert(
      "Beware! There have been " + obstacle +
      " sightings in the Cove today!\n" +
      number + " have been spotted at the " +
      location + "!\n" +
      // finish the warning message here
      "This is alert #" + count + " today for " +
      obstacle + " danger."
    );
  };
}
