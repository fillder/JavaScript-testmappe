let prevScrollPos = window.pageYOffset;
const header = document.getElementById("header");

window.onscroll = function () {
   const currentScrollPos = window.pageYOffset;

   if (prevScrollPos > currentScrollPos) {
      // Scrolling up
      header.style.transform = "translateY(0)";
   } else {
      // Scrolling down
      header.style.transform = "translateY(-100%)";
   }

   prevScrollPos = currentScrollPos;
};
