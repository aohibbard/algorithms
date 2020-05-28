function blindMice(str){
    const cheese = str.indexOf("C")
  
    let left = []
    let right = []
    let l = str.slice(0, cheese).split('').filter(char => char !== ' ')
    let r = str.slice(cheese + 1, str.length).split('').filter(char => char !== ' ')
    for(let j = 0; j < l.length; j++){
      if(j % 2 == 0){
        left.push(l[j] + l[j+1])
      }
    }
    for(let k = 0; k < r.length; k++){
      if(k % 2 == 0){
      right.push(r[k] + r[k+1])
      }
    }
    let blindLeft = left.filter(char => char === "M~")
    let blindRight = right.filter(char => char === "~M")
    return blindLeft.length + blindRight.length 
  }