// Video 2.1 accompanies this exercise

// We’ve made the code a little trickier this time. Again, calculate the
// final value of the result variable and alert the value as a number using
// one line of code.

function mystery(input) {
  var secret = 5;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

var hidden = mystery(4);
var result = hidden(2);
















// Answer:
alert(40);

// Answer breakdown:
var hidden = mystery(4);

var hidden = function mystery(4) {
  var secret = 5;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
};

var hidden = function mystery(4) {
  function mystery2(multiplier) {
    multiplier *= 4;           // input = 4
    return 5 * multiplier;    // secret = 5;
  }
};

var hidden = function mystery(4) {
  function mystery2(multiplier) {
    return 5 * (multiplier * 4);
  }
};

var hidden = 5 * (multiplier * 4);

var hidden = 20 * multiplier;

var result = hidden(2);

var result = 20 * 2;

var result = 40;
