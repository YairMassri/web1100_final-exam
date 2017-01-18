// Question 2

// Create a function called adventureSelector that takes 1 argument/parameter.
// adventureSelector should return 1 of 2 different anonymous function, based on the
// number that is passed into it.
//
// Each of the two anonymous functions should console.log the following messages:
//
// If the number is 1:
//
//    You selected Harry Potter World!
//
// If the number is 2:
//
//    You're staying home with Mom. Mom can be fun, can't she?
//
// Lastly, test your adventureSelector function by immediately invoking the
// function it returns when you pass it the number 1.

function adventureSelector(num) {
    if(num === 1) {
        return function() {
            console.log('You selected Harry Potter World!');
        };
    } else if(num === 2) {
        return function() {
            console.log('You\'re staying home with Mom. Mom can be fun, can\'t she?');
        };
    }
}
