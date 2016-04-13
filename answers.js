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
