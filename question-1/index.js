// //Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.
// Explain & TIP: The let keyword provides block scope in JavaScript, which means variables declared with let inside a loop are only accessible within that loop. This helps avoid unintended interference with other parts of your code.
//solution.
function understanding_let() {
    for (var i = 1; i <= 5; i++)
        console.log(i); //The let keyword provides block scope in JavaScript, which means variables declared with let inside a loop are only accessible within that loop so we console here inside a function.
}
understanding_let();
//Author-HUMA MOHSIN
