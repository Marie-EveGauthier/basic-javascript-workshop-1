// This is the beginning of my answers to the workshop

//A function that takes a string and returns the first character of the string. 
function firstCharacter(str) {
    return str.charAt(0);
}

console.log(firstCharacter("hello"));
console.log(firstCharacter(""));

//A function that takes a string and returns the last character of a string. 
function lastCharacter(str) {
    return str.charAt(str.length - 1);
}

console.log(lastCharacter("hello"));

//A function that takes a string and a number, and returns the character at the position represented by the number.
function numTellsTheIndex (str, num) {
    return str.charAt(num);
}

console.log(numTellsTheIndex("hello", 2));


//A function that takes two numbers and adds them together
function add (num1, num2) {
    return num1 + num2;
}

console.log(add(3, 4));
//If you pass a string or an array instead of a number to your function, they will be concatened
console.log(add("ab", "cd"));
console.log(add([2,3,4], 5));

//A function that takes two numbers and multiplies them together
function multiply (num1, num2) {
    return num1 * num2;
}

console.log(multiply(2, 3));
//If you pass something other than a number to your function, it will print NaN
console.log(multiply("ab", "cd"));