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

//A function that takes two numbers and a string.  The string tells which mathematical operation to execute on the two numbers
function stringIsTheOperation (num1, num2, str) {
    switch (str) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "mult":
            return num1 * num2;
        case "div":
            return num1 / num2;
        default:
            return 0;
    }
}

console.log(stringIsTheOperation(3, 4, "add"));
console.log(stringIsTheOperation(3, 4, "subtract"));
console.log(stringIsTheOperation(3, 4, "mult"));
console.log(stringIsTheOperation(3, 4, "div"));
console.log(stringIsTheOperation(3, 4, "addition"));

//A function that takes a string and a number, and returns the string repeated that many number of times
function stringRepeated (str, num) {
    var result = ""
    while (num > 0) {
        result += str
        num --
    }
    return result;
}

console.log(stringRepeated("hello", 5));
console.log(stringRepeated("", 5));
console.log(stringRepeated("hello", 0));

//A function that takes a string, and returns the reverse of that string
function stringReversed (str) {
    return str.split("").reverse().join("");
}

console.log(stringReversed("hello"));
console.log(stringReversed(""));
console.log(stringReversed("MaRie"));

//A function that takes a number and returns the factorial of a number. In case of negative numbers, it doesn't work... it returns the number
function factorial (num) {
    if(num === 0 || num === 1){
        return 1;
    }
    else {
        for (var i = num - 1; i > 0; i--){
            num *= i;
        }
        return num;
    }
}

console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(-10));



