/*
  Args:
    matrix: an NxN array of arrays containing the matrix to check
  Returns:
    The string "VALID" if matrix contains a valid sub-sudoku solution, and
    "INVALID" otherwise
*/

// find the size of n x n
// check each row & column to see if values are correct
// initial check -- are they within the right range
// second check, do they align to right place

const validMatrix = [[1, 2, 3, 4], [2, 3, 4, 1], [3, 4, 1, 2], [4, 1, 2, 3]]
const invalidMatrix = [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]
const otherInval = [[1, 2, 3], [0, 2, 3], [-100, 100, 1]]

function checkSudoku(matrix) {
    const arrSize = matrix[0].length;
    // check array is size NxN
    if (matrix.filter(subArr => subArr !== arrSize)) return "INVALID";
    // check range of values
    if (matrix.flat().filter(val => val > arrSize || val < 1)) return "INVALID";
    // check rows
    matrix.forEach(subArr => {
        let copies = [... new Set(subArr)]
        if (copies.length < subArr.length){
            return "INVALID"
        }
    })
    return "VALID";
  }
  
  // DO NOT MODIFY BELOW THIS LINE
  
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
  });
  
  var matrix = [];
  
  rl.on('line', (line) => {
    line = line.trim();
    if (line == '') return;
    matrix.push(line.split(' '));
  }).on('close', () => {
    console.log(checkSudoku(matrix));
  });
  


/*
Problem Statement
You are working on a logic game made up of a series of puzzles. The first type of puzzle you settle on is “sub-Sudoku”, a game where the player has to position the numbers 1..N on an NxN matrix.

Your job is to write a function that, given an NxN matrix, determines if the matrix is valid. A matrix is valid if every row and column contains exactly the numbers 1..N. For example, in a 4x4 matrix, each row and column would contain the numbers 1, 2, 3, and 4.

If the matrix is valid, return “VALID”. If it is not valid, return “INVALID”

The matrix may contain any integer, not just 1..N, and not just positive. However, the grid will only contain integers.

Examples
The following matrix would return “VALID”:

1 2 3
2 3 1
3 1 2
Each row and column contains exactly the numbers 1, 2, and 3 in a 3x3 matrix.

However, this matrix is “INVALID”:

1 2 3
1 2 3
1 2 3
Each row has the numbers 1, 2, and 3. However, the columns do not; the first column contains 1, 1, and 1.

The following matrix is also “INVALID”:

3 5 7
2 4 8
9 1 6
While each row and column has three different numbers, they are not the numbers 1, 2 and 3, so this is not valid.
*/