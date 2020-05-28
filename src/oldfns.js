

// function scramble(str1, str2) {
//   let x = str1.split('')
//   let y = str2.split('')
//   let z = y.filter(ltr =>ltr === x)
//   debugger
//   if (z.length > 0) {
//   return false
//   } else {
//   return true }
// }



// function anagrams(word, words) {
//   // filter & join
//   let letters = word.split('').sort()
//   let matches = []
//   for (const x of words){
//     let testCase = x.split('').sort()
//     if (testCase.length === letters.length){
//     // for (let i = 0; i < testCase.length; i++){
//     //   if(testCase[i] === letters[i])
//     //   matches.push(x)
//     if (JSON.stringify(testCase)==JSON.stringify(letters)){
//       matches.push(x)
//     }
//     }
//   }
//   return matches
  // let ags = [...new Set(matches)]
  // return ags
// }

// function formatDuration (num) {
//   let secs
//   let min
//   let hours
//   let days
//   // let years 
//   if(num < 60){
//     debugger
//     secs = 60 - num;
//   } else if (num >= 60 && num < 3600){
//     min = Math.floor(num / 60)
//     secs = num % 60;
//     debugger
//    } else if (num >= 3600 && num < 86400){
//     hours = (num / (60**2))
//     min = (num % (60**2)) / 60
//     secs = min % 60; 
//     debugger

//    } else if(num >= 86400){
//     days = (num / (24 * 60**2)) 
//     hours = (num % (60**2)) / 24
//     min = (num % (60**2)) / 60
//     secs = min % 60; 
//   }
//   debugger

// }

// 31,557,600 in a year

//60 secs / min
//3600 secs / hour
// 86400 secs / day
//31536000 secs / year

// let myMatrix = [[1, 2, 3, 4],
//                 [12,13,14,5],
//                 [11,16,15,6],
//                 [10,9, 8, 7]];

// function unroll(matrix) {
//   const newArr = []
//   if (matrix.length === 0) return ;
//   // first row
//   newArr.push(...matrix.shift())
//   // right edge
//   newArr.push(...matrix.map(arr => arr.pop()))
//   //bottom in reverse
//   newArr.push(...matrix.pop().reverse())
//   newArr.push(...matrix.map(arr => arr.shift()).reverse())
//   unroll(matrix)
//   return ...newArr
// }

// function unroll(matrix) {
//   const newArr = []
  //push and then return ...newArr
  
//   // exit condition
//   if(myMatrix.length === 0) return;
  
//   // top
//   console.log(...myMatrix.shift())
  
//   // right edge (over every row, print and del last)
//   console.log(...myMatrix.map(arr => arr.pop()))
  
  
//   // bottom in reverse
//   console.log(...myMatrix.pop().reverse())
  
  
//   // left edge (bottom up)
//   console.log(...myMatrix.map(arr => arr.shift()).reverse())
  
  
//   unroll(matrix);
  
// }


// " Hello there thanks for trying my Kata"  => 
// "#HelloThereThanksForTryingMyKata"

// function generateHashtag (str) {
//   let x = str.split(' ')
//   const tweet = x.map(word => word.charAt(0).toUpperCase() word.slice(1)).join('')
//   const hashtag = `#{tweet.trim()}`
//   return hashtag.length > 140 ? false : hastag
  
// }

// function register(x){
//   let change = x - Math.floor(x)
//   if(change===0){
//     return "No change needed"
//   } else {
//     return change % 0.25
//   }
// }



// function mix(s1, s2) {
//   let arr1 = []
//   let arr2 = []
//   let string1 = s1.split('')
//   let string2 = s2.split('')
//   for(let i = 0; i < string1.length; i++){
//     if(string1[i] === s1.toLowerCase().split('')[i]){
//       arr1.push(string1[i])
//     }
//   }
//   for(let i = 0; i < string2.length; i++){
//     if(string2[i] === s2.toLowerCase().split('')[i]){
//       arr2.push(string2[i])
//     }
//   }
//   let comp1 = arr1.filter(x => x !== " ").sort().reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), Object.create(null));
//   let comp2 = arr2.filter(x => x !== " ").sort().reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), Object.create(null));
//   for(let i = 0; i < Object.keys(comp1).length - 1; i++){
//     for(let j = 0 ; j < Object.keys(comp2).length; j++){
//       if(Object.keys(comp1)[i] === Object.keys(comp2)[j]){
//         debugger
//         //key : value = Object.entries(arg)[i][1] : Object.entries(arg)[i][0]
//         Object.values(comp1)[i] > Object.values(comp2)[j] ? console.log(Object.entries(comp1)[i][1], Object.entries(comp1)[i][0]) : console.log(Object.entries(comp2)[j][1], Object.entries(comp2)[j][0])
//       } else {
//         console.log(Object.entries(comp1)[i][1], Object.entries(comp1)[i][0])
//       }
//     }
//   }
  
  
//   debugger


// }

// let dog = {
//   name: 'doggo',
//   dog.sayName.bind(dog)() {
//     debugger
//     console.log(this.name)
//   }
// }
// let sayName = dog.sayName
// sayName()

