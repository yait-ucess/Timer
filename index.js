const clock_edit = document.getElementById("clock_edit");
const clock_select = document.getElementById("clock_select");
const clock_select_btn = document.getElementsByClassName("clock_select_btn");

clock_edit.addEventListener("click", () => {
  clock_select.classList.toggle("clock_select");
  console.log(clock_select.classList);
  console.log(clock_edit);

  for (let i = 0; clock_select_btn.length; i++) {
    clock_select_btn[i].classList.toggle("is_open");
  }
});


