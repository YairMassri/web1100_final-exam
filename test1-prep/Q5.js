// Question 5

// Add a new property to the students object called 'getNames' WITHOUT
// typing inside the students definition below.

// The value of the getNames property should be a function that creates an
// empty array called names, then pushes only the names from students.list to the
// names array, and then returns the names array, similar to how the getSkills
// method works.

// Lastly, log to the console the return value of the getNames method.

var students = {
    list: [
        {name: 'joe', skill: 'dancing'},
        {name: 'sasha', skill: 'jumping rope'},
        {name: 'floo-floo', skill: 'fixing cars'}
    ],
    getSkills: function() {
        var skills = [];

        students.list.forEach(function(student) {
            skills.push( student.skill );
        });

        return skills;
    }
};
