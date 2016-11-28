Javascript WEB 2010  
====

Learning JavaScript is an essential part of being a Web Programmer.  It is the very first programming language you will learn as part of this course of study.  In this course you will learn the history and evolution of JavaScript, syntax, data types, variables, operators, literals, conditions and comparisons and arrays and loops.  Following this initial section students will learn objects, functions, events and the basics of cookies and debugging.  Additionally students will learn the browser object model, and JavaScript HTML document object model as well as synchronous JavaScript and XML, and JavaScript object notation.  Students will also gain an introductory understanding of frameworks and their applied uses.

###Summary
Day 1: JS road trip part 3  
Day 2: JS road trip part 3, continued. Recursion.  
Day 3: create an arcade game like http://www.swolebrain.com/arcade_game  
Day 4: Async programming, event loop, and implementing it with brief little project. Also ES6 basics (arrow functions, let and const, class syntax).  
Day 5: Refactor arcade game to use class syntax on a separate git branch, set up a portfolio page.  
Day 6: Intro to functional programming, continue portfolio page.  
Day 7: servers and sessions  
Day 8: intro to node, really simple server program  
Day 9: Introduce the wikipedia api project and herd them until they finish it on day 11.  
Day 12: Final

##Homework for the unit:
Depending on your skill level, you will do either the Basic Algorithm Scripting section of freecodecamp.com, the Intermediate Algorithm Scripting section, or at least 4 problems in the Advanced Algorithm Scripting section.

##Day 1
Javascript Road Trip part 3. In this lecture we will cover the various ways in which to declare functions and the nuanced differences between them. We will also discuss variable scope and closures. Finally, we get an understanding of javascript hoisting of functions and variable declarations.

##Day 2
JS Road Trip part 3 - final bits. In this lecture, we cover objects and prototypes. We also cover recursion after the break. Here is a [Slideshow](https://docs.google.com/presentation/d/1UYrhGqQdHogVWpzmpHy6C8ewe3EFrYYUuAZgwo_ct7Q/edit#slide=id.p) for recursion. We define recursion as a function which calls itself and solve recursive definitions of factorial, fibonacci, sum 1 to n, sum multiples of 3 or 5. We will showcase this explanation of recursion: http://everything2.com/index.pl?node_id=477013  

Advanced students can do the following solve the following:   https://www.codewars.com/kata/pascals-triangle  
by following the formula outlined here:  
https://www.hackerrank.com/challenges/pascals-triangle  
Then they will build a full pascal triangle by using a **recursive function** based on the previous solution, and apply it in this kata:  https://www.codewars.com/kata/pascals-triangle-number-2  

We also introduce the arcade game project on this day.

##Day 3:
Canvas game project. See the "Canvas Game" directory in this repo. Explanantion of [inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

##Day 4:
Asynchronicity of JavaScript. [Understanding Asynchronous JavaScript](https://www.youtube.com/watch?v=vMfg0xGjcOI).  
Also, [What the heck is the Event Loop Anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)  
We first fix our memory game so that it gives feedback by making some of the code async.  
Then we have students emulate a dice roll application like this one: http://www.bgfl.org/bgfl/custom/resources_ftp/client_ftp/ks1/maths/dice/index.htm  

Finally, we go into ES6 Javascript (CodeSchool) we cover levels 1, 2, 3, and 5. Then we refactor the canvas game with ES6 syntax.

##Day 5:
On this day, we will [introduce git branching](http://gitimmersion.com/lab_01.html) and the team workflow: branch-work-switch-pull-merge. As a project, students will refactor their arcade game in a new branch using ES6 class syntax and add any additional features they might like. Then, they will merge their ES6 branch into their master branch.

During the second half of class, students will create a portfolio website based on the [1-col-portfolio layout](http://blackrockdigital.github.io/startbootstrap-1-col-portfolio/) at startbootstrap.com and also using bootswatch to paste components.

##Day 6:  
[Intro to functional programming lecture](https://docs.google.com/presentation/d/1NTxza91hMToWKqRyKll48AuxwamEik_nj4W1Cj6d8hs/edit?usp=sharing)
After the functional programming presentation is over, We will talk about the concepts covered in [chapter 5 of eloquent javascript: Abstractions](https://docs.google.com/presentation/d/1JxBhgt37xZgazl9gXMCQB9acQu7B-qvLdeO_SZlvyu4/edit#slide=id.p). When we talk about foreach, replace the gatherCorrelations concept with a simple 2D array with "rows" and "cols" used as variable names within the traversal. We will also make emphasis on the f.apply syntax in the transparentwrapping function described in the book. We will also place special emphasis on "The Cost" section.

The assessment will be to solve the following problems:
- Write a function which receives an array and returns a new array with only the even elements present
- Write a function which receives a string and returns a new string with only the vowels. Provide students with an isVowel function and also the preliminary string split step required before applying filter.
- Write a function which uses reduce to find the maximum value in a list.
- Advanced students: http://reactivex.io/learnrx/


##Day 7:
The first half of the class is discussion about servers, and an implementation of a simple hello world server on node. The second half is a talk about sessions and scaling. We open the lecture with a discussion of web app server architecture by showing these videos:

See [day7Lecture.md](day7Lecture.md) for the full lesson plan.

##Day 8:
Assessment, based on test1.md.
Afterwards, we will do a cumulative programming and theory assessment.

##Day 9:
We discuss the Javascript [use strict](https://teamtreehouse.com/library/the-javascript-use-strict-statement-2) statement. We then move on to following along with the treehouse [Express Basics](https://teamtreehouse.com/library/install-expressjs) course.  

#Days 10-11:

We discuss the cross-origin limitation of AJAX and introduce the concept of JSONP (JSON with padding) as outlined in here http://stackoverflow.com/questions/3839966/can-anyone-explain-what-jsonp-is-in-layman-terms  

We introduce the wikipedia API and we start the Wikipedia visualizer project, which is meant as a final asssessment.  

Students should understand that for the wiki visualizer, they can build their api requests through a gui tool wikipedia has. It's called the wikipedia api sandbox (https://en.wikipedia.org/wiki/Special:ApiSandbox) You also need to make sure that they remember to put callback=? As part of the query string, and when they build the api request, they need to use the generator called search, and up top they need to have the property set to extracts so they can get extracts of the page. Finally, extracts to multiple hits only work if you have the exintro property checked.  

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

Final Exam.
