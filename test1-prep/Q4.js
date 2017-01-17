// Question 4

// Call console.log and pass to it the return value of the
// students.getSkills function.

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
