// get_json_value_by_path("$.hello[1].hello", json) = true
// get_json_value_by_path("$.hello[2][0]", jsonObj) = 3
// get_json_value_by_path("$.world.from", json) = "Pinterest"
// get_json_value_by_path("$.does.not[3].exist", json) = None

const jsonObj = {
  "hello": [
      "world",
      {"hello": true},
      [3, 4, 5]
  ],
  "world": {
      "from": "Pinterest"
  }
}


function getJSonValueByPath(path, json){
path = path.split('.').splice(1, path.length).map(val => (val.includes('[')) ? val.split(/[\[\]]+/) : val).flat().filter(val => val !== '')
let current = json
for(let i = 0; i < path.length; i++){
  if (current[path[i]] === undefined){
    return 'None'
  } else {
    current = current[path[i]]
  }
}
return current
}

get_json_value_by_path("$.hello[1].hello", jsonObj)
get_json_value_by_path("$.world.from", jsonObj)
get_json_value_by_path("$.hello[2][0]", jsonObj)
get_json_value_by_path("$.does.not[3].exist", jsonObj)



















const jsonObj = {
    "hello": [
        "world",
        {"hello": true},
        [3, 4, 5]
    ],
    "world": {
        "from": "Pinterest"
    }
}

// Input JsonPath and Output result:
// get_json_value_by_path("$.hello[1].hello", json) = true
// get_json_value_by_path("$.hello[2][0]", json) = 3
// get_json_value_by_path("$.world.from", json) = "Pinterest"
// get_json_value_by_path("$.does.not[3].exist", json) = None


// . refers to key
// bracker are index

// assumptions: input is correct type, "$" will always be at the start

const _ = require('lodash');

// console.log(jsonObj['hello']['1']['hello'])

function get_json_value_by_path(path, json){
  let obj = {}
  path = path.split('.')
  for (let i = 1; i < path.length; i++){
    obj[i] = path[i]
  }
  console.log(json[obj[1]] [obj[2]])
  // let keys = []
  // for(let i = 1 ; i < path.length; i++){
  //   let newStr = ''
  //   while(path[i] !== '.' || path[i] !== '['){
  //     newStr += path[i]
  //     if (newStr[0] === '[' && path[i] === ']'){
  //       break;
  //     }
  //     i++;
  //     keys.push([newStr])
  //   }
  // }
  console.log(obj)
  // let x = Object.keys(json).filter(key => json[key][0])
  // let y = Object.keys(json).filter(key => json[key][1])
  // console.log(y)
  // console.log(json[x][y])
//   path.split('.' will always be first key
//   here, we would return any key in json that matches the first index of path array
//  perform this Object.keys.filter recursively
//   the idea with example from line 13 is we extract
  // json.hello[1]
//   and then we extract any subsequent keys from path.split('.'') in this case 'hello', performing this as long there are valid keys in path
  
//  recursive approach where for each index i in path
  
//   we would chain this key onto json and continuing operating through the object keys until we have an answer or the value does not exist
  
}

// console.log(jsonObj.hello[1].hello)

// _.times(5, sayHello);
get_json_value_by_path("$.hello[1].hello", jsonObj)
