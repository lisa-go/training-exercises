// JavaScript Assignment

/* 1. Write a JavaScript function that reverse a number.
Example x = 32243;
Expected Output : 34223 */
function q1(value) {
    return value.toString().split('').reverse().join('');
}
console.log(1, q1(32243));


/* 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run. */
function q2(string) {
    let str = string.toLowerCase().replace(/\W/g, '');
    if (str === str.split('').reverse().join('')) return true;
    else return false;
}
console.log(2, q2('Nurses run'));


/* 3. Write a JavaScript function that generates all combinations of a string.
Example string : 'dog'
Expected Output : d,do,dog,o,og,g */
function q3(string) {
    let com = [];
    let combinations = [];
    let chars = string.toLowerCase().split('');
    for (let i = 0; i < chars.length; i++) {
        com.push(chars[i]);
        if (!combinations.includes(com.join(''))) {
            combinations.push(com.join(''));
        }

        let k = i + 1;
        while (k !== chars.length) {
            com.push(chars[k])
            if (!combinations.includes(com.join(''))) {
                combinations.push(com.join(''));
            }
            k++;
        }
        com.length = 0;
    }
    return combinations;
}
console.log(3, q3('dog'));


/* 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string. */
function q4(string) {
    return string.toLowerCase().replaceAll(' ', '').split('').sort().join('');
}
console.log(4, q4('web master'));


/* 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string
in upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox ' */
function q5(string) {
    let words = string.split(' ');
    let casedString = [];

    for (let i = 0; i < words.length; i++) {
        let letters = [];
        letters = words[i].split('');

        let cased = [];
        cased.push(letters[0].toUpperCase());

        for (let k = 1; k < letters.length; k++) {
            cased.push(letters[k]);
        }
        casedString.push(cased.join(''))
    }
    return casedString.join(' ');
}
console.log(5, q5('the quick brown fox'));


/* 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development' */
function q6(string) {
    let words = string.split(' ');

    words.sort(function (a, b) {
        return b.length - a.length;
    })

    return words[0];
}
console.log(6, q6('Web Development Tutorial'));


/* 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
Example string : 'The quick brown fox'
Expected Output : 5 */
function q7(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0;
    let str = string.toLowerCase().split('')

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) counter++;
    }
    return counter;
}
console.log(7, q7('The quick brown fox'));


/* 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and
itself. */
function q8(number) {
    if (number.toString().split('.').length >= 2) return 'Not a natural number';
    if (number === 1) return 'Number needs to be greater than 1';
    let factors = [];
    for (let i = number; i > 0; i--) {
        if (number % i === 0) {
            factors.push(i);
            if (factors.length > 2) return false;
        }
    }
    return true;
}
console.log(8, q8(11));


/* 9. Write a JavaScript function which accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined. */
function q9(arg) {
    return typeof arg
}
console.log(9, q9(q9))

/* 10. Write a JavaScript function which returns the n rows by n columns identity matrix. */
function q10(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            if (i === j) {
                row.push(1);
            }
            else row.push(0);
        }
        arr.push(row)
    }
    return arr;
}
console.log(10, q10(4))


/* 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second
greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 2,4 */
function q11(array) {
    array.sort();
    return array[1] + ',' + array[array.length - 2]
}
console.log(11, q11([4, 2, 5, 1, 3]));


/* 12. Write a JavaScript function which says whether a number is perfect.
According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper
positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum).
Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently,
the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1
+ 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128. */
function q12(number) {
    if (number < 0) return number + ' is not a perfect number!';
    let divisors = [];
    for (let i = number - 1; i > 0; i--) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }
    let sum = 0;
    for (let j = 0; j < divisors.length; j++) {
        sum = sum + divisors[j];
    }
    if (sum === number) return number + ' is a perfect number!';
    else return number + ' is not a perfect number!';
}
console.log(12, q12(28));


/* 13. Write a JavaScript function to compute the factors of a positive integer. */
function q13(number) {
    if (number < 0) return;
    let factors = [];
    for (let i = number; i > 0; i--) {
        if (number % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}
console.log(13, q13(28));


/* 14. Write a JavaScript function to convert an amount to coins.
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
Output : 25, 10, 10, 1 */
function q14(amount, array) {
    array.sort(function (a, b) {
        return b - a;
    })
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let coins = Math.floor(amount / array[i]);
        for (let j = 0; j < coins; j++) {
            result.push(array[i]);
            amount = amount - array[i];
        }
    }
    return result;
}
console.log(14, q14(46, [25, 10, 5, 2, 1]));


/* 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n
from the user and display the result. */
function q15(b, n) {
    return Math.pow(b, n);
}
console.log(15, q15(3, 4));


/* 16. Write a JavaScript function to extract unique characters from a string.
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg" */
function q16(string) {
    let result = [];
    for (let i = 0; i < string.length; i++) {
        if (!result.includes(string[i])) {
            result.push(string[i]);
        }
    }
    return result.join('');
}
console.log(16, q16("thequickbrownfoxjumpsoverthelazydog"));


/* 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. */
function q17(string) {
    let sorted = string.split('').sort();
    let result = [];

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === sorted[i - 1]) {
            result[result.length - 1].count += 1;
        }
        else {
            result.push({ letter: sorted[i], count: 1 })
        }
    }
    return result;
}
console.log(17, q17('banana'));


/* 18. Write a function for searching JavaScript arrays with a binary search.
Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value. */



/* 19. Write a JavaScript function that returns array elements larger than a number. */



/* 20. Write a JavaScript function that generates a string id (specified length) of random characters.
Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" */



/* 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
Sample array : [1, 2, 3] and subset length is 2
Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]] */



/* 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number
of occurrences of the specified letter within the string.
Sample arguments : 'microsoft.com', 'o'
Expected output : 3 */
function q22(string, letter) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === letter) counter++;
    }
    return counter;
}
console.log(22, q22('microsoft.com', 'o'));


/* 23. Write a JavaScript function to find the first not repeated character.
Sample arguments : 'abacddbec'
Expected output : 'e' */


/* 24. Write a JavaScript function to apply Bubble Sort algorithm.
Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that
works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if
they are in the wrong order".
Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1] */



/* 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as
output.
Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output : "United States of America" */



/* 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. */


/* 27. Write a JavaScript function that returns the longest palindrome in a given string.
Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor
problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For
example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed
to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three,
but there are two palindromic substrings with length three, namely, "aca" and "ada".
In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are
themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one
substring or returning the maximum length of a palindromic substring. */


/* 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. */


/* 29. Write a JavaScript function to get the function name */