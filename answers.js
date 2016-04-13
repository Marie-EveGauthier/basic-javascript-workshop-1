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

// A function that takes a phrase as a string, and returns the longest word in that phrase.
function longestWord(str) {
    var eachWord = str.split(" ");
    var longest = 0;
    for (var i = 0; i < eachWord.length; i++) {
        if(eachWord[i].length > longest) {
            longest = eachWord[i];
        }
    }
    return longest;
}
console.log(longestWord("JavaScript est un langage merveilleux."));

//A function that takes a phrase, and returns the same phrase with every word capitalized
function eachWordCapitalized (str) {
    var allLowerCase = str.toLowerCase().split(" ");
    var firstCapitalized = allLowerCase.map(function(word) {
        return word.replace(word[0], word[0].toUpperCase());
    });    
    return firstCapitalized.join(" ");
}
                                            

console.log(eachWordCapitalized("JavaScript est un langage merveilleux."));

//A function that takes an array and returns the largest number of the array
function maxInArray (arr) {
    return Math.max.apply(Math, arr);
}
console.log(maxInArray([3, 4, 5, 6, 7]));

//A function that takes an array, and returns a filtered array with only truthy values
function truthyValues (arr) {
    var filteredArr = arr.filter(function(element){
        if(element){
            return element;
        }
    });
    return filteredArr;
}
console.log(truthyValues([0,1, false, "false"]));

//A function that takes an array of numbers, and returns the sum of all the numbers in the array.
function sumOfTheArray (arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}
console.log(sumOfTheArray([2,3,4,5]));

//A function that takes two arrays, and returns an array of all elements that are only in one array.
function unique (arr1, arr2) {
    var unique = arr1.filter(function(element) {
        if (arr2.indexOf(element) === -1)
        return element;
    });
    arr2.forEach(function(element){
        if (arr1.indexOf(element) === -1)
        return unique.push(element);
    });
    
    return unique;
}

console.log(unique([2,3,4,4], [3,4,5]));