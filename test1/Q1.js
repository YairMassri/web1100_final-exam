// Question 1

// Write one line of code that calls foo, passes it 'bird' as an
// argument/parameter, and then immediately invokes the function that gets returned.

function foo(string) {
    if (string === 'bird') {
        return function() {
            console.log("Bird is the word!");
        };
    } else {
        return function() {
            console.log("The word is not bird.");
        };
    }
}
