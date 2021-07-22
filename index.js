import { toggle_select, select_time } from "./module/clock.js";

const play_start = document.getElementById("play_start");
const play_btn = document.getElementById("play");

let interval_id;
let clock_edit;
let clock_is_current;
let now_time;
let time;

clock_edit = document.getElementById("clock_edit");
clock_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];
console.log(clock_is_current);
toggle_select();
select_time();

play_start.addEventListener("click", () => {
  if (play_btn.classList[2] === "fa-play-circle") {
    clock_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];
    console.log(clock_is_current);
    if (clock_edit.innerHTML === clock_is_current.innerHTML) {
      now_time = clock_is_current.innerHTML;
      time = parseInt(now_time) * 60 - 1;
    }

    interval_id = setInterval(clockTime, 1000);

    // pauseボタンに切り替え
    play_btn.classList.remove("fa-play-circle");
    play_btn.classList.add("fa-pause-circle");

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

  if (parseInt(clock_edit.innerHTML) >= 0) {
    time--;
  } else {
    clearInterval(interval_id);
    time;
  }
}