import { toggle_select, select_time } from "./module/clock.js";

const sound            = document.getElementById("sound");
const sound_text       = document.getElementById("sound_text");
const sound_circle     = document.getElementById("sound_circle");
const sound_icon       = document.getElementById("sound_icon");
const audio_sengoku    = document.getElementById("audio_sengoku");
const audio_honobono   = document.getElementById("audio_honobono");
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



let three_dot;
let interval_id;
let clock_edit;
let clock_is_current;
let now_time;
let time;



three_dot = document.getElementsByClassName("three_dot_focus");
clock_edit = document.getElementById("clock_edit");
clock_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];



const soundFocusOn = () => {
  if (sound.classList.contains("sound_rest_on")) {
    sound.classList.remove("sound_rest_on");
    sound_text.classList.remove("sound_rest_on_text");
    sound_circle.classList.remove("sound_rest_on_circle");
    sound_icon.classList.remove("sound_rest_on_icon");
  }
  sound.classList.remove("sound_focus_off");
  sound.classList.add("sound_focus_on");
  sound_text.classList.remove("sound_focus_off_text");
  sound_text.classList.add("sound_focus_on_text");
  sound_text.innerHTML = "ON";
  sound_circle.classList.remove("sound_focus_off_circle");
  sound_circle.classList.add("sound_focus_on_circle");
  sound_icon.classList.remove("sound_focus_off_icon");
  sound_icon.classList.add("sound_focus_on_icon");
  sound_icon.classList.remove("fa-volume-mute");
  sound_icon.classList.add("fa-volume-up");
}



const soundFocusOff = () => {
  if (sound.classList.contains("sound_rest_off")) {
    sound.classList.remove("sound_rest_off");
    sound_text.classList.remove("sound_rest_off_text");
    sound_circle.classList.remove("sound_rest_off_circle");
    sound_icon.classList.remove("sound_rest_off_icon");
  }
  sound.classList.remove("sound_focus_on");
  sound.classList.add("sound_focus_off");
  sound_text.classList.remove("sound_focus_on_text");
  sound_text.classList.add("sound_focus_off_text");
  sound_text.innerHTML = "OFF";
  sound_circle.classList.remove("sound_focus_on_circle");
  sound_circle.classList.add("sound_focus_off_circle");
  sound_icon.classList.remove("sound_focus_on_icon");
  sound_icon.classList.add("sound_focus_off_icon");
  sound_icon.classList.remove("fa-volume-up");
  sound_icon.classList.add("fa-volume-mute");
}



const soundRestOn = () => {
  if (sound.classList.contains("sound_focus_on")) {
    sound.classList.remove("sound_focus_on");
    sound_text.classList.remove("sound_focus_on_text");
    sound_circle.classList.remove("sound_focus_on_circle");
    sound_icon.classList.remove("sound_focus_on_icon");
  }
  sound.classList.remove("sound_rest_off");
  sound.classList.add("sound_rest_on");
  sound_text.classList.remove("sound_rest_off_text");
  sound_text.classList.add("sound_rest_on_text");
  sound_text.innerHTML = "ON";
  sound_circle.classList.remove("sound_rest_off_circle");
  sound_circle.classList.add("sound_rest_on_circle");
  sound_icon.classList.remove("sound_rest_off_icon");
  sound_icon.classList.add("sound_rest_on_icon");
  sound_icon.classList.remove("fa-volume-mute");
  sound_icon.classList.add("fa-volume-up");
}



const soundRestOff = () => {
  if (sound.classList.contains("sound_focus_off")) {
    sound.classList.remove("sound_focus_off");
    sound_text.classList.remove("sound_focus_off_text");
    sound_circle.classList.remove("sound_focus_off_circle");
    sound_icon.classList.remove("sound_focus_off_icon");
  }
  sound.classList.remove("sound_rest_on");
  sound.classList.add("sound_rest_off");
  sound_text.classList.remove("sound_rest_on_text");
  sound_text.classList.add("sound_rest_off_text");
  sound_text.innerHTML = "OFF";
  sound_circle.classList.remove("sound_rest_on_circle");
  sound_circle.classList.add("sound_rest_off_circle");
  sound_icon.classList.remove("sound_rest_on_icon");
  sound_icon.classList.add("sound_rest_off_icon");
  sound_icon.classList.remove("fa-volume-up");
  sound_icon.classList.add("fa-volume-mute");
}



// soundボタンクリック時の挙動
sound.addEventListener("click", () => {
  if (clock.classList.contains("clock_focus")) {
    if (sound.classList.contains("sound_focus_on")) {
      soundFocusOff();
      audio_sengoku.pause();
      audio_sengoku.currentTime = 0;
    }
    else if (sound.classList.contains("sound_focus_off")) {
      soundFocusOn();
      audio_sengoku.play();
    }
  }
  else if (clock.classList.contains("clock_rest")) {
    if (sound.classList.contains("sound_rest_on")) {
      soundRestOff();
      audio_honobono.pause();
      audio_honobono.currentTime = 0;
    }
    else if (sound.classList.contains("sound_rest_off")) {
      soundRestOn();
    }
  }
});



