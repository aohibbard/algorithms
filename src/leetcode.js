// valid parenthesis
var isValid = function(s) {
  const stack = [];

  const open = {
      '{': '}',
      '[': ']',
      '(': ')'
  };

  const closed = {
      '}': true,
      ']': true,
      ')': true
  }
  
  for (let char of s){
      if (open[char]){
          stack.push(char)
      } else if (closed[char]) {
          if(open[stack.pop()] !== char){
              return false 
          }
      }
  }
  return stack.length === 0;
};
// bad run time


var isPalindrome = function(s) {
    let arr = s.replace(/\W/g, '').toLowerCase().split('')
    // let backward = forward.reverse()
    // could also reverse the array and do a comparison
    let limit = arr.length
    for(let i=0; i < arr.length ; i++){
        if(arr[i] !== arr[limit - 1 - i]){
            return false
        }
    }
    return true
};

var longestCommonPrefix = function(strs) {
    const len = strs.length;
    if (len === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < len; i++) {
      while (strs[i].indexOf(prefix) !== 0) {
        prefix = prefix.substring(0, prefix.length - 1);
        if (prefix === "") return "";
      }
    }
    return prefix;
  };


// CHECK IF NUMBER IS PALINDROME
var isPalindrome = function(x) {
    let num = x.toString().split('')
    if (num.length === 1){
      return true
    } else {
    for (let i = 0; i < Math.floor(num.length / 2); i++){
      let x = num.length - i - 1
      if (num[i] === num[x]){
        continue;
      } else {
        return false
      }
    }
    return true;
  }
};

public class Solution {
  public bool IsPalindrome(int x) {
      // Special cases:
      // As discussed above, when x < 0, x is not a palindrome.
      // Also if the last digit of the number is 0, in order to be a palindrome,
      // the first digit of the number also needs to be 0.
      // Only 0 satisfy this property.
      if(x < 0 || (x % 10 == 0 && x != 0)) {
          return false;
      }

      int revertedNumber = 0;
      while(x > revertedNumber) {
          revertedNumber = revertedNumber * 10 + x % 10;
          x /= 10;
      }

      // When the length is an odd number, we can get rid of the middle digit by revertedNumber/10
      // For example when the input is 12321, at the end of the while loop we get x = 12, revertedNumber = 123,
      // since the middle digit doesn't matter in palidrome(it will always equal to itself), we can simply get rid of it.
      return x == revertedNumber || x == revertedNumber/10;
  }
}


var lengthOfLastWord = function(s) {
  if (!s.includes(' ')) return s.length
  let newArr = s.split(' ')
  // needs to be GREATER THAN OR EQUAL TO to account for 0 index in increment
  for(let i = newArr.length - 1; i >= 0; i--){
      debugger
      if(newArr[i] !== ""){
          return newArr[i].length
      }
  }
  return 0;
};



var myAtoi = function(str) {
  let arr = str.split('')
  let newArr = []
  let firstChar = arr.indexOf(arr.find(char => char !== ' '))
  let checker = ['-', '+', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  if (!checker.includes(arr[firstChar])){
    return 0
  } else {
    newArr.push(arr[firstChar])
    for (let i = firstChar + 1; i < arr.length; i++){
      if(arr[i] !== ' ' && nums.includes(arr[i])){
        newArr.push(arr[i])
      } else {
        break;
      }
    }
    if (newArr.join('') === '-' || newArr.join('') === '+' || newArr.slice(0,2).join('') === '+-' || newArr.slice(0,2).join('') === '-+'){
      return 0;
    } else {
    let x = parseInt(newArr.join(''))
    if (x > 2**31 - 1 && x > 0){
      return (2**31) - 1 
    } else if (x < (-2)**31 && x <0){
      return (-2)**31
    } else {
      return x
    }
  }
}
};



var twoSum = function(nums, target) {
  let arr = [];
  for (let i = 0; i < nums.length ; i++){
      for (let j = i + 1; j < nums.length ; j++){
          if(nums[i] + nums[j] === target){
              arr.push(i);
              arr.push(j);
              break;
          }
      }
  }
  return arr;
};