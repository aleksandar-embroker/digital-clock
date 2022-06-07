'use strict';

(() => {

  // init values from Date()
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day_period = "AM";

  // check if it's PM day period
  if(hours > 12) {
      day_period = "PM";
  }

  // set zero before the value when value less than 10
  // (for example 01:03:04 AM )
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = `${hours}:${minutes}:${seconds}:${day_period}`;
  console.log(time);
})()

