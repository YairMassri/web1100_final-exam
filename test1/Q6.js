// What is printed as a result of the following code? You must show your work
// and explain your thinking or else receive 0 points.

var g = f(10);
console.log( g() );
console.log( g() );
console.log( g() );

function f(start){
  var counter = start;
  return function(){
    counter++;
    return counter;
  }
}

// Answer:
