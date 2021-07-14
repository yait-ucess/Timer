const clock_edit = document.getElementById("clock_edit");
const clock_select = document.getElementById("clock_select");

clock_edit.addEventListener("click", () => {
  clock_select.classList.toggle("clock_select");
  // console.log(element.classList);
  // this.classList.toggle("clock_select");
});