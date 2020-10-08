let eventsList = [ 
    {"name": "Halloween", "date": "2020-10-31"},
       {"name": "Diwali", "date": "2020-11-14"},
       {"name": "Indigenous Peoples' Day", "date": "2020-10-11"},
       {"name": "Veterans Day", "date": "2020-11-11"},
    ]


// function days_away_soonest(events){
//     let closestDate = 366
//     let closestHoliday = null;
//     for(let i = 0; i < events.length; i++){
//      let jsDate = date.number_of_days_between(date.parse(events[i].date), date.today())
//     if (jsDate >= 0){
//         if (Math.min(jsDate, closestDate) !== closestDate){
//           closestDate = jsDate;
//           closestHoliday = events[i]
//         }
//        }
//     }
//     if (!closestHoliday) return null
//     else return days_away(closestHoliday)
//   }


function days_away_soonest(events){
    // let closestDate = 366
    // let closestHoliday = null;
    let soonest = []
    for(let i = 0; i < events.length; i++){
     let jsDate = date.number_of_days_between(date.parse(events[i].date), date.today())
      if (jsDate < 30 && jsDate > 0) soonest.push([events[i]])
    }
    if (!closestHoliday) return {'Coming Soon': null; 'Up Next': []}
    // soonest needs to be sorted by key
    soonest = soonest.sort((a, b) => a.date - b.date)
    let upNext = soonest.map(holiday => holiday.name)
    return {'Coming Soon': days_away(closestHoliday), "Up Next": upNext }
  }

  function days_away(event){
    const dateGap = date.number_of_days_between(date.parse(event.date), date.today())
    if (dateGap === 0){
      return `${event.name} is today`
    } else if (dateGap === 1) {
      return `${event.name} is 1 day away.`
    } else if (dateGap > 1) {
      return `${event.name} is ${dateGap} days away.`
    } else {
      return null
    }
  }

  let date = {}

//To parse a date string “YYYY-MM-DD” into a date object
date.parse = (str) => Date.parse(str)  

// To get today’s date as date object
date.today = () => Date.parse("2020-09-28")

//To get number of days between two dates by subtracting date2 from date1. 
//The result can be +ve or -ve integer or zero
date.number_of_days_between = (date1, date2) => (date1.valueOf()-date2.valueOf())/(24*3600000)