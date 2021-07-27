import { toggle_select, select_time } from "./module/clock.js";

const three_dot = document.getElementsByClassName("three_dot_focus");
const clock = document.getElementById("clock");
const clock_text = document.getElementById("clock_text");
const play_start = document.getElementById("play_start");
const play_btn = document.getElementById("play");
const play_stop = document.getElementById("play_stop");
const stop_btn = document.getElementById("stop");
const play_skip = document.getElementById("play_skip");
const skip_btn = document.getElementById("skip");

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

  if (play_btn.classList.contains("fa-pause-circle")) {
    play_btn.classList.remove("fa-pause-circle");
    play_btn.classList.add("fa-play-circle");
  }

  clock_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];
  clock_edit.innerHTML = clock_is_current.innerHTML;
});

play_skip.addEventListener("click", () => {
  if (play_skip.classList.contains("focus")) {
    play_skip.classList.remove("focus");
    play_skip.classList.add("rest");
  }
  else if (play_skip.classList.contains("rest")) {
    play_skip.classList.remove("rest");
    play_skip.classList.add("focus");
  }

  if (play_skip.classList.contains("rest")) {
    document.body.style.background = "#707070";
    clock_edit.style.color = "#F7C100";

    if (clock.classList.contains("clock_focus")) {
      clock.classList.remove("clock_focus");
      clock.classList.add("clock_rest");
    }
    else if (clock.classList.contains("clock_rest")) {
      clock.classList.remove("clock_rest");
      clock.classList.add("clock_focus");
    }
  }

  clock_text.style.color = "#F7C100";

  skip_btn.classList.remove("fas_skip_focus");
  skip_btn.classList.add("fas_skip_rest");
  
  stop_btn.classList.remove("fas_stop_focus");
  stop_btn.classList.add("fas_stop_rest");
  
  play_btn.classList.remove("fas_play_focus");
  play_btn.classList.add("fas_play_rest");

  console.log(three_dot.length);
  for (let i = 0; three_dot.length; i++) {
    three_dot[i].classList.remove("three_dot_focus");
    three_dot[i].classList.add("three_dot_rest");
  }
});