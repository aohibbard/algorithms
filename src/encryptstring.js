"use strict";

/* 
Your friends are now complaining that it's too hard to make sure the lengths of their status updates are not prime numbers.

You decide to create a substitution cipher. The cipher alphabet is based on a key shared amongst those of your friends who don't mind spoilers.

Suppose the key is:
"The quick onyx goblin, grabbing his sword, jumps over the lazy dwarf!". 

We use only the unique letters in this key to set the order of the characters in the substitution table.

T H E Q U I C K O N Y X G B L R A S W D J M P V Z F

(spaces added for readability)

We then align it with the regular alphabet:
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
T H E Q U I C K O N Y X G B L R A S W D J M P V Z F

Which gives us the substitution mapping: A becomes T, B becomes H, C becomes E, etc.

Write a function that takes a key and a string and encrypts the string with the key.

Example:
key = "The quick onyx goblin, grabbing his sword, jumps over the lazy dwarf!"
encrypt("It was all a dream.", key) -> "Od ptw txx t qsutg."
encrypt("Would you kindly?", key) -> "Pljxq zlj yobqxz?"

Complexity analysis:

m: The length of the message
k: The length of the key
*/
const key = "The quick onyx goblin, grabbing his sword, jumps over the lazy dwarf!";
const message = "It was all a dream.";
const message2 = "Would you kindly?";


// colum is subarray length
// row is number of subarray lengths

function fillArr(str, colSize){
    let matrix = []
    str = str.split('')
    for(let i = 0; i < colSize; i++){
        let newArr = []
        newArr.push(str.splice(0, colSize))
        matrix.push(newArr)
    }
    console.log(matrix)
}

const message1 = "This message is 25 charac"
const r1 = 5;
const c2 = 5;

function encryptString(message, r, c){
  message = message.split('')
  let newStr = ''
  // x is a row iterator
  let x = 0
  while(x < r){
    // for every turn of the loop on x, add the character at the value r - x (x corresponding to the rows)
    newStr += message.filter(char => message.indexOf(char) % r === x).join('')
    x++
  }
  return newStr
}

//     newStr += message.filter(char => message.indexOf(char) % r ===0).join('')

function encryptString(message, r, c){
  let matrix = []
  let msgArr = message.split('')
//   see above for better way of doing this
  while(msgArr.length > 0){
    let newArr = [];
    for(let i = 0; i < c; i++){
      let newChar = msgArr.splice(0, 1)
      newArr.push(newChar)
    }
    matrix.push(newArr.flat())
  }
  message = message.split('')
  for(let i = 0; i < c; i++){
      let newArr = []
      newArr.push(message.splice(0, c))
      matrix.push(newArr)
  }
  let str = ''
  for (let i = 0; i < c; i++){
    for (let j = 0; j < r; j++){
      str += matrix[j][i]
    }
  }
  console.log(str)
  return str
}

// cleaned up 
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
  }
  return word.join('')
}


function codeString(str){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let obj = {}
  let code = ''
  for(const char of str){
    if (!obj[char]){
      obj[char] = alphabet.splice(0, 1)
    }
    if (char.toUpperCase() === char){
      code += obj[char].toString().toUpperCase()
    } else {
      code += obj[char]
    }
  }
  console.log(code)
}

// encryptString(message1, r1, c1)
// encryptString(message2, r2, c2)
// encryptString(message2, r3, c3)

// if !obj['char'] else obj