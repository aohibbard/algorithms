//122 buy & sell stock 2
var maxProfit = function(prices) {
    let maxProfit = 0;
    for(let i = 0; i < prices.length; i++){
        //count the progressive climb of the stock
        if (prices[i] < prices[i + 1]){
            maxProfit += prices[i + 1] - prices[i]
        }
    }
    return maxProfit
};

//29 valid parentheses
var isValid = function(s) {
  const obj = {
      ')': '(',
      '}': '{',
      ']': '['
  };
  
  let stack = [];
  
  for(let i = 0; i < s.length; i++){
      if (obj[s[i]]){
          if (stack.pop() !== obj[s[i]]){
              return false
          }
      } else {
          stack.push(s[i]);
      }
  }
  return stack.length > 0 ? false : true;
};

// 1550 three consecutive odd

/*
class Solution:
    def threeConsecutiveOdds(self, arr: List[int]) -> bool:
        counter = 0
        for i in range(len(arr)):
            if arr[i] % 2 != 0:
                counter += 1
            else:
                counter = 0
            if counter == 3:
                return True 
        return False 
  */


// 225 implement stack
var MyStack = function() {
  this.stack = []
};

/**
* Push element x onto stack. 
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function(x) {
  return this.stack.push(x)
};

/**
* Removes the element on top of the stack and returns that element.
* @return {number}
*/
MyStack.prototype.pop = function() {
  return this.stack.pop()
};
/*
in Python
class MyStack:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.stack = []
        

    def push(self, x: int) -> None:
        """
        Push element x onto stack.
        """
        self.stack.append(x)
        

    def pop(self) -> int:
        """
        Removes the element on top of the stack and returns that element.
        """
        n = self.stack.pop()
        return n

    def top(self) -> int:
        """
        Get the top element.
        """
        return self.stack[-1]
        

    def empty(self) -> bool:
        """
        Returns whether the stack is empty.
        """
        return len(self.stack) == 0

  QUEUE
  class MyQueue:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.data = []

    def push(self, x: int) -> None:
        """
        Push element x to the back of queue.
        """
        self.data.insert(0, x)
        

    def pop(self) -> int:
        """
        Removes the element from in front of queue and returns that element.
        """
        return self.data.pop()

    def peek(self) -> int:
        """
        Get the front element.
        """
        return self.data[-1]
        

    def empty(self) -> bool:
        """
        Returns whether the queue is empty.
        """
        return len(self.data) == 0


# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()
*/

/**
* Get the top element.
* @return {number}
*/
MyStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

//  1491 average salary exclusindg min and max
var average = function(salary) {
  
  let min = salary[0]
  let max = salary[0]
  let sum = 0
  for(const num of salary){
      min = Math.min(num, min)
      max = Math.max(num, max)
      sum += num
  }
  return (sum - min - max) / (salary.length - 2)
};

// alt
var average = function(salary) {
  let min = Math.min(...salary)
  let max = Math.max(...salary)
  return salary.reduce((a,c)=> c !== min && c !== max ? a + c : a,0)/(salary.length - 2)  
};

/*
In Python
class Solution:
    def average(self, salary: List[int]) -> float:
        min_val = salary[0]
        max_val = salary[0]
        total = 0
        for val in salary:
            min_val = min(min_val, val)
            max_val = max(max_val, val)
            total += val
        return (total - min_val - max_val) / (len(salary) - 2)
  
slower because of sort but works
class Solution:
    def average(self, salary: List[int]) -> float:
        salary = sorted(salary)
        // salary from index 1 to penultimate
        salary = salary[1:-1]
        sum = 0
        for val in salary:
            sum += val
        return sum / len(salary)

*/

// 189 max balloons
var maxNumberOfBalloons = function(text) {
  let count = 0;
  const map = {}
  for(const letter of text){
      map[letter] = map[letter] + 1 || 1
  }
  while(true){
      if(map.b && map.a && map.l >= 2 && map.o >= 2 && map.n){
          count++
          map.b--
          map.a--
          map.l -= 2
          map.o -= 2
          map.n -= 1
      } else {
          return count
      }
  }
};

// 1619 mean of array
var trimMean = function(arr) {
  const fivePercent = 0.05 * arr.length
  let newArr = arr.sort((a, b) => a - b).slice(fivePercent, arr.length - fivePercent)
  return newArr.reduce((a, b) => a + b) / newArr.length
};

