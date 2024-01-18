let pengerGebi = document.getElementById("viserAntallKroner");

// Gir variabelen "penger" samme verdi som "penger" lagret i localStorage ELLER veriden 3.
let penger = parseInt(localStorage.getItem("penger")) || 3;

// Definerer et datapunkt i localStorage med samme navn som variabelen vi ønsker å lagre
localStorage.setItem("penger", penger);

function lagVaffel() {
   // localStorage kan kun lagre streng-verdier. Vi brukes parseInt for å hente og konvertere verdien til et tall.
   let penger = parseInt(localStorage.getItem("penger"));
   if (penger >= pris) {
      penger -= pris;
      // Lagrer den nye verdien til "penger" i localStorage
      localStorage.setItem("penger", penger);
      pengerGebi.textContent = localStorage.getItem("penger") + " kr";
   } else {
      varsel.textContent = "Du har " + penger + " kr";
   }
}
// En funksjon som kjører hver gang siden laster på nytt
window.onload = function () {
   // Henter verdien til "penger" fra localStorage som et tall
   penger = parseInt(localStorage.getItem("penger"));
   // Viser verdien i html-dokumentet
   pengerGebi.textContent = localStorage.getItem("penger") + " kr";
};
