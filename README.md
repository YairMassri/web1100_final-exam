Javascript WEB 2010  
====

Learning JavaScript is an essential part of being a Web Programmer.  It is the very first programming language you will learn as part of this course of study.  In this course you will learn the history and evolution of JavaScript, syntax, data types, variables, operators, literals, conditions and comparisons and arrays and loops.  Following this initial section students will learn objects, functions, events and the basics of cookies and debugging.  Additionally students will learn the browser object model, and JavaScript HTML document object model as well as synchronous JavaScript and XML, and JavaScript object notation.  Students will also gain an introductory understanding of frameworks and their applied uses.

##Homework:
Complete one of the following on freeCodeCamp.com:
* All of the problems in the Basic Algorithm Scripting section
* All of the problems in the Intermediate Algorithm Scripting section
* 4 of the problems in the Advanced Algorithm Scripting section

##Day 1
Guide students through completing the Javascript Road Trip part 3 exercises. These exericses will cover the various ways in which to declare functions and the nuanced differences between them. We will also discuss variable scope and closures. Finally, we get an understanding of javascript hoisting of functions and variable declarations.

##Day 2
JS Road Trip part 3 - continued. These exercises will cover objects and prototypes. After completing the JS Road Trip part 3 exercises, teach students about [Recursion](https://docs.google.com/presentation/d/1UYrhGqQdHogVWpzmpHy6C8ewe3EFrYYUuAZgwo_ct7Q/edit#slide=id.p). We define recursion as a function which calls itself and solve recursive definitions of factorial, fibonacci, sum 1 to n, sum multiples of 3 or 5. We will showcase this explanation of recursion: http://everything2.com/index.pl?node_id=477013

Advanced students can solve the following: https://www.codewars.com/kata/pascals-triangle  
by following the formula outlined here:  
https://www.hackerrank.com/challenges/pascals-triangle  
Then, they will build a full pascal triangle by using a **recursive function** based on the previous solution, and apply it in this kata:  https://www.codewars.com/kata/pascals-triangle-number-2

If there is time left, we introduce the [dice-roll-game](./complete-classwork/dice-roll-game-complete).

##Day 3:
Guide the students through creating the [dice-roll-game](./classwork/dice-roll-game-starter). Students will practice using jQuery to create user interaction. Students will also practice using prototypal inheritance by creating methods for the players in the dice-roll-game. Lastly, students will practice using asynchronous JavaScript by using the setTimeout API in the dice-roll-game.

##Day 4:
Start with the [quiz-questions](./classwork/dice-roll-game-starter/quiz-questions.md) for the dice-roll-game for review.
Then discuss [Asynchronous JavaScript](https://www.youtube.com/watch?v=vMfg0xGjcOI) and explain how we have used it in previous apps that use $.ajax and in our dice-roll-game, which uses setTimeout.
Also, [What the heck is the Event Loop Anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ).
Then complete the dice-roll-game.

##Day 5:
We start off by reviewing the asynchronous lessons from the prior day. Then we begin guiding students through levels 1, 2, 3, and 5 of the ES6 track on codeschool.com.
Then, we will [introduce git branching](http://gitimmersion.com/lab_01.html) and the team workflow: branch-work-switch-pull-merge.
As a project, students will refactor their dice-roll-game in a new branch using ES6 class syntax and add any additional features they might like. Then, they will merge their ES6 branch into their master branch.

##Day 6:
Begin class with some exercises to prepare them for test 1, and then take [Test1](./test1).

##Day 7:
The first half of the class is discussion about servers, and an implementation of a simple hello world server using Express. The second half is a talk about sessions and scaling.

See [day7Lecture.md](day7Lecture.md) for the full lesson plan.

##Day 8:
Give a lecture on the [Introduction to Functional Programming](https://docs.google.com/presentation/d/1NTxza91hMToWKqRyKll48AuxwamEik_nj4W1Cj6d8hs/edit?usp=sharing).
After the functional programming presentation is over, we will talk about the concepts covered in [chapter 5 of eloquent javascript: Abstractions](https://docs.google.com/presentation/d/1JxBhgt37xZgazl9gXMCQB9acQu7B-qvLdeO_SZlvyu4/edit#slide=id.p).

Guide students through the following problems:
- Write a function which receives an array and returns a new array with only the even elements present
- Write a function which receives a string and returns a new string with only the vowels.
- Write a function which uses reduce to find the maximum value in a list.
- Advanced students: http://reactivex.io/learnrx/

##Day 9:
Students will create a portfolio website based on any of the [portfolio bootstrap themes](https://startbootstrap.com/template-categories/portfolios/), while using the [Bootstrap Documentation](http://getbootstrap.com/components/) to edit their pages. This is to teach them how to use BootStrap and to ensure they don't forget the skills they learned in WEB1010.

#Days 10-11:
We discuss the cross-origin limitation of AJAX and introduce the concept of JSONP (JSON with padding) as outlined in here http://stackoverflow.com/questions/3839966/can-anyone-explain-what-jsonp-is-in-layman-terms  

Then we begin creating a Wikipedia visualizer using the Wikpedia API. Students should understand that for the wiki visualizer, they can build their api requests through a gui tool wikipedia has. It's called the wikipedia api sandbox (https://en.wikipedia.org/wiki/Special:ApiSandbox) You also need to make sure that they remember to put callback=? As part of the query string, and when they build the api request, they need to use the generator called search, and up top they need to have the property set to extracts so they can get extracts of the page. Finally, extracts to multiple hits only work if you have the exintro property checked.

```javascript
$.getJSON(
"http://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&generator=search&gsrsearch=julio&callback=?",
function(resp){
	for (var x in resp.query.pages){
		console.log(resp.query.pages[x].extract);
	}
}
);
```

#Day 12
[Final Exam](./final-exam).
