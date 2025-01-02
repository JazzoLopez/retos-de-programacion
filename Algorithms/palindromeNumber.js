/**
 * * -> Easy <- *
 * Given an integer x
 * return true if x is a 
 * palindrome, and false otherwise.
 * 
 * @param {number} x
 * @return {boolean}
 */ 

var isPalindrome = function(x) {
    const str = x.toString();
    const reverseString = str.split('').reverse().join('');
    return str === reverseString;
};
//test case
console.log(isPalindrome(121)); //true
console.log(isPalindrome(-121)); //false
console.log(isPalindrome(10)); //false