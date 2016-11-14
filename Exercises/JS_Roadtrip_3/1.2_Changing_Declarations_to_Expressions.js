// Video 1.1 accompanies this exercise

// Developers for the Rainforest of Function Expressions Park have created
// a function declaration named forestFright, but they’ve decided not to keep
// the function in memory.
//
// Convert the function below from a named function declaration to an anonymous
// function expression and assign it to a variable called runAway.

function forestFright() {
  var toAlert = "";
  for (var i = 0; i < 5; i++) {
    toAlert = toAlert + "Lions, Tigers, and Bears, Oh My!!\n";
  }
  alert(toAlert);
}
















// Answer:
var runAway = function () {
  var toAlert = "";
  for (var i = 0; i < 5; i++) {
    toAlert = toAlert + "Lions, Tigers, and Bears, Oh My!!\n";
  }
  alert(toAlert);
};
