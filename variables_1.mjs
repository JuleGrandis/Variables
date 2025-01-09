/*
    NB! There is absolutely no point to these tasks if you use AI or "google" to solve them.
    The point is to learn and practice, not to get the perfect answer.
*/

/* Task 1
    Declare two variables, set the value of the first variable to 1 and the value of the second to 2.
    Now swap so the first variable gets the value of the second and vice versa.
*/
addSpacing(1);
console.log("Task 1");

let var1 = 1;
let var2 = 2;

let temp = var1;
var1 = var2;
var2 = temp;

console.log(var1);
console.log(var2);

/* Task 2
    Without using built-in Math functionality or constants in JavaScript.
    Calculate the area of a circle with the radius 6.
*/
addSpacing(1);
console.log("Task 2");

let radius = 6;
let pi = 3.14;

let area = pi * radius * radius;

console.log(area);

/* Task 3
    Given the two strings "If at first you do not succeed, try, try again" and "Fall seven times, stand up eight".
    Create a variable that contains all the letters that are in both strings but only once and in alphabetical order.
    Consider 'A' and 'a' the same letter.
*/
addSpacing(1);
console.log("Task 3");

let string1 = "If at first you do not succeed, try, try again";
let string2 = "Fall seven times, stand up eight";

let cleanString1 = string1.toLocaleLowerCase().replace(/[^a-z]/g, '');
let cleanString2 = string2.toLocaleLowerCase().replace(/[^a-z]/g, '');

let set1 = new Set(cleanString1);
let set2 = new Set(cleanString2);

let result = "This is as far as I got";

console.log(result);

/* Task 4
    Declare three variables. The first two should have the values 6 and 2.
    Make it so that the third variable is 10.
*/
addSpacing(1);
console.log("Task 4");

let value1 = 6;
let value2 = 2;

let value3 = (value1 * value2) - 2;

console.log(value3);

/* Task 5
    Given a variable set to a random floating point value (you pick the value).
    Instantiate a second variable that is true if the first variable is greater than 22.34.
*/
addSpacing(1);
console.log("Task 5");

let randomValue = 23.43;
let isGreaterThan = randomValue > 22.34;

console.log(randomValue);
console.log(isGreaterThan);

/* Task 6
    Given the string "Life is short. Smile while you still have teeth." and the string "The best therapy is a good laugh and great friends.".
    Create a new variable that is the intersection of words between the two strings.
    Create a new variable that is the union of words between the two strings.
*/


//#region Util Function
function addSpacing(lines = 1) {
    for (let i = 0; i < lines; i++){
        console.log("")
    }
}
//#endregion