// function greet(person) {
//   if (person.name ===  'amy' ) {
//     return 'hey amy'
//   } else {
//     debugger
//     return 'hey arnold'
//   }
// }
// greet({ name: 'amy' })

// // const tsk  = [50, 55, 56, 57, 58]
// // let test = 163, 3 (163)

// function chooseBestSum(tk, l, s){
//   let results = []
//   let secondResults = []
//   for (let i = 0; i < tk.length - 1; i++) {
//     for (let j = i + 1; j < tk.length; j++) {
//       debugger
//       let value = tk[i] + tk[j]
//       results.push(value)
//     }
//   }

//   for (const x of results){
//     if(x < l){
//       secondResults.push(x)
//     }
//   }
  
//   debugger
//   secondResults.sort((a, b) => a - b)
//   return secondResults[0]
// }

// function incrementString (strng) {
//   // return incrementedString
//   var string = strng.replace(/[0-9]/g, '');
  
//   var len = strng.length  - string.length;
  
//   var str = strng.slice(string.length) || "0";
//   debugger
//   str = (parseInt(str) + 1).toString();
  
//   while (str.length < len) {
//     str = "0" + str;
//   }
//   debugger
//     return string.concat(str);
// }

// function incrementString(string){
//   if (/[0-9]/.test(string)){
//     let num = string.split(/[a-z]/)
//     let word = string.split(/[0-9]/)
//     let plusOne = (parseInt(num[num.length - 1]) + 1).toString()
//     return `${word[0]}${plusOne}`
//   } else {
//     return `${string}${1}` 
//   }
// }


// const sampleArray = [[1,2,3],
// [8,9,4],
// [7,6,5]]

// snail = function(array) {
//     // enjoy
//   }

//   function sym(args) {
//       debugger
//     return args;
//   }
  

  

// function createPhoneNumber(numbers){
//     let area = numbers.slice(0, 3).join('')
//     let firstThree = numbers.slice(3, 6).join('')
//     let lastFour = numbers.slice(6).join('')
//     return `(${area}) ${firstThree}-${lastFour}` 
//   }

// const x = [1, 0, 0, 2, 1]

// function zeroes(arr){
//     return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0))
// }

// function moveZeroes(arr) {
//     let zeroes = []

//     for(let i = 0; i < arr.length; i++){
//         for(const arr[i] === 0){
//             arr.splice(i, 1)
//             zeroes.push(arr[i])
//         }


//     }
//     for(let i = 0; i < zeroes.length; i++){
//         arr.push(0)
//     }
//   }

// const evens = [2, 4, 0, 100, 4, 11, 2602, 36]
// const odds = [160, 3, 1719, 19, 11, 13, -21]

// function findOutlier(integers){
//     let outliers = integers.filter(x => x % 2 === 0)
//     if (outliers.length > 1){
//         return parseInt(integers.filter(val => val % 2 !== 0))
//     } else {
//         return parseInt(outliers[0])
//     }
//   }


// function duplicateEncode(word){
//     var letterCount = {};
//     var letters = word.toLowerCase().split('');
  
//     letters.forEach(function(letter) {
//       letterCount[letter] = (letterCount[letter] || 0) + 1;
//     });
  
//     return letters.map(function(letter) {
//       return letterCount[letter] === 1 ? '(' : ')';
//     }).join('');
//   }


// function sortArray(arr) {
//     const odds = arr
//         .filter(x => x%2)
//         .sort((a, b) => a - b);
        
//     return arr
//         .map(x => x%2 ? odds.shift() : x);
// }
// ;


// const array = [5, 3, 2, 8, 1, 4]
// // [1, 3, 2, 8, 5, 4])

// // function sortArray(array){
// //     return array.sort((a, b) => {if(a % 2 === 0 || a === 0 || b % 2 === 0 || a % 2 === 0){
// //         return (a - b) }
// //     }
// // }

// function sortArray(arr){
//     const odd = arr.filter(i => i%2 !== 0).sort()
//     debugger
//     let i = 0
//     result = [];
//     arr.forEach(val => {
//         if(val % 2 === 0){
//             result.push(val)
//         } else {
//             result.push(odd[i])
//             i++
//         }
//     })
//     debugger
//     return result
// }



// function isTriangle(a,b,c){
//     if (a > 0 && b > 0 && c > 0){
//         if( a + b > c && b + c > a && a + c > b){
//             return true
//         } else {
//            return false
//         }
//     } else {
//         return false
//     }
// }

// //    return a + b > c && a + c > b && c + b > a;

// {
//     [a, b, c] = [a, b, c].sort((x, y) => x-y);
    
//     return a+b > c;
//   }


// function getCount(str) {
    //     return (str.match(/[aeiou]/ig)||[]).length;
    //   }


// var isSquare = function(n){
//     if(n > 1){
//     (Math.sqrt(n)) % 1 === 0 ? true : false
//   // return !isNaN(n) && (function(x) { return (x | 0) === x; })
//     } else if (n === 1 || n === 0) {
//     return true } else {
//       return false;
//     }
//   }

//   function isSquare(n) {
//     return Math.sqrt(n) % 1 === 0;
//   }
//   const isSquare = n => Number.isInteger(Math.sqrt(n));

