// if keys of a phone are broken, 

function phoneWorks(digits, words) {
    const sol = []
    const phone = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }
    let letters = ''
    for(const num of digits){
        letters += phone[num]
    }
    letters = letters.split('')
    for (const word of words){
        trueFalseArray = []
        for(const lttr of word.split('')){
            trueFalseArray.push(letters.includes(lttr))
        }
        debugger
        trueFalseArray.includes(false) ? sol.push(false) : sol.push(true)
    }
    return sol
}

phoneWorks([2, 3],["abc", "gdef"])