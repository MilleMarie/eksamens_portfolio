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


window.addEventListener("load", startSlider);



const con_slide = document.querySelector("#col_3-6");
const spri_slide =  document.querySelector("#slider");


function startSlider() {

    spri_slide.classList.add("slide_animation");


}

