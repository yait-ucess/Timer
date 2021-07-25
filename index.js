import { toggle_select, select_time } from "./module/clock.js";

const play_start = document.getElementById("play_start");
const play_btn = document.getElementById("play");
const play_stop = document.getElementById("play_stop");
const stop_btn = document.getElementById("stop");

let interval_id;
let clock_edit;
let clock_is_current;
let now_time;
let time;

clock_edit = document.getElementById("clock_edit");
clock_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];

toggle_select();
select_time();

clock_edit.addEventListener("mouseover", (event) => {
  if (clock_edit.innerHTML === clock_is_current.innerHTML) {
    event.target.style.color = "#7d7d7d";
  }
});
clock_edit.addEventListener("mouseout", (event) => {
  if (clock_edit.innerHTML === clock_is_current.innerHTML) {
    event.target.style.color = "#707070";
  }
});

play_start.addEventListener("click", () => {
  if (play_btn.classList.contains("fa-play-circle")) {

    clock_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];

    if (clock_edit.innerHTML === clock_is_current.innerHTML) {
      now_time = clock_is_current.innerHTML;
      time = parseInt(now_time) * 60 - 1;
    }

    interval_id = setInterval(clockTime, 1000);

    play_btn.classList.remove("fa-play-circle");
    play_btn.classList.add("fa-pause-circle");

  } else {
    clearInterval(interval_id);

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

  if (clock_edit.innerHTML !== "00:00") {
    time--;
  } else {
    time;
    clearInterval(interval_id);

    play_btn.classList.remove("fa-pause-circle");
    play_btn.classList.add("fa-play-circle");
  }
}

play_stop.addEventListener("click", () => {
  clearInterval(interval_id);
  console.log(play_btn.classList.contains("fa-pause-circle"));

  if (play_btn.classList.contains("fa-pause-circle")) {
    play_btn.classList.remove("fa-pause-circle");
    play_btn.classList.add("fa-play-circle");
  }

  clock_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];
  clock_edit.innerHTML = clock_is_current.innerHTML;
});