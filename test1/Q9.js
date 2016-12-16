// What is the value of the variable result after the following code block?
// You must show your work and explain your thinking or else receive 0 points.

var result = thisIsWeird();
function thisIsWeird() {
  function secret() {
    return 66;
  }
  var result;
  function secret() {
    return 1;
  }
  // The following line of code assigns a
  // secret function to the variable result.
  result = secret();
  function secret() {
    return "used sock";
  }
  return result;
}
