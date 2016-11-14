// Question 18

function mystery(input) {
  var secret = 10;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

var hidden = mystery(2);
var result = hidden(3);

// What is the value of result after runninng the code above?
// Do not use your console to solve this problem. Only use your head or
// pen & paper.
