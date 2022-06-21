'use strict';

/* getTime function
/ returns string represantation of time
/ example : 03:20:00:AM
*/
let getTime = () => {
  // init needed values from Date oject
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let period = hours < 12 ? "AM" : "PM";

  // set zero prefix if value of hours, seconds and minutes are one-digits
  // (for example 01:03:04 AM )
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // return formatted time
  let time = `${hours}:${minutes}:${seconds}:${period}`;
  return time;
}

// displayTime function
let displayTime = () => {

  // get current time
  let time = getTime();

  // set text content to #digitalClock element
  document.getElementById("displayClock").innerText = time;
  setTimeout(displayTime, 1000);
}

displayTime();
