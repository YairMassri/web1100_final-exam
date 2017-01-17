1. Push an array containing 'John' and 35 as its only two values to the end of the people array, using JavaScript's push method.
    ```javascript
    var people = [ ['jose', 28], ['francis', 20], ['henrietta', 25] ];
    ```

2. Print the word 'potato' to the console by acessing the food array using bracket notation.
    ```javascript
    var food = [ ['banana', 'lemon', 'strawberry'], ['almond', 'pecan', 'pistachio'], ['carrot', 'potato', 'beet'] ];
    ```

3. Use the following three variables to print a string to the console that makes sense.
    ```javascript
    var a = " and I create web applications.";
    var job = "Web Developer";
    var b = "Hello, I am a ";
    ```

4. Using escape sequences, such as \n, \t, and \', assign the following 3 lines of code to the variable myStr, in one statement.
    ```javascript
    FirstLine
    'SecondLine'
        ThirdLine
    ```

5. What is the value of the result variable in the following code?
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

6. What is printed as a result of the following code?
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

7. What is the value of the variable *result* after the following code block?

  ```javascript
  var d_Wade = {name: "Dwayne Wade", number: 23, position: "Shooting Guard",  
  talents: {scoring: 9.1, blocking: 6, rebounding: 6, steals: 9, clutch: 9}  };

  var prop1 = "talents";
  var prop2 = "blocking";
  var result = d_Wade[prop1][prop2];
  ```

8. What is the value of the variable *result* after the following code block?
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

9. What is the value of the variable *result* after the following code block?
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
10. Create a new type of Object called *Athlete* with the following properties: name, age, sex, height, weight, and the last five marks reached in competitions (as an array named marks). **Use pseudoclassical notation.**
11. Make a *prototypal function* on the Athlete prototype named getMarksAverage which computes the average of the marks of the athlete.
12. Write a *prototypal function* on the Athlete prototype called getRoundedMarks which uses the Array.map function and Math.round in order to round the marks of the athlete to the nearest integer. Your function should return an array with the rounded marks.
13. Write a class named Point2D which stores x and y coordinates.
14. Write a class named Rectangle which stores three variables: a Point2D to represent the top left of the Rectangle, a width and a height. **Use ES6 class syntax**.
15. Write an instance method inside the ES6 class named getArea which returns the area of the Rectangle.
16. Write a function named getTotalCoverage which receives an array of Rectangle objects, uses map to create an array with their areas, and then uses reduce to return the sum of their areas.
  ```javascript
  const getTotalCoverage = (rectArr) => {

  };
  ```
