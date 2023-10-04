"use strict"

/* Call functions */
runClock();
setInterval(runClock, 1000);


function runClock() {
    
    var thisDay = new Date(); // get today's date
    var thisDate = thisDay.toLocaleDateString(); // return date in string form
    var thisDayNum = thisDay.getDay(); // get today's day (0-6)
    var thisWeekday = getWeekday(thisDayNum); // return a string 
    var thisTime = thisDay.toLocaleTimeString(); // return time in string form

    document.getElementById("date").textContent = thisDate; 
    document.getElementById("wday").textContent = thisWeekday;
    document.getElementById("time").textContent = thisTime;
}


/*
   function getWeekday(dayNum)
      Returns the text of the day of the week where dayNum
      is the number of the week from 0 (Sunday) to 6 (Saturday)
*/
function getWeekday(dayNum) {

    var wDays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    return wDays[dayNum];

}

