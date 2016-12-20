// Video 2.1 accompanies this exercise

// More tricky. More tough! Again, calculate the final value of the result
// variable and alert the value as a number using one line of code. Hehe,
// good luck with this one!

function mystery(input) {
  var secret = 4;
  input += 2;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

function mystery3(param) {
  function mystery4(bonus) {
    return param(6) + bonus;
  }
  return mystery4;
}

var hidden = mystery(3);
var jumble = mystery3(hidden);
var result = jumble(2);















// Answer:
alert(122);

// Answer breakdown:
var hidden = mystery(3);

var hidden = function mystery(3) {   // input = 3
  var secret = 4;
  input += 2;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
};

var hidden = function mystery(3) {
  input = 3 + 2;
  function mystery2(multiplier) {
    multiplier *= 5;    // input = 5
    return 4 * multiplier;   // secret = 4
  }
  return mystery2;
};

var hidden = function mystery(3) {
  function mystery2(multiplier) {
    return 4 * (multiplier * 5);
  }
  return mystery2;
};

var hidden = function mystery(3) {
  return function mystery2(multiplier) {
    return 4 * (multiplier * 5);
  };
};

var hidden = function (multiplier) {
  return 20 * multiplier;  // 4 * 5 = 20
};

var jumble = mystery3(hidden);

function mystery3(param) {
  function mystery4(bonus) {
    return param(6) + bonus;
  }
  return mystery4;
}

function mystery3(hidden) {
  function mystery4(bonus) {
    return hidden(6) + bonus;
  }
  return mystery4;
};

hidden(6) = function (6) {
  return 20 * 6;
}

hidden(6) = 120;

mystery3(hidden) = function (hidden) {
  function mystery4(bonus) {
    return 120 + bonus;
  }
  return mystery4
};

mystery3(hidden) = function (bonus) {
  return 120 + bonus;
};

var jumble = mystery3(hidden);

var jumble = function (bonus) {
  return 120 + bonus;
};

var result = jumble(2);

jumble(2) = function (2) {
  return 120 + 2;
};

jumble(2) = 122;

var result = 122;
