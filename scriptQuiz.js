let liv = 6;
document.getElementById("liv").textContent = liv;
function Spm1(svar, button) {
   const buttons = document.querySelectorAll(".flex button");

   buttons.forEach(function (btn) {
      btn.classList.remove("riktig", "feil");
      btn.disabled = false;
   });

   if (svar === "riktig") {
      button.classList.add("riktig");
      button.disabled = true;
      // Disable all other buttons
      buttons.forEach(function (btn) {
         if (btn !== button) {
            btn.disabled = true;
         }
      });
      document.getElementById("videre").style.display = "block";
   } else {
      button.classList.add("feil");
      liv--;
      document.getElementById("liv").textContent = liv;
   }
}
/*function Spm1(svar, button) {
   const buttons = document.querySelectorAll(".flex button");

   if (liv > 0) {
      buttons.forEach(function (btn) {
         btn.classList.remove("riktig", "feil");
         btn.disabled = true;
      });

      if (svar === "riktig") {
         button.classList.add("riktig");
         document.getElementById("videre").style.display = "block";
      } else {
         button.classList.add("feil");
         liv--;
         document.getElementById("liv").textContent = liv;
      }
   }
}*/
