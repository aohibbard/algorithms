
const message1 = "This message is 25 charac"
const r1 = 5;
const c2 = 5;
function encryptString(message, r, c){
  let matrix = []
  message = message.split('')
  for(let i = 0; i < c; i++){
      matrix.push(message.splice(0, c))
  }
//   let str = ''
  let word = []
  while(matrix[0].length > 0){
    word.push(...matrix.map(subArr => subArr.shift()))
    // alt str += (...matrix.map(subArr => subArr.shift())).join('') ?
  }
  return word.join('')
}

// capitalize everything in a nested array, t
// let array = ['sean', 'derek', ['anna', 'beyonce', ['gaga'], 'jim'], 'karen', ['melinda', 'aimee', 'iris', ['joanne']], 'kayla']
// function capitalize(arr){
//     for(let i = 0; i < arr.length; i++){
//         if (typeof(arr[i]) === 'string'){
//             arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1, arr[i].length)
//         } else {
//             capitalize(arr[i])
//         }
//     }
//     return arr;
// }

// var searchInsert = function(nums, target) {
//     if (nums.length === 0 || nums[0] > target) return 0;
//     if (nums[nums.length] < target) return nums.length + 1;
//     if (nums.includes(target)){
//         return nums.indexOf(target)
//     } else {
//         for(let i = 0; i < nums.length; i++){
//             if(nums[i] < target && nums[i+1] > target)
//                 debugger
//                 return i + 1
//             }
//         }
//     }  
// };

// var removeElement = function(nums, val) {
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] === val){
//             debugger
//             nums.splice(i, 1)
//             i--
//         }
//     }
//     return nums
// };


// function closedPaths(number) {
//     // Write your code here
//     let arr = number.toString().split('')
//     let counter = 0
//     for (let i = 0; i < arr.length ; i++){
//         debugger

//         if(arr[i] === 8){
//             counter = counter + 2
//         } else if (arr[i] === 4 || arr[i] === 6 || arr[i] === 9 || arr[i] === 0){
//             counter = counter + 1
//         } else {
//             counter = counter
//         }
//     }
//     return counter
// }



// // bluecore
// const x = [{volume: 100,ingredients: {ingredient1: 50,ingredient2: 20,ingredientA: 500}},{volume: 300,ingredients: {ingredient1: 150, ingredientA: 300,ingredientB: 950}}]

// //reduce & forEach on obj

// function mixPotions(obj){
//   let potion = {volume: 0, ingredients: {}}
//   for (const x of obj){
//     potion.volume += x.volume
//   }
//   // get appearances of an ingredient and find ratios
//   // e.g. ingredient 1 (50*100 + 150*300)/(100 + 300) = 125.
//   // Object.keys
//   for (const x of obj.ingredients){}
//   debugger
// }