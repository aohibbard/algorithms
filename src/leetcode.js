/*
Find all numbers in an array that are duplicated twice
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
*/

var findDuplicates = function(nums) {
  let count = {}
  for(const num of nums){
      if (!count[num]){
          count[num] = 1
      } else {
          count[num]++
      }
  }
  let keys = Object.keys(count)
  return keys.filter(x => count[x] === 2)
};

// slightly shorter solution
var findDuplicates = function(nums) {
  let sol = [];
  nums.sort();
  for (let i = 0; i < nums.length; i++){
      if (nums[i] === nums[i + 1] && nums[i] !== nums[i + 2]){
          sol.push(nums[i]);
          i++;
      }
  }
  return sol;
}

/*
We distribute some number of candies, to a row of n = num_people people in the following way:

We then give 1 candy to the first person, 2 candies to the second person, and so on until we give n candies to the last person.

Then, we go back to the start of the row, giving n + 1 candies to the first person, n + 2 candies to the second person, and so on until we give 2 * n candies to the last person.

This process repeats (with us giving one more candy each time, and moving to the start of the row after we reach the end) until we run out of candies.  The last person will receive all of our remaining candies (not necessarily one more than the previous gift).

Return an array (of length num_people and sum candies) that represents the final distribution of candies.

inputs 60, 4 should return [15, 18, 15, 12]
inputs 10, 3 should return [5, 2, 3]
inputs 7, 4 should return [1, 2, 3, 1]

method is to create empty array based on number of people, fill it with zeroes
than create recursive function that is just a for loop that adds based on the availability of candies
the trick is to track the candy count at every turn of the loop
AND to track the last amount given at each recursion loop
*/


var distributeCandies = function(candies, num_people) {
  let array = new Array(num_people).fill(0)
  distribute(candies)
  function distribute(candyNum, firstAmt = 0){
      for(let i = 0; i < array.length; i++){
          let giveAmt = (firstAmt + 1)
          if (candyNum > giveAmt){
              array[i] = array[i] + giveAmt
          } else {
               array[i] = array[i] + candyNum
          }
          candyNum = candyNum - giveAmt;
          firstAmt = giveAmt;
          if (candyNum < 0) { break }
      }
      if (candyNum > 0) distribute(candyNum, firstAmt)
  }
  return array;
};



/*
19 August - Goat Latin
A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)

The rules of Goat Latin are as follows:

If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
For example, the word 'apple' becomes 'applema'.
 
If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
For example, the word "goat" becomes "oatgma".
 
Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
Return the final sentence representing the conversion from S to Goat Latin. 

*/

var toGoatLatin = function(S) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let sentence = S.split(' ')
  let str = ''
  for(let i=0; i< sentence.length; i++){
      let word = sentence[i]
      let counter = 0
      let aCount = 'maa'
      while(counter < i){
          aCount += 'a'
          counter++
      }
      if (vowels.includes(word[0])){
          str += word + aCount
      } else {
          let newWord = word.slice(1, word.length) + word[0] + aCount
          str += newWord
      }
      if ( i < sentence.length - 1){
          str += ' '
      }
  }
  return str
};

// PROBLEM 283 - MOVE ZEROES
// Runtime: 84 ms, faster than 59.63% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 38.1 MB, less than 55.00% of JavaScript online submissions for Move Zeroes.
// The trick is you need to decrement the counter when you add a Zero AND Also decrement the length of the array so you don't end up in an infinite loop tracking over zeros that have already been pushed

var moveZeroes = function(nums) {
  let arrLength = nums.length
  for (let i = 0; i < arrLength ; i++){  
      if(nums[i] === 0){
          nums.splice(i, 1);
          nums.push(0);
          i--;
          arrLength = arrLength - 1;
      }
  }
  return nums
};



// detect capital
// 'gggg' is true / 'FlaG' is false / 'USA' is correct / 'g' is correct
var detectCapitalUse = function(word) {
  // if (word.length === 1) return true;
  let upperCase = word.split('').filter(char => char === char.toUpperCase()).join('')
  return (upperCase === word || upperCase.length === 0 || upperCase === word.charAt(0))
};

// maybe works?
var isPowerOfFour = function(num) {
  if (num < 1 || num > Math.pow(2, 32)) return false;
  if ([1, 4, 16, 64, 256, 1024, 4096, 16384, 65536, 262144, 1048576].includes(num)){
      return true;
  } else {
      const sol = Math.pow(num, 1/4)
      return sol % sol === 1;
  };
};


// 258 add digits
// return when the sum of digits is only a one digit sum
var addDigits = function(num) {
  let sum = function(n){
      let s = 0;
      while(n>=10){
          s += parseInt(n%10);
          n = parseInt(n/10);
      }
      s+=n;
      return s;
  }
  
  let res = sum(num);
  while(res>=10){
      res = sum(res);
  }
  return res;
};


// 198 house robber
var rob = function(nums) {
  if(nums.length === 0){
      return nums
  }
  let even = 0;
  let odd = 0;
  for(let i =0; i < nums.length; i++){
      if(i%2===0){
          even = Math.max(even + nums[i], odd)
      } else {
          odd = Math.max(odd + nums[i], even)
      }
  }
  return Math.max(even, odd)
}

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

// perfect square
var isPerfectSquare = function(num) {
  if (num < 0) return false;
  const squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169]
  if (squares.includes(num)){
      return true
  } else {
      let i = 14;
      while (i * i <= num){
          if(i * i === num){
              return true
          }
          i++
      }
      return false
  }
};


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

  // alt solution using left & right counters, while loop
  // Runtime: 80 ms, faster than 73.46% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 39.1 MB, less than 5.07% of JavaScript online submissions for Move Zeroes.

  var moveZeroes = function(nums) {
    let left = right = 0;
    while (right < nums.length){
        if(nums[left] === 0){
            [nums[left], nums[right]] = [nums[right], nums[left]]
        }
        if (nums[left] !== 0){
            left++
        }
        right++
    }
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


  function IsPalindrome(int x) {
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

var removeDuplicates = function(nums){
    let counter = 0;
    for(let i = 0; i < nums.length; i++){
        debugger
        if(nums[i] !== nums[i + 1]){
            counter++
        } else {
            nums.splice(i, 1);
            i--
        }
    }
    return counter;
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