/* in Python

class Solution:
    def trimMean(self, arr: List[int]) -> float:
        arr.sort()
        // must conver percentage into integer so it can be used as array
        fiveP = int(len(arr) * .05)
        // arr manipulation is a slice from ahead fiveP to going back to fiveP
        // multiple 2 * fiveP because this accounts for slice the total 10 percent off the length
        return sum(arr[fiveP:-fiveP]) / (len(arr) - (2 * fiveP))
*/

// 1207 unique occurences
var uniqueOccurrences = function(arr) {
  let counter = {}
  for(let i = 0; i < arr.length; i++){
      counter[arr[i]] = counter[arr[i]] + 1 || 1
  }
  const vals = Object.keys(counter).map(key => counter[key])
  return vals.length === new Set([...vals]).size
  
};
/* in python
// class Solution:
def uniqueOccurrences(self, arr: List[int]) -> bool:
d = {}
for i in arr:
    if i not in d:
        d[i] = 1
    else:
        d[i] += 1
return len(set(list(d.values()))) == len(list(d.values()))
*/

// 47 permutations 2
var permuteUnique = function(nums) {
  let sol = []
  let count = new Map();
  
  for (let n of nums){
      count.set(n, count.get(n)+1 || 1)
  }
  
  function backtrack(nums, arr){
      if(arr.length == nums.length){
          sol.push([...arr])
          return
      }
      for(let [key, val] of count){
          if(val == 0) continue;
          arr.push(key)
          count.set(key, --val)
          backtrack(nums, arr)
          arr.pop()
          count.set(key, ++val)
      }
  }
  backtrack(nums, [])
  return sol
};

// 1299 replace elements
var replaceElements = function(arr) {
  for(let i = 0; i < arr.length - 1; i++){
      let max = Math.max(...arr.slice(i + 1, arr.length))
      arr[i] = max
  }
  arr[arr.length - 1] = -1
  return arr
};


// 1460
var canBeEqual = function(target, arr) {
  for(let i = 0; i < arr.length; i++){
      if (target.includes(arr[i])){
          let idx = target.indexOf(arr[i])
          target.splice(idx, 1)
      } else {
          return false
      }
  }
  return true
};


/* simply python
class Solution:
    def canBeEqual(self, target: List[int], arr: List[int]) -> bool:
        return sorted(target) == sorted(arr)
*/


// 1374 return str
// var generateTheString = function(n) {
//     let str = []
//     while(str.length < n){
//         str.push('a')
//     }
//     if (n % 2 === 0){
//         str.pop()
//         str.push('b')
//     }
//     return str.join('')
// };

var generateTheString = function(n) {
  return (n%2 == 0)? 'a'.repeat(n-1)+'b' : 'a'.repeat(n)
}
// in python fast sol
// class Solution:
//     def generateTheString(self, n: int) -> str:
//         str = ''
//         if n % 2 == 0:
//             str = 'a' * (n - 1)
//             str += 'b'
//         else:
//             str = 'a' * n
//         return str


// 832 flipping an image
var flipAndInvertImage = function(A) {
  let sol = []
  for(let i=0; i < A.length; i++){
      let newArr = []
      for(let j=A.length - 1; j >= 0; j--){
          if (A[i][j] === 1){
              newArr.push(0)
          } else {
              newArr.push(1)
          }
      }
      sol.push(newArr)
  }
  return sol
};

/* PYTHON
 class Solution:
def flipAndInvertImage(self, A: List[List[int]]) -> List[List[int]]:
return [[0 if i else 1 for i in row[::-1]] for row in A]

// faster because it modifies in place. 
[::-1] iterates from back of row 
leet code does not allow negative indicies beyond -1, but this allows a work around
class Solution:
    def flipAndInvertImage(self, A: List[List[int]]) -> List[List[int]]:
        
        sol= []
        
        for i in range(len(A)):
            reverse_row = A[i][::-1]
            for j in range(len(reverse_row)):
                if reverse_row[j] == 0:
                    reverse_row[j] = 1
                else:
                    reverse_row[j] = 0
            sol.append(reverse_row)
        return sol

*/


// 1436 destination city
// not good
var destCity = function(paths, currentRte = 0) {
  let startCity = paths.map(subArr => subArr[0])
  let ans = paths.filter(subArr => !startCity.includes(subArr[1])).flat()
  return ans[1]
}

