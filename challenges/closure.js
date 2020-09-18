// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

// Explanation: nestedFunction has closure from myFunction and can access the variable internal because the variable internal belongs to myFunction. When you console.log internal from nestedFunction being invoked, it looks first inside itself to see if it has that variable, and then outwards to myFunction to see if the variable internal is there to be able to execute the code.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(number) {
  return (number * (number + 1)) / 2;
}
console.log(summation(4));
