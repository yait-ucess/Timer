import { toggle_select, select_time } from "./module/clock.js";

const clock_edit = document.getElementById("clock_edit");
// const play_start = document.getElementById("play_start");

toggle_select();
select_time();

let start;

play_start.addEventListener("click", () => {
  start = new Date();

  setInterval(goClock, 10);
});

const addZero = (value) => {
  if (value < 10) {
    value = "0" + value;
  }

  return value;
}

const goClock = () => {
  const now = new Date();

  let ms = now.getTime() - start.getTime();
  let seconds = Math.floor(ms / 1000);
  let minutes = Math.floor(seconds / 60);

  seconds = seconds - minutes * 60;

  seconds = addZero(seconds);
  minutes = addZero(minutes);

  // clock_edit.innerHTML = now.getTime() - start.getTime();
  clock_edit.innerHTML = minutes + ":" + seconds;
};