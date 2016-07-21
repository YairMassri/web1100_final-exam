1. What is the value of the result variable in the following code?
  ```javascript
  var result = mystery("cow");
  function mystery(animal){
    var callCount = 0;
    if (animal == "chicken"){
      return cluck();
    }
    else if (animal == "cow"){
      return moo();
    }
    else return callCount;

    function cluck(){
      callCount++;
      return "cluck";
    }
    function moo(){
      animal = "chicken";
      return "moo" + mystery(animal);
    }
  }
  ```  

2. What is printed as a result of the following code?
  ```Javascript
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
  ```  

3. What is the value of the variable *result* after the following code block?

```javascript
var d_Wade = {name: "Dwayne Wade", number: 23, position: "Shooting Guard",  
talents: {scoring: 9.1, blocking: 6, rebounding: 6, steals: 9, clutch: 9}  };

var prop1 = "talents";
var prop2 = "blocking";
var result = dWade[prop1][prop2];
```

4. What is the value of the variable *result* after the following code block?
```javascript
var f = function(){
  return 99;
}
var g = f;
var result = g();
var g = function(){
  return 60;
}
```

5. What is the value of the variable *result* after the following code block?
```javascript
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
```
6. Create a new type of Object called *Athlete* with the following properties: name, age, sex, height, weight, and the last five marks reached in competitions (as an array named marks). **Use pseudoclassical notation.**
7. Make a *prototypal function* named getMarksAverage which computes the average of the marks of the athlete.
8. Write a *prototypal function* which getRoundedMarks which uses the Array.map function and Math.round in order to round the marks of the athlete to the nearest integer. Your function should return an array with the rounded marks.
9. Write a class named Point2D which stores x and y coordinates.
10. Write a class named Rectangle which stores three variables: a Point2D to represent the top left of the Rectangle, a width and a height. **Use ES6 class syntax**.
11. Write an instance method named getArea which returns the area of the Rectangle.
12. Write a function named getTotalCoverage which receives an array of Rectangle objects, uses map to create an array with their areas, and then uses reduce to return the sum of their areas.
```javascript
function getTotalCoverage(rectArr){

}
```
