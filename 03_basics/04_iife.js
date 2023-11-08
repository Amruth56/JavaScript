// Immediately Invoked Function Expression 

//By wrapping the function in parentheses, it creates a new scope, preventing pollution of the global scope.
(function greetings()
{
    console.log("hello everyone")
})() ;//The function logs “hello everyone” to the console when invoked.

// When you wrap a function in parentheses, it creates a new scope, known as a function scope. This function scope is not accessible from the global scope, which means any variables or functions defined within it won’t be accessible globally.


// arrow function 
(() => {
    console.log(`DB connected`);
})();

( (name) => {
    console.log(`hello ${name}, how are you`)
})("Amruth")
