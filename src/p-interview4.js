/*

# The exercise here is to write a function that takes a single argument (a
# list of names) and returns a string representing the English-formatted
# conjunction of those names.
#
# For example, given these names: ['Alice', 'Bob', 'Carol', 'Diana']
#
# The output would be: "Alice, Bob, Carol and Diana"
#
## This type of function is useful when building user interfaces that show the
 list of people in a conversation, for example.
#
# Whether or not the output follows the Oxford comma rule is up to the author.
# The code below follows the Pinterest Style Guide, which does not use the
# Oxford comma.

# Now lets add a new argument called `limit`. This controls the maximum number of 
# names that should be displayed.  Any remaining items are "summarized" using the
# string "and # more".
#
# For example, given these names: ['Alice', 'Bob', 'Carol', 'Diana'] and limit: 2
#
# The output would be: "Alice, Bob and 2 more"


*/

const _ = require('lodash');

function printNames(arr, limit) {
  if (arr.length === 0) return;
  // let lastName = Math.min(limit, arr.length)
  let str = ''
  let remainder = arr.length - limit
  if (limit > arr.length){
    limit = arr.length
  }
  for (let i = 0; i < limit; i++){
    if (i === limit - 1){
      if(remainder > 0){
          str += `${arr[i]}, and ${remainder} more`
          break;
      } else {
        str += `and ${arr[i]}`
        break;
      }
    }
    // if (i === arr.length - 1){
    //   str += arr[i]
    //   break
    // }
    str += arr[i] + ', '
    // if (i === arr.length - 2){
    //   str += 'and '
    // }
    
  }
  console.log(str)
}

printNames(['Alice', 'Bob', 'Carol', 'Susan', 'Diana'], 3)
// printNames(['Alice']