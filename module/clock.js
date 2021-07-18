const clock_edit = document.getElementById("clock_edit");
const clock_select = document.getElementById("clock_select");
const clock_select_btn = document.getElementsByClassName("clock_select_btn");

const toggle_is_open = () => {
  clock_select.classList.toggle("clock_select");
  for (let i = 0; clock_select_btn.length; i++) {
    clock_select_btn[i].classList.toggle("is_open");
  };
};

const toggle_select = () => {
  clock_edit.addEventListener("click", () => {
    toggle_is_open();
  });  
};

const select_time = () => {
  clock_select_btn[0].addEventListener("click", () => {
    let select_time = clock_select_btn[0].innerHTML;
    clock_edit.innerHTML = select_time;
    toggle_is_open();
  });
  
  clock_select_btn[1].addEventListener("click", () => {
    let select_time = clock_select_btn[1].innerHTML;
    clock_edit.innerHTML = select_time;
    toggle_is_open();
  });
  
  clock_select_btn[2].addEventListener("click", () => {
    let select_time = clock_select_btn[2].innerHTML;
    clock_edit.innerHTML = select_time;
    toggle_is_open();
  });
  
  clock_select_btn[3].addEventListener("click", () => {
    let select_time = clock_select_btn[3].innerHTML;
    clock_edit.innerHTML = select_time;
    toggle_is_open();
  });
  
  clock_select_btn[4].addEventListener("click", () => {
    let select_time = clock_select_btn[4].innerHTML;
    clock_edit.innerHTML = select_time;
    toggle_is_open();
  });
  
  clock_select_btn[5].addEventListener("click", () => {
    let select_time = clock_select_btn[5].innerHTML;
    clock_edit.innerHTML = select_time;
    toggle_is_open();
  });
  
  clock_select_btn[6].addEventListener("click", () => {
    let select_time = clock_select_btn[6].innerHTML;
    clock_edit.innerHTML = select_time;
    toggle_is_open();
  });
  
  clock_select_btn[7].addEventListener("click", () => {
    let select_time = clock_select_btn[7].innerHTML;
    clock_edit.innerHTML = select_time;
    toggle_is_open();
  });
  
  clock_select_btn[8].addEventListener("click", () => {
    let select_time = clock_select_btn[8].innerHTML;
    clock_edit.innerHTML = select_time;
    toggle_is_open();
  });
  
  clock_select_btn[9].addEventListener("click", () => {
    let select_time = clock_select_btn[9].innerHTML;
    clock_edit.innerHTML = select_time;
    toggle_is_open();
  });
  
  clock_select_btn[10].addEventListener("click", () => {
    let select_time = clock_select_btn[10].innerHTML;
    clock_edit.innerHTML = select_time;
    toggle_is_open();
  });
};

export { toggle_select, select_time };



  // let times = clock_edit.innerHTML;
  // const time = parseInt(times);
  // console.log(time);


  // let now = new Date();
  // let seconds = now.getSeconds();
  // seconds = addZero(seconds);

  // let minutes = now.getMinutes();
  // minutes = addZero(minutes);

  // let hours = now.getHours();
  // hours = addZero(hours);

  // console.log(now);
  // console.log(seconds);
  // console.log(minutes);
  // console.log(hours);
  // clock_edit.innerHTML = hours + ":" + minutes + ":" + seconds;