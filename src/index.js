

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