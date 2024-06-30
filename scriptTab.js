function openTab(evt, faneNavn) {
   // Declare all variables
   let i, faneInnhold, faneKnapp;

   // Get all elements with class="faneInnhold" and hide them
   faneInnhold = document.getElementsByClassName("faneInnhold");
   for (i = 0; i < faneInnhold.length; i++) {
      faneInnhold[i].style.display = "none";
   }

   // Get all elements with class="faneKnapp" and remove the class "active"
   faneKnapp = document.getElementsByClassName("faneKnapp");
   for (i = 0; i < faneKnapp.length; i++) {
      faneKnapp[i].className = faneKnapp[i].className.replace(" active", "");
   }

   // Show the current tab, and add an "active" class to the button that opened the tab
   document.getElementById(faneNavn).style.display = "block";
   evt.currentTarget.className += " active";
}
document.getElementById("startFane").click();

//https://www.w3schools.com/howto/howto_js_tabs.asp
