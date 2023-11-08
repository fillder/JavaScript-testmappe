function Spm1(svar, button) {
   if (svar === "riktig") {
      button.classList.add("riktig");
      //   button.disabled = true;
      document.getElementById("videre").style.display = "block";
   } else {
      button.classList.add("feil");
      //   button.disabled = true;
   }
}
