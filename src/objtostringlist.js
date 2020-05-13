
// const simpsons = [{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]

// function list(names){
//     let x = names.map(a => a.name + ",")
//     if (names.length > 1) {
//     let end = x.length - 1
//       let newEnd = x[end].substring(0, x[end].length - 1)
//       let penultimate = x[end - 1].substring(0, x[end - 1].length - 1)
//     x.splice(end, 1, newEnd)
//     x.splice(end - 1, 1, penultimate)
//     x.splice(end, 0, "&")
//       debugger
//       return x.join(" ")
//     } else if (names.length === 1) {
//     return names.map(a => a.name)
//     } else {
//         return names
//     }
//   }