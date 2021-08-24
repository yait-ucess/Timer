import { toggle_select, select_time } from "./module/clock.js";

const sound            = document.getElementById("sound");
const sound_text       = document.getElementById("sound_text");
const sound_circle     = document.getElementById("sound_circle");
const sound_icon       = document.getElementById("sound_icon");
const audio_focus      = document.getElementById("audio_focus");
const audio_rest       = document.getElementById("audio_rest");
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



let interval_id;
let clock_edit;
let clock_is_current;
let now_time;
let time;



clock_edit = document.getElementById("clock_edit");
clock_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];



class soundSwitch {
  constructor(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    if (sound.classList.contains(`sound_${a}`)) {
      sound.classList.remove(`sound_${b}`);
      sound_text.classList.remove(`sound_${c}_text`);
      sound_circle.classList.remove(`sound_${d}_circle`);
      sound_icon.classList.remove(`sound_${e}_icon`);
    }
    sound.classList.remove(`sound_${f}`);
    sound.classList.add(`sound_${g}`);
    sound_text.classList.remove(`sound_${h}_text`);
    sound_text.classList.add(`sound_${i}_text`);
    sound_text.innerHTML = j;
    sound_circle.classList.remove(`sound_${k}_circle`);
    sound_circle.classList.add(`sound_${l}_circle`);
    sound_icon.classList.remove(`sound_${m}_icon`);
    sound_icon.classList.add(`sound_${n}_icon`);
    sound_icon.classList.remove(`fa-volume-${o}`);
    sound_icon.classList.add(`fa-volume-${p}`);
  }
}



// soundボタンクリック時の挙動
if (sound) {
  sound.addEventListener("click", () => {
    if (clock.classList.contains("clock_focus")) {
      if (sound.classList.contains("sound_focus_on")) {
        // soundFocusOff();
        new soundSwitch(
          "rest_off", "rest_off", "rest_off", "rest_off", "rest_off", "focus_on", "focus_off", "focus_on", "focus_off", "OFF",
          "focus_on", "focus_off", "focus_on", "focus_off", "up", "mute"
        );
        // console.log(soundFocusOn);
        // soundFocusOn();
        audio_focus.pause();
        audio_focus.currentTime = 0;
      }
      else if (sound.classList.contains("sound_focus_off")) {
        // soundFocusOn();
        new soundSwitch(
          "rest_on", "rest_on", "rest_on", "rest_on", "rest_on", "focus_off", "focus_on", "focus_off", "focus_on", "ON",
          "focus_off", "focus_on", "focus_off", "focus_on", "mute", "up"
        );
        audio_focus.play();
      }
    }
    else if (clock.classList.contains("clock_rest")) {
      if (sound.classList.contains("sound_rest_on")) {
        // soundRestOff();
        new soundSwitch(
          "focus_off", "focus_off", "focus_off", "focus_off", "focus_off", "rest_on", "rest_off", "rest_on", "rest_off", "OFF",
          "rest_on", "rest_off", "rest_on", "rest_off", "up", "mute"
        );
        audio_rest.pause();
        audio_rest.currentTime = 0;
      }
      else if (sound.classList.contains("sound_rest_off")) {
        // soundRestOn();
        new soundSwitch(
          "focus_on", "focus_on", "focus_on", "focus_on", "focus_on", "rest_off", "rest_on", "rest_off", "rest_on", "ON",
          "rest_off", "rest_on", "rest_off", "rest_on", "mute", "up"
        );
        audio_rest.play();
      }
    }
  });  
}


toggle_select();
select_time();



