// Video 1.6 accompanies this exericse

// The folks over at Pine Puzzlers need an array of functions for one of
// their puzzles. They’ve requested your help in making the array, which
// they would like to be called puzzlers. The cells of the array should each
// contain a function, and these functions–well, what they return–are listed
// here in order. Each function has one parameter. Note input below represents
// the parameter, and you will need to convert the math formulas to JavaScript:
//
//  - Returns 3 * input - 8
//  - Returns (input + 2)^3
//  - Returns input^2 - 9
//  - Returns input % 4
//
// Use your knowledge of arrays and anonymous function expressions to build
// this array of functions. After creating your array of functions, test it out
// by running the following code:

puzzlers.forEach(function (puzzle) {
  console.log(puzzle(2));
});

//
// Note: Use parentheses with your return statements if you’re having trouble
// with the order of operations.

















// Answer example:
var puzzlers = [
  function (input) {
  	return 3 * input - 8;
  },
  function (input) {
  	return Math.pow((input + 2), 3);
  },
  function (input) {
  	return Math.pow(input, 2) - 9;
  },
  function (input) {
  	return input % 4;
  }
];

puzzlers.forEach(function (puzzle) {
  console.log(puzzle(2));
});

// Output:
-2
64
-5
2
