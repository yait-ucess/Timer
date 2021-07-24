const play_btn = document.getElementById("play");
const clock_select = document.getElementById("clock_select");
const clock_select_btn = document.getElementsByClassName("clock_select_btn");

let clock_edit;
let clock_select_btn_is_current;

clock_edit = document.getElementById("clock_edit");
clock_select_btn_is_current = document.getElementsByClassName("clock_select_btn is_current");

const toggle_is_open = () => {
  clock_select.classList.toggle("clock_select");
  for (let i = 0; clock_select_btn.length; i++) {
    clock_select_btn[i].classList.toggle("is_open");
  };
};

const toggle_select = () => {
  clock_edit.addEventListener("click", () => {
    if (play_btn.classList.contains("fa-play-circle")) {
      toggle_is_open();
    }
  });  
};

const select_time = () => {
  clock_select_btn[0].addEventListener("click", () => {
    clock_select_btn_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];

    let select_time = clock_select_btn[0].innerHTML;
    clock_edit.innerHTML = select_time;
    clock_select_btn_is_current.classList.remove("is_current");
    clock_select_btn[0].classList.add("is_current");

    toggle_is_open();
  });
  
  clock_select_btn[1].addEventListener("click", () => {
    clock_select_btn_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];

    let select_time = clock_select_btn[1].innerHTML;
    clock_edit.innerHTML = select_time;
    clock_select_btn_is_current.classList.remove("is_current");
    clock_select_btn[1].classList.add("is_current");

    toggle_is_open();
  });
  
  clock_select_btn[2].addEventListener("click", () => {
    clock_select_btn_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];

    let select_time = clock_select_btn[2].innerHTML;
    clock_edit.innerHTML = select_time;
    clock_select_btn_is_current.classList.remove("is_current");
    clock_select_btn[2].classList.add("is_current");

    toggle_is_open();
  });
  
  clock_select_btn[3].addEventListener("click", () => {
    clock_select_btn_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];

    let select_time = clock_select_btn[3].innerHTML;
    clock_edit.innerHTML = select_time;
    clock_select_btn_is_current.classList.remove("is_current");
    clock_select_btn[3].classList.add("is_current");
    toggle_is_open();
  });
  
  clock_select_btn[4].addEventListener("click", () => {
    clock_select_btn_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];

    let select_time = clock_select_btn[4].innerHTML;
    clock_edit.innerHTML = select_time;
    clock_select_btn_is_current.classList.remove("is_current");
    clock_select_btn[4].classList.add("is_current");
    toggle_is_open();
  });
  
  clock_select_btn[5].addEventListener("click", () => {
    clock_select_btn_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];

    let select_time = clock_select_btn[5].innerHTML;
    clock_edit.innerHTML = select_time;
    clock_select_btn_is_current.classList.remove("is_current");
    clock_select_btn[5].classList.add("is_current");
    toggle_is_open();
  });
  
  clock_select_btn[6].addEventListener("click", () => {
    clock_select_btn_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];

    let select_time = clock_select_btn[6].innerHTML;
    clock_edit.innerHTML = select_time;
    clock_select_btn_is_current.classList.remove("is_current");
    clock_select_btn[6].classList.add("is_current");
    toggle_is_open();
  });
  
  clock_select_btn[7].addEventListener("click", () => {
    clock_select_btn_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];

    let select_time = clock_select_btn[7].innerHTML;
    clock_edit.innerHTML = select_time;
    clock_select_btn_is_current.classList.remove("is_current");
    clock_select_btn[7].classList.add("is_current");
    toggle_is_open();
  });
  
  clock_select_btn[8].addEventListener("click", () => {
    clock_select_btn_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];

    let select_time = clock_select_btn[8].innerHTML;
    clock_edit.innerHTML = select_time;
    clock_select_btn_is_current.classList.remove("is_current");
    clock_select_btn[8].classList.add("is_current");
    toggle_is_open();
  });
  
  clock_select_btn[9].addEventListener("click", () => {
    clock_select_btn_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];

    let select_time = clock_select_btn[9].innerHTML;
    clock_edit.innerHTML = select_time;
    clock_select_btn_is_current.classList.remove("is_current");
    clock_select_btn[9].classList.add("is_current");
    toggle_is_open();
  });
  
  clock_select_btn[10].addEventListener("click", () => {
    clock_select_btn_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];

    let select_time = clock_select_btn[10].innerHTML;
    clock_edit.innerHTML = select_time;
    clock_select_btn_is_current.classList.remove("is_current");
    clock_select_btn[10].classList.add("is_current");
    toggle_is_open();
  });

  clock_select_btn[11].addEventListener("click", () => {
    clock_select_btn_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];

    let select_time = clock_select_btn[11].innerHTML;
    clock_edit.innerHTML = select_time;
    clock_select_btn_is_current.classList.remove("is_current");
    clock_select_btn[11].classList.add("is_current");
    toggle_is_open();
  });

  clock_select_btn[12].addEventListener("click", () => {
    clock_select_btn_is_current = document.getElementsByClassName("clock_select_btn is_current")[0];

    let select_time = clock_select_btn[12].innerHTML;
    clock_edit.innerHTML = select_time;
    clock_select_btn_is_current.classList.remove("is_current");
    clock_select_btn[12].classList.add("is_current");
    toggle_is_open();
  });
};

export { toggle_select, select_time };