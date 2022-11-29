const hamburger = document.querySelector(".hb-menu");
const navMenu = document.querySelector(".nav-list");


hamburger.addEventListener ("click" , function () {
   hamburger.classList.toggle("active");
   navMenu.classList.toggle("active");

})