toggle_select();
select_time();



// タイマーhover時の挙動
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



// playボタンクリック時の挙動
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



// 00:00のように４桁で表現する
const addZero = (value) => {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}



// 時間の計算処理
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

    if (sound.classList.contains("sound_focus_on")) {
      audio_sengoku.pause();
      audio_sengoku.currentTime = 0;
      audio_honobono.play();
    }
    else if(sound.classList.contains("sound_rest_on")) {
      audio_honobono.pause();
      audio_honobono.currentTime = 0;
      audio_sengoku.play();
    }

    play_btn.classList.remove("fa-pause-circle");
    play_btn.classList.add("fa-play-circle");

    if (clock.classList.contains("clock_focus")) {
      rest_color();
      clockJudgment();
      btnChange();

      if (sound.classList.contains("sound_focus_on")) {
        soundRestOn();
      }
      else if (sound.classList.contains("sound_focus_off")) {
        soundRestOff();
      }
    }
    else {
      focus_color();

      if (sound.classList.contains("sound_rest_on")) {
        soundFocusOn();
      }
      else if (sound.classList.contains("sound_rest_off")) {
        soundFocusOff();
      }

      clock_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];
      if (clock_edit.innerHTML === clock_is_current.innerHTML) {
        now_time = clock_is_current.innerHTML;
        time = parseInt(now_time) * 60 - 1;
      }
      interval_id = setInterval(clockTime, 1000);
      play_btn.classList.remove("fa-play-circle");
      play_btn.classList.add("fa-pause-circle");
    }
  }
}



const focus_color = () => {
  clock.classList.add("clock_focus");
  clock.classList.remove("clock_rest");
  skip_btn.classList.remove("fas_skip_rest");
  skip_btn.classList.add("fas_skip_focus");
  stop_btn.classList.remove("fas_stop_rest");
  stop_btn.classList.add("fas_stop_focus");
  play_btn.classList.remove("fas_play_rest");
  play_btn.classList.add("fas_play_focus");
  document.body.style.background = "#F7C100";
  clock_is_current.classList.remove("is_current");
  clock_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];

  if (clock_is_current === undefined) {
    clock_select_btn[0].classList.add("is_current");
  }

  clock_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];
  clock_edit.innerHTML = clock_is_current.innerHTML;
  clock_edit.style.color = "#707070";
  clock_text.style.color = "#707070";
  three_dot = document.getElementsByClassName("three_dot_rest");

  for (let i = 0; three_dot.length; i++) {
    three_dot[0].classList.add("three_dot_focus");
    three_dot[0].classList.remove("three_dot_rest");
  }

  clock_text.innerHTML = "集中";
}



const rest_color = () => {
  document.body.style.background = "#707070";
  clock_select_btn[0].classList.add("is_current");
  clock_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];
  clock_edit.innerHTML = clock_is_current.innerHTML;

  if (clock_edit.innerHTML === clock_is_current.innerHTML) {
    now_time = clock_is_current.innerHTML;
    time = parseInt(now_time) * 60 - 1;
  }

  clearInterval(interval_id);
  interval_id = setInterval(clockTime, 1000);

  play_btn.classList.remove("fa-play-circle");
  play_btn.classList.add("fa-pause-circle");

  clock_edit.style.color = "#F7C100";
  clock_text.style.color = "#F7C100";
  three_dot = document.getElementsByClassName("three_dot_focus");

  for (let i = 0; three_dot.length; i++) {
    three_dot[0].classList.add("three_dot_rest");
    three_dot[0].classList.remove("three_dot_focus");
  }

  clock_text.innerHTML = "休憩";
}



// 時間部分のhoverイベント
const mouseEvent = () => {
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
}



// focusとrestの反転
const clockJudgment = () => {
  if (clock.classList.contains("clock_focus")) {
    clock.classList.add("clock_rest");
    clock.classList.remove("clock_focus");
  }
  else if (clock.classList.contains("clock_rest")) {
    clock.classList.add("clock_focus");
    clock.classList.remove("clock_rest");
  }
}



const btnChange = () => {
  skip_btn.classList.remove("fas_skip_focus");
  skip_btn.classList.add("fas_skip_rest");
  
  stop_btn.classList.remove("fas_stop_focus");
  stop_btn.classList.add("fas_stop_rest");
  
  play_btn.classList.remove("fas_play_focus");
  play_btn.classList.add("fas_play_rest");
}



