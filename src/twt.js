// November 3 2020 
// consecutive characters
var maxPower = function(s) {
    let longestRun = 1;
    for(let i = 1; i < s.length; i++){
        let currentRun = 1;
        while(s[i - 1] === s[i]){
            currentRun++;
            i++
        }
        longestRun = Math.max(currentRun, longestRun)
    }
    return longestRun
};


// FUN WITH ANAGRAMS
let str = ['code', 'doce', 'framer', 'framed']
function funWithAnagrams(text) {
    if (text.length <= 1) return text;
    let sol = [text[0]]
    for(let i = 1; i < text.length; i++){
        if (sol.filter(word => isAnagram(word, text[i])).length === 0){
            sol.push(text[i])
        }
    }
    sol.sort(function(a, b){
            if(a < b) { return -1; }
            if(a > b) { return 1; }
            return 0;
    })
    return sol
}

/*
def funWithAnagrams(text):
    if len(text) <= 1:
        return text
    # list of anagrams will always include the first phrase
    solution = [text[0]]
    i = 1
    for i in range(len(text)):
        # if current word is not an anagram of list of solutions, add to solutions list
        anagrams = list(filter(lambda x : sorted(x) == sorted(text[i]), solution))
        if not anagrams:
            solution.append(text[i])
    solution.sort()
    return solution
*/

function isAnagram(word1, word2){
    if (word1.length !== word2.length) return false;
    word1 = word1.toLowerCase().split('')
    word2 = word2.toLowerCase().split('')
    for(let lttr of word1){
        if (!word2.includes(lttr)){
            return false;
            break;
        } else {
            word2.splice(word2.indexOf(lttr), 1)
        }
    }
    return true
}


let possibleEvents = 0;
while(i <= arrival[arrival.length - 1]){
    if (i === arrival.length){
        possibleEvents++;
        break;
    }
    let nextArrival = arrival.find(val => val > arrival[i])
    // if the current presentation ends before the next arrival, possible event true
    if (arrival[i] + duration[i] <= nextArrival){
        possibleEvents++
        i = arrival.indexOf(nextArrival);
    } else {
        i++;
    }
}
console.log(duration)
return possibleEvents


let i = 0;
while( i < pairs.length){
    let nextEvent = pairs.find(obj => obj.arrival > pairs[i].arrival)
    if (!nextEvent){
        possibleEvents++;
        break;
    }
    if(pairs[i].arrival + pairs[i].duration <= nextEvent.arrival){
        possibleEvents++;
        i = pairs.indexOf(nextEvent)
    } else {
        i++
    }
}
return possibleEvents;


let possibleEvents = [];
for(let i = 0; i < pairs.length - 1; i++){
    if(pairs[i].arrival + pairs[i].duration <= pairs[i + 1].arrival){
        possibleEvents.push(pairs[i])
    } else if (pairs[i].arrival + pairs[i].duration >= pairs[i + 1].arrival + pairs[i + 1].duration){
        possibleEvents.pop();
        possibleEvents.push(pairs[i+1])
    }
}


let events = 0;
    let currArrival = 0;
    let minDuration = 0;
    for(let i = 0; i < pairs.length; i++){
        if (currArrival !== pairs[i].arrival){
            if (currArrival + minDuration <= pairs[i].arrival){
                currArrival = pairs[i].arrival;
                minDuration = pairs[i].duration;
                events++;
            }
        }
        minDuration = Math.min(minDuration, pairs[i].duration)
    }
// maybe the ans
function maxEvents(arrival, duration) {
    if (arrival.length < 2) return arrival.length;
    // combine arrays into array of objects, sort by arrival time
    let pairs = []
    arrival.forEach((time, idx) => pairs.push({idx: idx, arrival: time, duration: duration[idx]}))
    pairs.sort(function(a, b){
            if(a.arrival < b.arrival) { return -1; }
            if(a.arrival > b.arrival) { return 1; }
            return 0;
    })
    let events = [0];
    for(let i = 0; i < pairs.length - 1; i++){
        if (pairs[i].duration + pairs[i].arrival <= pairs[i + 1].arrival){
            events.push(i)
        } else if (pairs[i].duration + pairs[i].arrival >= pairs[i + 1].arrival + pairs[i + 1].duration){
            events.pop();
            events.push(i+ 1)
        }
    }
    return events.length;
}
/*
working python
def maxEvents(arrival, duration):
  events = [0]
  arr_sorted, dur_sorted = zip(*sorted(zip(arrival, duration)))
  for i in range(len(arrival)-1):
    print("i", i)
    print(arr_sorted)
    print("arr_sorted + events[-1]", arr_sorted[events[-1]])
    print("events", events[-1])
    // add duration & arrival at index of events.length - 1
    if arr_sorted[events[-1]]+dur_sorted[events[-1]] <= arr_sorted[i+1]:
      events.append(i+1)
    elif arr_sorted[events[-1]]+dur_sorted[events[-1]] >= arr_sorted[i+1]+dur_sorted[i+1]:
      events.pop()
      events.append(i+1)
  return len(events)
*/
// MINE
/*
def max_events(arrival, duration):
    if len(arrival) <= 1:
        return len(arrival)
    possible_events = [0]
    sorted_arr, sorted_dur = zip(*sorted(zip(arrival, duration)))
    for i in range(len(arrival)-1):
        current_duration = sorted_arr[events[-1]] + sorted_dur[events[-1]]
        if current_duration <= sorted_arr[i + 1]:
            possible_events.append(i + 1)
        elif current_duration >= sorted_arr[i + 1] + sorted_dur[i + 1]:
            events.pop()
            events.append(i + 1)
    return
*/