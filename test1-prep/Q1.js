// Question 1

// Write one line of code that calls foo, that passes 'Ouch' as an
// argument/parameter, and then immediately invokes the function that gets returned.

function foo(string) {
    if (string === 'Ouch') {
        return function() {
            console.log("Charlie bit my finger!");
        };
    } else {
        return function() {
            console.log("Charlie, you're a bad boy.");
        };
    }
}
