// Video 3.1 accompanies this exercise

// To complete your examination, the Wizard-Devs have asked you to log out the
// actual result of calling the theBridgeOfHoistingDoom() function. What is
// returned at the end of the theBridgeOfHoistingDoom function?

function theBridgeOfHoistingDoom() {
  var sword = undefined;
  var dwarf = undefined;
  var fall = undefined;
  var ring = undefined;
  function fellowship() {
    return "friends";
  }
  sword = "sting";
  dwarf = function() {
    return "axe";
  }
  fall = "Fly you fools!";
  fellowship = function() {
    return "broken";
  }
  ring();
  return sword;
}














// Answer:
TypeError