// stopボタンクリック時の挙動
play_stop.addEventListener("click", () => {
  clearInterval(interval_id);
  
  if (sound.classList.contains("sound_focus_on")) {
    audio_sengoku.pause();
    audio_sengoku.currentTime = 0;
  }
  else if(sound.classList.contains("sound_rest_on")) {
    audio_honobono.pause();
    audio_honobono.currentTime = 0;
  }

  if (clock.classList.contains("clock_rest")) {
    focus_color();
  }
  
  if (play_btn.classList.contains("fa-pause-circle")) {
    play_btn.classList.remove("fa-pause-circle");
    play_btn.classList.add("fa-play-circle");
  }

  if (!clock_form.classList.contains("clock_form_rest")) {
    clock_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];
    clock_edit.innerHTML = clock_is_current.innerHTML;
  }

  if (clock_form.classList.contains("clock_form_rest")) {
    if (sound.classList.contains("sound_rest_on")) {
      sound.classList.remove("sound_rest_on");
      sound.classList.add("sound_focus_on");
      sound_text.classList.remove("sound_rest_on_text");
      sound_text.classList.add("sound_focus_on_text");
      sound_circle.classList.remove("sound_rest_on_circle");
      sound_circle.classList.add("sound_focus_on_circle");
      sound_icon.classList.remove("sound_rest_on_icon");
      sound_icon.classList.add("sound_focus_on_icon");
    }
    else if (sound.classList.contains("sound_rest_off")) {
      sound.classList.remove("sound_rest_off");
      sound.classList.add("sound_focus_off");
      sound_text.classList.remove("sound_rest_off_text");
      sound_text.classList.add("sound_focus_off_text");
      sound_circle.classList.remove("sound_rest_off_circle");
      sound_circle.classList.add("sound_focus_off_circle");
      sound_icon.classList.remove("sound_rest_off_icon");
      sound_icon.classList.add("sound_focus_off_icon");
    }

    document.body.style.background = "#F7C100";
    three_dot = document.getElementsByClassName("three_dot_rest");
    for (let i = 0; three_dot.length; i++) {
      three_dot[0].classList.add("three_dot_focus");
      three_dot[0].classList.remove("three_dot_rest");
    }

    clock.classList.remove("clock_rest");
    clock.classList.add("clock_focus");
    clock_text.innerHTML = "集中";

    clock_form.classList.remove("clock_form_rest");
    clock_form.classList.add("clock_form_focus");
    clock_edit.innerHTML = clock_is_current.innerHTML;

    mouseEvent();
  }
});



// skipボタンクリック時の挙動
play_skip.addEventListener("click", () => {
  if (sound.classList.contains("sound_focus_on")) {
    audio_sengoku.pause();
    audio_sengoku.currentTime = 0;
    audio_honobono.play();
  }
  else if(sound.classList.contains("sound_rest_on")) {
    audio_honobono.pause();
    audio_honobono.currentTime = 0;
    audio_sengoku.play();
    
  }

  if (play_skip.classList.contains("focus")) {
    play_skip.classList.remove("focus");
    play_skip.classList.add("rest");
  }
  else if (play_skip.classList.contains("rest")) {
    play_skip.classList.remove("rest");
    play_skip.classList.add("focus");

    if (clock_form.classList.contains("clock_form_rest"))  {
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
  }



  // soundボタンの色変更
  if (sound.classList.contains("sound_focus_on")) {
    soundRestOn();
  }
  else if (sound.classList.contains("sound_focus_off")) {
    soundRestOff();
  }
  else if (sound.classList.contains("sound_rest_on")) {
    soundFocusOn();
  }
  else if (sound.classList.contains("sound_rest_off")) {
    soundFocusOff();
  }



  // clock_focus, clock_restの追加・削除
  if (clock.classList.contains("clock_focus")) {
    clock.classList.add("clock_rest");
    clock.classList.remove("clock_focus");
  }
  else if (clock.classList.contains("clock_rest")) {
    clock.classList.add("clock_focus");
    clock.classList.remove("clock_rest");
  }



  // clock_form_restの追加・削除
  if (!clock_form.classList.contains("clock_form_rest")) {
    clock_form.classList.add("clock_form_rest");
  }
  else {
    clock_form.classList.remove("clock_form_rest");
  }



  // ３ボタンの変更
  skip_btn.classList.remove("fas_skip_focus");
  skip_btn.classList.add("fas_skip_rest");
  
  stop_btn.classList.remove("fas_stop_focus");
  stop_btn.classList.add("fas_stop_rest");
  
  play_btn.classList.remove("fas_play_focus");
  play_btn.classList.add("fas_play_rest");



  if (clock_form.classList.contains("clock_form_rest")) {
    rest_color();
  }
  else {
    focus_color();
    clearInterval(interval_id);
    clock_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];
    clock_edit.innerHTML = clock_is_current.innerHTML;
  
    if (clock_edit.innerHTML === clock_is_current.innerHTML) {
      now_time = clock_is_current.innerHTML;
      time = parseInt(now_time) * 60 - 1;
    }
  
    interval_id = setInterval(clockTime, 1000);
  }
  mouseEvent();
});
