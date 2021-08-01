import { toggle_select, select_time } from "./module/clock.js";

const sound            = document.getElementById("sound");
const sound_text       = document.getElementById("sound_text");
const sound_circle     = document.getElementById("sound_circle");
const sound_icon       = document.getElementById("sound_icon");
const clock            = document.getElementById("clock");
const clock_text       = document.getElementById("clock_text");
const clock_form       = document.querySelector(".clock_form");
const play_start       = document.getElementById("play_start");
const play_btn         = document.getElementById("play");
const play_stop        = document.getElementById("play_stop");
const stop_btn         = document.getElementById("stop");
const play_skip        = document.getElementById("play_skip");
const skip_btn         = document.getElementById("skip");
const clock_select_btn = document.getElementsByClassName("clock_select_btn");



let three_dot
let interval_id;
let clock_edit;
let clock_is_current;
let now_time;
let time;



three_dot = document.getElementsByClassName("three_dot_focus");
clock_edit = document.getElementById("clock_edit");
clock_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];



toggle_select();
select_time();



clock_edit.addEventListener("mouseover", (event) => {
  event.target.style.cursor = "default";
  if (clock_edit.innerHTML === clock_is_current.innerHTML) {
    if (!clock_form.classList.contains("clock_form_rest")) {
      event.target.style.cursor = "pointer";
      event.target.style.color = "#7d7d7d";
    }
  }
});
clock_edit.addEventListener("mouseout", (event) => {
  if (clock_edit.innerHTML === clock_is_current.innerHTML) {
    if (!clock_form.classList.contains("clock_form_rest")) {
      event.target.style.color = "#707070";
    }
    else {
      event.target.style.color = "#F7C100";
    }
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
  }
  else {
    time;
    clearInterval(interval_id);

    play_btn.classList.remove("fa-pause-circle");
    play_btn.classList.add("fa-play-circle");
  }
}



play_stop.addEventListener("click", () => {
  clearInterval(interval_id);

  console.log(clock.classList);
  console.log(clock.classList.contains("clock_rest"));
  if (clock.classList.contains("clock_rest")) {
    console.log("誠に有難う！");
  }
  if (play_btn.classList.contains("fa-pause-circle")) {
    play_btn.classList.remove("fa-pause-circle");
    play_btn.classList.add("fa-play-circle");
  }

  if (!clock_form.classList.contains("clock_form_rest")) {
    clock_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];
    clock_edit.innerHTML = clock_is_current.innerHTML;
  }

  // console.log(clock.classList.contains("clock_form_rest"));

  if (clock_form.classList.contains("clock_form_rest")) {

    document.body.style.background = "#F7C100";
    three_dot = document.getElementsByClassName("three_dot_rest");
    for (let i = 0; three_dot.length; i++) {
      three_dot[0].classList.add("three_dot_focus");
      three_dot[0].classList.remove("three_dot_rest");
    }

    sound.style.background = "#707070";
    sound_text.style.color = "#F7C100";
    sound_circle.style.background = "#F7C100";
    sound_icon.style.color = "#707070";

    clock.classList.remove("clock_rest");
    clock.classList.add("clock_focus");
    clock_text.innerHTML = "集中";
    clock_text.style.color = "#707070";

    clock_form.classList.remove("clock_form_rest");
    clock_form.classList.add("clock_form_focus");
    clock_edit.innerHTML = clock_is_current.innerHTML;
    clock_edit.style.color = "#707070";
    clock_edit.addEventListener("mouseover", (event) => {
      event.target.style.cursor = "default";
      if (clock_edit.innerHTML === clock_is_current.innerHTML) {
        if (!clock_form.classList.contains("clock_form_rest")) {
          event.target.style.cursor = "pointer";
          event.target.style.color = "#7d7d7d";
        }
      }
    });
    clock_edit.addEventListener("mouseout", (event) => {
      if (clock_edit.innerHTML === clock_is_current.innerHTML) {
        if (!clock_form.classList.contains("clock_form_rest")) {
          event.target.style.color = "#707070";
        }
        else {
          event.target.style.color = "#F7C100";
        }
      }
    });


    skip_btn.classList.remove("fas_skip_rest");
    skip_btn.classList.add("fas_skip_focus");
    
    stop_btn.classList.remove("fas_stop_rest");
    stop_btn.classList.add("fas_stop_focus");
    
    play_btn.classList.remove("fas_play_rest");
    play_btn.classList.add("fas_play_focus");
  }
});



play_skip.addEventListener("click", () => {
  clock_form.classList.add("clock_form_rest");

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
    clock_is_current.classList.remove("is_current");
    clock_select_btn[1].classList.add("is_current");
    clock_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];
    clock_edit.innerHTML = clock_is_current.innerHTML;
    clock_edit.style.color = "#F7C100";

    if (clock_form.classList.contains("clock_form_rest"))  {

      clock_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];
      if (clock_edit.innerHTML === clock_is_current.innerHTML) {
        now_time = clock_is_current.innerHTML;
        time = parseInt(now_time) * 60 - 1;
      }

      if (play_btn.classList.contains("fa-pause-circle")) {
        clearInterval(interval_id);  
      }
  
      interval_id = setInterval(clockTime, 1000);
  
      play_btn.classList.remove("fa-play-circle");
      play_btn.classList.add("fa-pause-circle");
  
    }
    else {
      clearInterval(interval_id);
  
      play_btn.classList.remove("fa-pause-circle");
      play_btn.classList.add("fa-play-circle");
    }

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

  for (let i = 0; three_dot.length; i++) {
    three_dot[0].classList.add("three_dot_rest");
    three_dot[0].classList.remove("three_dot_focus");
  }

  sound.style.background = "#F7C100";
  sound_text.style.color = "#707070";
  sound_circle.style.background = "#707070";
  sound_icon.style.color = "#F7C100";
  clock_text.innerHTML = "休憩";

  if (!clock_form.classList.contains("clock_form_rest")) {
    clock_form.classList.add("clock_form_rest");
  }
  else {
    clock_form.classList.remove("clock_form_rest");
  }
});