// 849 max distance between 2 people
// 80 ms & 39.5 mb
// beats 73% in runtime, 60% in memory
var maxDistToClosest = function(seats) {
  if (!seats.length) return;
  let count = 0;
  let maxDist = 0;
  for (let i = 0; i < seats.length; i++){
      if (seats[i] === 1){
          maxDist = Math.max(maxDist, count)
          count = 0
      } else {
          count++
      }
  }
  return Math.max(Math.ceil(maxDist / 2), seats.indexOf(1), seats.length - 1 - seats.lastIndexOf(1));
}

// 228, summary ranges
// 68 ms beats 95.19% 
// memory usage 38.8 mb
var summaryRanges = function(nums) {
  if (!nums.length) return nums;
  let sol = [];
  for (let i = 0; i < nums.length; i++){
      let start = nums[i]
      let end = nums[i]
      while(nums[i] + 1 === nums[i + 1]){
          end = nums[i + 1]
          i++
      }
      if (start === end){
          start = start.toString()
          sol.push(start)
      } else {
          let ans = start + '->' + end
          sol.push(ans)
      }
  }
  return sol;
};

// 1237 find sol
var findSolution = function(customfunction, z) {
  let sol = []
  for(let i = 1; i <= z; i++){
      for(let j = 1; j <= z; j++){
          if (customfunction.f(i,j) === z) sol.push([i, j])
      }
  }
  return sol
};

/* inPython
class Solution(object):
    def findSolution(self, customfunction, z):
        """
        :type num: int
        :type z: int
        :rtype: List[List[int]]
        """
        ans = []
        Y = z + 1
        for x in range(1, z+1):
            if customfunction.f(x,1) > z: return ans
            for y in range(Y, 0, -1):
                if customfunction.f(x, y) == z:
                    Y, _ = y-1, ans.append([x, y])
                    break
        return ans
*/

// 799 champagne tower
var champagneTower = function(poured, query_row, query_glass) {
  let cups = [poured];
  for(let i=0; i<query_row; i++){
      let nextRow = new Array(cups.length+1).fill(0);
      for(let j=0; j<cups.length; j++){
          let extraOverFlow = Math.max(0,cups[j]-1);
          nextRow[j] += extraOverFlow/2;
          nextRow[j+1] += extraOverFlow/2;
      }
      cups = nextRow;
  }
  return Math.min(1,cups[query_glass]);
};

// 456 132 pattern
var find132pattern = function(nums) {
  let stack = []
  let s3 = -Infinity
  for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] < s3) return true
      while (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
          s3 = stack.pop()
      }
      stack.push(nums[i])
  }
  return false
};

// 414 third max
// var thirdMax = function(nums) {
//     nums = [...new Set(nums)]
//     if (nums.length < 3) return Math.max(...nums)
//     let ans = []
//     let counter = 0
//     while(nums.length || counter < 3){
//         counter++
//         ans.push(Math.max(...nums))
//         let idx = nums.indexOf(ans[ans.length - 1])
//         nums.splice(idx, 1)
//     }
//     return ans[2]
// };

var thirdMax = function(nums) {
	nums = nums.sort((a,b)=>a-b);
	var distinctArray = [...new Set(nums)];
    if (distinctArray[distinctArray.length-3] == undefined) {
        return distinctArray[distinctArray.length-1];
    } 
    else {
        return distinctArray[distinctArray.length-3]; 
    }
};


// 1122
// 72ms beats 92.75% of JS
// 38.7 MB beats 5.5%
var relativeSortArray = function(arr1, arr2) {
  for(let i = 0; i < arr2.length; i++){
      let timesAdded = 0
      while(arr1.includes(arr2[i])){
          timesAdded++
          let idx = arr1.indexOf(arr2[i])
          arr1.splice(idx, 1)
          if(timesAdded <= 1){
              continue
          } else {
              arr2.splice(i, 0, arr2[i])
          }
      }
      i += (timesAdded - 1)
  }
  if (arr1.length) arr1.sort((a, b) => a - b)
  return [...arr2, ...arr1]
};


// 1337
var kWeakestRows = function(mat, k) {
  let rows = {}
  for(let i = 0; i < mat.length; i++){
      rows[i] = mat[i].reduce((a, b) => a + b);
  }
  console.log(rows)
  return Object.entries(rows).sort((a, b) => a[1] - b[1]).map(el => el[0]).splice(0, k)

};


// 350 intersection of 2 arrays
let intersect = function(nums1, nums2) {
  let final=[];
  for(let i=0;i<nums2.length;i++){
         let val=nums2[i];
         if(nums1.includes(val)){
             let spval=nums1.splice(nums1.indexOf(val),1);
             final.push(val);
         }
  }
  return final;
};


