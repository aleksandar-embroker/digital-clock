'use strict';

// example of Immediately invoked function expression
(() => {
  // init needed values from Date oject
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  const period = hours < 12 ? "AM" : "PM";

  // set zero before the value when value less than 10
  // (for example 01:03:04 AM )
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = `${hours}:${minutes}:${seconds}:${period}`;
  console.log(time);

  // console.log(typeof(time))
  // output: string
  // Okay maybe we want to return a value in next version?
})()
