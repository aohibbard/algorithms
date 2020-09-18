/*
find the two arguments in parentChildPairs, arr[1]
parent1 and parent2 variable 
recording all instances of parents in an array, while there are still parents
*/

const parentChildPairs = [
    [1, 3], [2, 3], [3, 6], [5, 6],
    [5, 7], [4, 5], [4, 8], [4, 9], [9, 11]
  ];
  
  function findNodesWithZeroAndOneParents(arr){
    if (arr.length === 0) return 0;
    let parentsObj = {}
    let childObj = {}
    for (const subArr of arr){
      if (!parentsObj[subArr[0]]){
        parentsObj[subArr[0]] = 1
      } else {
        parentsObj[subArr[0]] += 1
      }
      if (!childObj[subArr[1]]){
        childObj[subArr[1]] = 1
      } else {
        childObj[subArr[1]] += 1
      }
    }
  //   individuals with no parent -- any key in parentsObj not in childObj
    let noParents = Object.keys(parentsObj).filter(key => !Object.keys(childObj).includes(key))
    let oneParent = Object.keys(childObj).filter(key => childObj[key] === 1)
    return noParents, oneParent
  }
  
  findNodesWithZeroAndOneParents(parentChildPairs)



/*
Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.

For example, in this diagram, 6 and 8 have a common ancestor of 4.

         14  13
         |   |
1   2    4   12
 \ /   / | \ /
  3   5  8  9
   \ / \     \
    6   7     11

parentChildPairs1 = [
    (1, 3), (2, 3), (3, 6), (5, 6), (5, 7), (4, 5),
    (4, 8), (4, 9), (9, 11), (14, 4), (13, 12), (12, 9)
]

Write a function that takes the graph, as well as two of the individuals in our dataset, as its inputs and returns true if and only if they share at least one ancestor.

Sample input and output:

hasCommonAncestor(parentChildPairs1, 3, 8) => false
hasCommonAncestor(parentChildPairs1, 5, 8) => true
hasCommonAncestor(parentChildPairs1, 6, 8) => true
hasCommonAncestor(parentChildPairs1, 6, 9) => true
hasCommonAncestor(parentChildPairs1, 1, 3) => false
hasCommonAncestor(parentChildPairs1, 7, 11) => true
hasCommonAncestor(parentChildPairs1, 6, 5) => true
hasCommonAncestor(parentChildPairs1, 5, 6) => true

Additional example: In this diagram, 4 and 12 have a common ancestor of 11.

        11
       /  \
      10   12
     /  \
1   2    5
 \ /    / \
  3    6   7
   \        \
    4        8
parentChildPairs2 = [
    (11, 10), (11, 12), (10, 2), (10, 5), (1, 3),
    (2, 3), (3, 4), (5, 6), (5, 7), (7, 8),
]

hasCommonAncestor(parentChildPairs2, 4, 12) => true
hasCommonAncestor(parentChildPairs2, 1, 6) => false
hasCommonAncestor(parentChildPairs2, 1, 12) => false

n: number of pairs in the input
*/

const parentChildPairs1 = [
    [1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5],
    [4, 8], [4, 9], [9, 11], [14, 4], [13, 12], [12, 9]
];

const parentChildPairs2 = [
    [11, 10], [11, 12], [2, 3], [10, 2], [10, 5],
    [1, 3], [3, 4], [5, 6], [5, 7], [7, 8]
];


function hasCommonAncestor(pairs, childA, childB) {
    let aAncestors = []
    let bAncestors = []
//     find child in matrix, this is treated as x
        let firstChildLocation = pairs.filter(subArr => subArr[1] === childA)
        let secondChildLocation = pairs.filter(subArr => subArr[1] === childB)
        aAncestors.push(firstChildLocation[0])
        bAncestors.push(secondChildLocation[0])
        while (){
//           
        }
//     parents would be x[0] in the resulting array
//     feed these into some kind of variable akin to a "next" & while this variable is still true, continue to iterate over the parent child pairs, collecting all ancestors of the argument
//     this would be an array
//    ideally do this looping at the same time for both arguments, and have two arrays of ancestors for each argument
//     if the arrays have any numbers in common return true
    
//     a better way of doing this would be to check the arrays as we go
    aAncestors.push(x.filter(subArr => subarr[0]))
    let parent1 = x[0][0]
    let parent2 = x[1][0]
    console.log(aAncestors)
    console.log(parent2)
}

hasCommonAncestor(parentChildPairs2, 4, 12)