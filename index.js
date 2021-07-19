import { toggle_select, select_time } from "./module/clock.js";

let clock_edit = document.getElementById("clock_edit");
const play_start = document.getElementById("play_start");
const play_btn = document.getElementById("play");

toggle_select();
select_time();

let start;
let interval_id;

play_start.addEventListener("click", () => {
  if (play_btn.classList[2] === "fa-play-circle") {
    // start = new Date();
    let time = parseInt(clock_edit.innerHTML) * 60 - 1;
    console.log(time);

    // interval_id = setInterval(goClock, 1000);

    interval_id = setInterval(() => {
      let seconds = Math.floor(time % 60);
      let minutes = Math.floor(time / 60);

      seconds = addZero(seconds);
      minutes = addZero(minutes);

      console.log(time);
      console.log(seconds);
      console.log(minutes);

      clock_edit.innerHTML = minutes + ":" + seconds;
      time--;
   }, 1000);

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