import { toggle_is_open, toggle_select, select_time } from "./module/clock.js";

const play_start = document.getElementById("play_start");
const play_btn = document.getElementById("play");
const clock_select = document.getElementById("clock_select");
const clock_select_btn = document.getElementsByClassName("clock_select_btn");
const clock_select_btn_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];

let start;
let interval_id;
let clock_edit;
let now_time;
let time;

console.log(clock_select_btn);
console.log(clock_select_btn_is_current);

clock_edit = document.getElementById("clock_edit");
// console.log(clock_edit);

now_time = clock_edit.innerHTML;
time = parseInt(now_time) * 60 - 1;
// console.log(time);

toggle_select();
select_time();

clock_edit = document.getElementById("clock_edit");
// console.log(clock_edit);
now_time = clock_edit.innerHTML;
time = parseInt(now_time) * 60 - 1;
// console.log(time);

// console.log(time);

play_start.addEventListener("click", () => {
  if (play_btn.classList[2] === "fa-play-circle") {
    start = new Date();
    // console.log(clock_select_btn[0]);
    // clock_edit = document.getElementById("clock_edit");
    // time = parseInt(clock_edit.innerHTML);
    // console.log(clock_edit);
    // console.log(now_time);

    // pauseボタンに切り替え
    play_btn.classList.remove("fa-play-circle");
    play_btn.classList.add("fa-pause-circle");

    // interval_id = setInterval(goClock, 1000);
    interval_id = setInterval(clockTime, 1000);

  } else {
    clearInterval(interval_id);

    // playボタンに切り替え
    play_btn.classList.remove("fa-pause-circle");
    play_btn.classList.add("fa-play-circle");
  }
});

const addZero = (value) => {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}

const clockTime = () => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);

  seconds = addZero(seconds);
  minutes = addZero(minutes);

  clock_edit.innerHTML = minutes + ":" + seconds;
  // clock_edit = document.getElementById("clock_edit");
  // now_time = clock_edit.innerHTML;
  // console.log(clock_edit);
  // console.log(now_time);

  if (parseInt(clock_edit.innerHTML) >= 0) {
    time--;
  } else {
    clearInterval(interval_id);
    time;
  }
}

// const goClock = () => {
//   const now = new Date();

//   let ms = now.getTime() - start.getTime();
//   let seconds = Math.floor(ms / 1000);
//   let minutes = Math.floor(seconds / 60);

//   seconds = seconds - minutes * 60;

//   seconds = addZero(seconds);
//   minutes = addZero(minutes);

//   clock_edit.innerHTML = minutes + ":" + seconds;
// };