// rotate array
// 116 ms & 39.6 MB
var rotate = function(nums, k) {
  let i = 0;
  while(i < k){
      nums.unshift(nums.pop())
      i++
  }
  return nums
};

// leetcode returns NaN for splice but works in console
var rotate = function(nums, k) {
  nums.unshift(nums.splice(nums.length - k, nums.length))
  nums.flat()
  return nums
};

// using splice
var rotate = function(nums, k) {
  nums.splice(0,0,...nums.splice(nums.length - k))
};

// version numbers
var compareVersion = function(version1, version2) {
  version1 = version1.split('.')
  version2 = version2.split('.')
  let longest = Math.max(version1.length, version2.length)
  for(let i = 0; i < longest; i++){
      let vOne = parseInt(version1[i]) || 0
      let vTwo = parseInt(version2[i]) || 0
      if (vOne > vTwo) return 1;
      if (vTwo > vOne) return - 1
  }
  return 0
};

// 1380 lucky numbers in matrix
// runtime 72ms beats 96.85% of JS solutions
// memory usage 39.4 mb beats 65.75 % of JS solutions
var luckyNumbers  = function(matrix) {
  const lucky = []
  for (let i = 0; i < matrix.length; i++){
      let min = Math.min(...matrix[i])
      let idx = matrix[i].indexOf(min)
      let column = matrix.map(subArr => subArr[idx])
      if (min === Math.max(...column)) lucky.push(min)
  }
  return lucky
};

// carpooling
var carPooling = function(trips, capacity) {
  const drop = new Map();
  trips.sort((a, b) => a[1] - b[1])
  let curr = 0;
  
  for (let [num, start, end] of trips){
      curr += num
      for (let [stop, ppl] of drop){
          if (stop <= start){
              curr -= ppl;
              drop.delete(stop)
          }
      }
      drop.set(end, (drop.get(end) || 0) + num);
      if (curr > capacity) return false;
  }
  return true;
};

// an attempt
const trips2 = [[9,3,6],[8,1,7],[6,6,8],[8,4,9],[4,2,9]]
const cap2 = 28 // false
const trips1 = [[2,1,5],[3,3,7]]
const cap1 = 4 // false
const trips3 = [[3,2,7],[3,7,9],[8,3,9]]
const cap3 = 11 // true

var carPooling = function(trips, capacity) {
    trips = trips.sort((a, b) => a[1] - b[1])
    for(let i = 0; i < trips.length - 1; i++){
        // find all collections
        trips.filter(subArr => 
            subArr[1] > trips[i][1] && //all trips collecting after ith's collection
            subArr[1] < trips[i][2] && //collect before ith trips drop off
            subArr[2] <= trips[i][2] //drop off is within
        )
        //compare location
        //figure out all people collected before drop off at 1
        //collect all trips whose pick up is before the ith drop off
        let dropOffs = trips.filter(subArr => subArr[1] < trips[i][2])
        let tripCapacity = dropOffs.map(subArr => subArr[0]).reduce((acc, val) => acc += val)
        debugger
        if (tripCapacity > capacity) return false
    }
    return true
};


// 349 intersection of 2 arrays
var intersection = function(nums1, nums2) {
  let arr;
  if (nums1.length > nums2.length){
      arr = nums1.filter(val => nums2.includes(val))
  } else {
      arr = nums2.filter(val => nums1.includes(val))
  }
  return [...new Set(arr)]
};

// more memory usage but much faster
var intersection = function(nums1, nums2) {
  let newSet = new Set([...nums1])
  let ans = new Set();
  for(const num of nums2) {
      if (newSet.has(num)) ans.add(num)
  }
  return [...ans]
}

// 860 lemonade
var lemonadeChange = function(bills) {
  if (!bills.length || bills[0] !== 5) return false
  let change = {'5': 0, '10': 0, '20': 0}
  for(let i = 0; i < bills.length; i++){
      if(bills[i] === 5){
          change['5']++
      } else if (bills[i] === 10){
          change['10']++
          if (change['5'] === 0){
              return false
          } else {
              change['5']--
          }
      } else {
          change['20']++
          if (change['10'] >= 1 && change['5'] >= 1){
              change['10']--
              change['5']--
          } else if (change['5'] >= 3){
              change['5'] -= 3
          } else {
              return false
          }
      }
  }
  return true
};

