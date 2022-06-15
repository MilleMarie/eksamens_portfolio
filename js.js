const btn = document.querySelector(".toggle-btn");
const menu = document.querySelector(".main-menu");

function toggleMenu() {
  menu.classList.toggle("shown");
  const menuShown = menu.classList.contains("shown");

  if (menuShown) {
    console.log(menuShown);
    btn.textContent = " LUK ";
  } else {
    console.log(menuShown); 
    btn.textContent = "MENU";
  }
}
btn.addEventListener("click", toggleMenu);














// window.addEventListener("load", startGame);

// const con_good1 = document.querySelector("#good1_container");
// const spri_good1 =  document.querySelector("#good1_sprite");


// function startGame() {
//   console.log("startGame");

//   con_good1.classList.add("fall_good1");
// }