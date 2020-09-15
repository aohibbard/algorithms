// spill
const testArr = [-2, 3, 1, -5]
const three = [-10, -20, 50, -30]
const testTwo = [-1, -2, -3, -4]

function findX(arr, x = 0){
  // if array empty or all values zero
  if (arr.length === 0 || arr.filter(val => val === 0).lenth === 1) return 1;
  const negativeVals = arr.filter(val => val < 0)
  // if all values positive
  if (negativeVals.length === 0){
      x = arr[0] * -1 + 1
  } else if (negativeVals.length === arr.length){
      // if all values negative, take absolute value of sum of arr, add 1
      x = Math.abs(arr.reduce((val, acc) => acc + val)) + 1
  } else {
      // ensure first sum = 1
      if (x === 0){
          if (Math.sign(arr[0] === 1)){
              x = 1 - arr[0]
          } else {
              x = Math.sign(arr[0]) * arr[0] - Math.sign(arr[0])
          }
      }
      let sum = x;
      for(let i = 0; i < arr.length; i++){
          sum += arr[i]
          debugger
          if (sum < 1){
              let diff = 1 - sum
              x += diff
              findX(arr, x)
          }
      }
  }
  return x;
}