#Web2010 Final Exam Alternative

##Instructions for submission
You must create Javascript files containing only legal code and code comments. I should be able to include your files in an html file and have them work.

Create a github repository with the name WEB2010 and push your two files there. You will need to submit two files:

1. A file containing your actual answers. This file should be called **main-answers.js**
2. A file containing your transpiled answers. This file should be called **app.js**

##Questions

1. Imagine you are writing a "to do" list application. Create a class named task which has the following features: owner of the task, task description, a variable which represents whether the task is completed or not, and created date (set at runtime based on when the Task object is created). Make sure your constructor is such that it can receive two values only (and use default parameters for the other two). **Use ES6 class Syntax**

2. Add a method to your Task class which toggles the state of the "completed" variable. If the Task is already completed, this method should set the value of "completed" to false, and vice versa. **Use ES6 class Syntax, include only the finished version of the Task class in your submission**

3. Imagine you are writing a Gradebook program. Create a class named Student which encapsulates the following data: student first name, student last name student ID. You may use pseudoclassical or ES6 syntax.

4. Still within the context of the Gradebook program, create a class named Assignment which encapsulates the following data: a student ID, a url link to the assignment submission, an assignment type (homework, classwork, etc), and a grade. You may use pseudoclassical or ES6 syntax.

5. Once again, within the context of the gradebook program, create a class named Gradebook which encapsulates the following data: A course code, a course ID, an instructor name, and an array of Assignment objects. The array should be initialized to be empty.  **Use ES6 class Syntax, include only the finished version of the Gradebook class in your submission**

6. Add an instance method to your Gradebook class which is called addAssignment and receives an assignment parameter, then adds it to the Gradebook's internal array which stores Assignments.

7. Add an instance method to your Gradebook class which is called getAverage. This method should use reduce to get the average score for the Assignments in the Array. Assume equal weight for all assignments.

8. What is node.js?

9. What is an example of the usage of an http session? In other words, what are http sessions for?

10. Opportunity for bonus points: mention and explain 2 things which you learned in this course. You may explain by narrative or with an example. Some examples may be: arrow functions, filter, map, reduce, the difference betweem const, let and var, rest parameters, spread operator, modules, etc.

11. Optional: Transpile your answers into the app.js file using browserify
