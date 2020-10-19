// Kalpesh -- I wanted to complete the function we had described for step 3 of this problem. I've left the second function we wrote,
// and then modified it slightly to fit the conditions of the third problem
// I'm not certain of the exact conditions for what holidays are in the "Up Next" array, so I've set it to holidays within the next 30 days


const parentChildPairs = [
  [1, 3], [2, 3], [3, 6], [5, 6],
  [5, 7], [4, 5], [4, 8], [4, 9], [9, 11]
];

function findNodesWithZeroAndOneParents(arr){
  if (arr.length === 0) return 0;
  let parentsObj = {}
  let childObj = {}
  for (const subArr of arr){
    parentsObj[subArr[0]] += 1 || 1
    childObj[subArr[1]] += 1 || 1
  }
//   individuals with no parent -- any key in parentsObj not in childObj
  let noParents = Object.keys(parentsObj).filter(key => !Object.keys(childObj).includes(key))
  let oneParent = Object.keys(childObj).filter(key => childObj[key] === 1)
  return {"No Parents": noParents, "One Parent": oneParent}
}




const eventsList = [ 
  {"name": "Halloween", "date": "2020-10-31"},
     {"name": "Diwali", "date": "2020-11-14"},
     {"name": "Indigenous Peoples' Day", "date": "2020-10-11"},
     {"name": "Veterans Day", "date": "2020-11-11"},
  ]




function upcomingHolidays(events){
  let closestDate = 366;
  let closestHoliday = null;
  let upNext = []
  for(let i = 0; i < events.length; i++){
      let jsDate = date.number_of_days_between(date.parse(events[i].date), date.today())
      if (jsDate <= 31 && jsDate >= 0){
          upNext.push(events[i])
          if (Math.min(jsDate, closestDate) !== closestDate){
              closestDate = jsDate;
              closestHoliday = events[i]
          }
      }
  }
  if (!closestHoliday) return {'Coming Soon': null, 'Up Next': []}
  upNext = upNext.filter(holiday => holiday !== closestHoliday).sort((a, b) => a.date - b.date).map(holiday => holiday.name)
  return {'Coming Soon': daysAway(closestHoliday), "Up Next": upNext }
}

// Second Function
function days_away_soonest(events){
  let closestDate = 366
  let closestHoliday = null;
  for(let i = 0; i < events.length; i++){
   let jsDate = date.number_of_days_between(date.parse(events[i].date), date.today())
  if (jsDate >= 0){
      if (Math.min(jsDate, closestDate) !== closestDate){
        closestDate = jsDate;
        closestHoliday = events[i]
      }
     }
  }
  if (!closestHoliday) return null
  else return days_away(closestHoliday)
}

// First Function
function daysAway(event){
  const dateGap = date.number_of_days_between(date.parse(event.date), date.today())
  if (dateGap === 0){
    return `${event.name} is today`
  } else if (dateGap === 1) {
    return `${event.name} is 1 day away.`
  } else if (dateGap > 1) {
    return `${event.name} is ${dateGap} days away.`
  } else {
    return null
  }
}

let date = {}


// HELPER FUNCTIONS 
//To parse a date string “YYYY-MM-DD” into a date object
date.parse = (str) => Date.parse(str)  

// To get today’s date as date object
date.today = () => Date.parse("2020-09-29")

//To get number of days between two dates by subtracting date2 from date1. 
//The result can be +ve or -ve integer or zero
date.number_of_days_between = (date1, date2) => (date1.valueOf()-date2.valueOf())/(24*3600000)















// // carpooling
// var carPooling = function(trips, capacity) {
//     const drop = new Map();
//     trips.sort((a, b) => a[1] - b[1])
//     let curr = 0;
    
//     for (let [num, start, end] of trips){
//         curr += num
//         for (let [stop, ppl] of drop){
//             if (stop <= start){
//                 curr -= ppl;
//                 drop.delete(stop)
//             }
//         }
//         debugger
//         drop.set(end, (drop.get(end) || 0) + num);
//         if (curr > capacity) return false;
//     }
//     return true;
//   };
  
//   // an attempt
//   const trips2 = [[9,3,6],[8,1,7],[6,6,8],[8,4,9],[4,2,9]]
//   const cap2 = 28 // false
//   const trips1 = [[2,1,5],[3,3,7]]
//   const cap1 = 4 // false
//   const trips3 = [[3,2,7],[3,7,9],[8,3,9]]
//   const cap3 = 11 // true





// const parentChildPairs1 = [
//     [1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5],
//     [4, 8], [4, 9], [9, 11], [14, 4], [13, 12], [12, 9]
// ];

// const parentChildPairs2 = [
//     [11, 10], [11, 12], [2, 3], [10, 2], [10, 5],
//     [1, 3], [3, 4], [5, 6], [5, 7], [7, 8]
// ];

// const findParents = function(child, pairs){
//     let parents = pairs.filter(subArr => subArr[1] === child)
//     if(parents.length){
//       return parents.flat().filter(val => val !== child)
//     }
//   }

//   function hasCommonAncestor(childA, childB, pairs){
//       let ancestorsA = findParents(childA, pairs)
//       let ancestorsB = findParents(childB, pairs)
//       if (!ancestorsA || !ancestorsB) return false
//       let i = 0;
//           while(i < ancestorsA.length){
//               let newParents = findParents(ancestorsA[i], pairs)
//               if (newParents) ancestorsA.push(...newParents)
//               i++
//           }
//           let j = 0
//           while (j < ancestorsB.length){
//               let parentsB = findParents(ancestorsB[j], pairs)
//               if (parentsB) ancestorsB.push(...parentsB)
//               j++
//            }
//       return ancestorsA.filter(val => ancestorsB.includes(val)).length > 0
//   }

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