// タイマーhover時の挙動
if (clock_edit) {
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


// playボタンクリック時の挙動
if (play_start) {
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
}


// 00:00のように４桁で表現する
const addZero = (value) => {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
};

console.log("0" + 9);


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
      audio_focus.pause();
      audio_focus.currentTime = 0;
      audio_rest.play();
    }
    else if(sound.classList.contains("sound_rest_on")) {
      audio_rest.pause();
      audio_rest.currentTime = 0;
      audio_focus.play();
    }

    play_btn.classList.remove("fa-pause-circle");
    play_btn.classList.add("fa-play-circle");

    if (clock.classList.contains("clock_focus")) {
      rest_color();
      clockJudgment();
      btnChange();

      if (sound.classList.contains("sound_focus_on")) {
        // soundRestOn();
        new soundSwitch(
          "focus_on", "focus_on", "focus_on", "focus_on", "focus_on", "rest_off", "rest_on", "rest_off", "rest_on", "ON",
          "rest_off", "rest_on", "rest_off", "rest_on", "mute", "up"
        );
      }
      else if (sound.classList.contains("sound_focus_off")) {
        // soundRestOff();
        new soundSwitch(
          "focus_off", "focus_off", "focus_off", "focus_off", "focus_off", "rest_on", "rest_off", "rest_on", "rest_off", "OFF",
          "rest_on", "rest_off", "rest_on", "rest_off", "up", "mute"
        );
      }
    }
    else {
      focus_color();

      if (sound.classList.contains("sound_rest_on")) {
        // soundFocusOn();
        new soundSwitch(
          "rest_on", "rest_on", "rest_on", "rest_on", "rest_on", "focus_off", "focus_on", "focus_off", "focus_on", "ON",
          "focus_off", "focus_on", "focus_off", "focus_on", "mute", "up"
        );
      }
      else if (sound.classList.contains("sound_rest_off")) {
        // soundFocusOff();
        new soundSwitch(
          "rest_off", "rest_off", "rest_off", "rest_off", "rest_off", "focus_on", "focus_off", "focus_on", "focus_off", "OFF",
          "focus_on", "focus_off", "focus_on", "focus_off", "up", "mute"
        );
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
};



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
  clock_text.innerHTML = "Focus";
};



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
  clock_text.innerHTML = "Rest";
};



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
};



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
};



const btnChange = () => {
  skip_btn.classList.remove("fas_skip_focus");
  skip_btn.classList.add("fas_skip_rest");
  
  stop_btn.classList.remove("fas_stop_focus");
  stop_btn.classList.add("fas_stop_rest");
  
  play_btn.classList.remove("fas_play_focus");
  play_btn.classList.add("fas_play_rest");
};



// stopボタンクリック時の挙動
if (play_stop) {
  play_stop.addEventListener("click", () => {
    clearInterval(interval_id);
    
    if (sound.classList.contains("sound_focus_on")) {
      audio_focus.pause();
      audio_focus.currentTime = 0;
    }
    else if(sound.classList.contains("sound_rest_on")) {
      audio_rest.pause();
      audio_rest.currentTime = 0;
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
      clock.classList.remove("clock_rest");
      clock.classList.add("clock_focus");
      clock_text.innerHTML = "Focus";
      clock_form.classList.remove("clock_form_rest");
      clock_form.classList.add("clock_form_focus");
      clock_edit.innerHTML = clock_is_current.innerHTML;
  
      mouseEvent();
    }
  });  
}


// skipボタンクリック時の挙動
if (play_skip) {
  play_skip.addEventListener("click", () => {
    if (sound.classList.contains("sound_focus_on")) {
      audio_focus.pause();
      audio_focus.currentTime = 0;
      audio_rest.play();
    }
    else if(sound.classList.contains("sound_rest_on")) {
      audio_rest.pause();
      audio_rest.currentTime = 0;
      audio_focus.play();
      
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
      // soundRestOn();
      new soundSwitch(
        "focus_on", "focus_on", "focus_on", "focus_on", "focus_on", "rest_off", "rest_on", "rest_off", "rest_on", "ON",
        "rest_off", "rest_on", "rest_off", "rest_on", "mute", "up"
      );
    }
    else if (sound.classList.contains("sound_focus_off")) {
      // soundRestOff();
      new soundSwitch(
        "focus_off", "focus_off", "focus_off", "focus_off", "focus_off", "rest_on", "rest_off", "rest_on", "rest_off", "OFF",
        "rest_on", "rest_off", "rest_on", "rest_off", "up", "mute"
      );
    }
    else if (sound.classList.contains("sound_rest_on")) {
      // soundFocusOn();
      new soundSwitch(
        "rest_on", "rest_on", "rest_on", "rest_on", "rest_on", "focus_off", "focus_on", "focus_off", "focus_on", "ON",
        "focus_off", "focus_on", "focus_off", "focus_on", "mute", "up"
      );
    }
    else if (sound.classList.contains("sound_rest_off")) {
      // soundFocusOff();
      new soundSwitch(
        "rest_off", "rest_off", "rest_off", "rest_off", "rest_off", "focus_on", "focus_off", "focus_on", "focus_off", "OFF",
        "focus_on", "focus_off", "focus_on", "focus_off", "up", "mute"
      );
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
}

// const addZero = (value) => {
//   if (value < 10) {
//     value = "0" + value;
//   }
//   return value;
// };
const multiplication = (base, height) => {
  return base * height;
};

export { addZero, multiplication };