// last substring
// good run time, bad memory
var lengthOfLastWord = function(s) {
  // split only words, not individual characters
  s = s.trim().split(' ')
  return s.length > 0 ? s[s.length - 1].length : 0
};

// slightly slower but better memory usage, requires attention to edge cases
var lengthOfLastWord = function(s) {
  // if s is only spaces
  if (s.trim().length === 0) return 0
  s = s.trim()
  for (let i = s.length - 1; i > 0; i--){
      if (s[i] === ' '){
          return s.length - i - 1;
      }
  }
  // if s has characters but no spaces
  return s.length;
};

/* 345 reverse vowels in a string */
// okay speed, bad on memory
var reverseVowels = function(s) {
      let vowels = s.split('').filter(vow => vow.toLowerCase().match(/[aeiou]/))
      s = s.split('')
      for(let i = 0; i < s.length; i++){
          if(s[i].toLowerCase().match(/[aeiou]/)){
              s.splice(i, 1, vowels.pop())
          }
      }
      return s.join('')
  };
// faster, more memory efficient by not using arrays
var reverseVowels = function(s) {
  let vowels = (s.match(/[aiueo]/gi) || []).reverse(); // Find all vowels
  let i = -1;
  
// For each vowel replace it with its reversed (from vowels variable)
   return s.replace(/[aiueo]/gi, (match) => {
       i++;
       return vowels[i];
   });  
};

// slightly modified version of the above without using the counter or reverse
var reverseVowels = function(s) {
  let vowels = (s.match(/[aiueo]/gi) || []) // Find all vowels
  // let i = -1;
  
// For each vowel replace it with its reversed (from vowels variable)
   return s.replace(/[aiueo]/gi, (match) => {
       return vowels.pop();
   });  
};



/*
Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."
*/

/*
Find all numbers in an array that are duplicated twice
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
*/
var hIndex = function(citations) {
  citations.sort((a, b) => b-a);
  let hIndex = 0;
  for (let i = 0; i < citations.length; i++){
      if(citations[i] >= i+1){
          hIndex = i+1;
      } else {
          break
      }
  }
  return hIndex
};

var findDuplicates = function(nums) {
  let count = {}
  for(const num of nums){
    // could also be:
    // count[num] = 1 + (count[num] || 0)
      if (!count[num]){
          count[num] = 1
      } else {
          count[num]++
      }
  }
  let keys = Object.keys(count)
  return keys.filter(x => count[x] === 2)
};

// using reduce

function findDuplicates(nums){
  let uniq = nums.map((num) => {
      return {
          count: 1,
          num: num
      }
  }).reduce((a, b) => {
  a[b.num] = (a[b.num] || 0) + b.count
  return a
}, {})

  let duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1)
  return duplicates
}

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

// slower but less memory . modify array in place
// second conditional of if not necessary because duplicates only appear twice
var findDuplicates = function(nums) {
  nums.sort();
  for (let i = 0; i < nums.length; i++){
      if (nums[i] === nums[i + 1] && nums[i] !== nums[i + 2]){
          nums.splice(i + 1, 1)
      } else {
          nums.splice(i, 1)
          i--;
      }
  }
  return nums;
}

// same logic but with filter
var findDuplicates = function(nums){
    return nums.sort().filter((val, idx, arr) => arr[idx - 1] === val);
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

// better 342 powers of 4
var isPowerOfFour = function(num) {
  while (num > 1){
    if (num % 4 === 0) num /= 4
    else break
}
return num === 1
}

// max profit 
var maxProfit = function(prices) {
  let maxProfit = 0;
  let lowestVal = prices[0]
  for (let i = 1; i < prices.length; i++){
      lowestVal = Math.min(prices[i], lowestVal)
      maxProfit = Math.max(maxProfit, prices[i] - lowestVal)
  }
  return maxProfit
};

// power of two 231
var isPowerOfTwo = function(n) {
  while (n > 1){
      if (n % 2 === 0) n /= 2;
      else break
  }
  return n === 1
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

// 268 missing number
var missingNumber = function(nums) {
  let sum = 0
  nums.forEach(num => sum += num)
let expectedSum = nums.length*(nums.length + 1) / 2
  return expectedSum - sum
};

var missingNumber = function(nums) {
  let numSet = new Set(nums)
  for(let i=0; i<=nums.length; i++){
      if(! numSet.has(i)){
          return i
      }
  }
};


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