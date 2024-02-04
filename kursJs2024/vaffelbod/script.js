let pengerGebi = document.getElementById("viserAntallKroner");
let comGebi = document.getElementById("viserPrisIngredienser");
let lagerGebi = document.getElementById("viserVareBeholdning");
let prisGebi = document.getElementById("viserGjeldendePris");
let lag = document.getElementById("lageKnapp");
let autoMakeGebi = document.getElementById("upgrade1");
let autoSellGebi = document.getElementById("upgrade2");
let varsel = document.getElementById("varselTekst");

// Gir variabelene samme verdi som verdiene lagret i localStorage ELLER veriden en ny verdi.
let penger = parseInt(localStorage.getItem("penger")) || 3;
let com = parseInt(localStorage.getItem("com")) || 3;
let lager = parseInt(localStorage.getItem("lager")) || 0;
let pris = parseInt(localStorage.getItem("pris")) || 10;

// Definerer et datapunkt i localStorage med samme navn som variabelen vi ønsker å lagre
localStorage.setItem("penger", penger);
localStorage.setItem("com", com);
localStorage.setItem("lager", lager);
localStorage.setItem("pris", pris);

function lagVaffel() {
   // localStorage kan kun lagre streng-verdier. Vi brukes parseInt for å hente og konvertere verdien til et tall.
   let lager = parseInt(localStorage.getItem("lager"));
   let penger = parseInt(localStorage.getItem("penger"));
   if (penger >= com) {
      lager++;
      penger -= com;
      // Erstatter eventuelle varsler med en tom strengverdi
      varsel.textContent = "";
      // Lagrer den nye verdien til "penger" i localStorage
      localStorage.setItem("lager", lager);
      localStorage.setItem("penger", penger);
      lagerGebi.textContent = localStorage.getItem("lager") + " vafel på lager";
      pengerGebi.textContent = localStorage.getItem("penger") + " kr";
      console.log("If er sant");
   } else {
      varsel.textContent = "Du har " + penger + " kr";
      console.log("salg-else er sant");
   }
}
function selgVaffel() {
   let lager = parseInt(localStorage.getItem("lager"));
   let penger = parseInt(localStorage.getItem("penger"));
   console.log("selgVaffel-funksjonen fungerer");

   if (lager > 0) {
      lager--;
      penger += pris;
      varsel.textContent = "";
      localStorage.setItem("lager", lager);
      localStorage.setItem("penger", penger);
      lagerGebi.textContent = localStorage.getItem("lager") + " vafel på lager";
      pengerGebi.textContent = localStorage.getItem("penger") + " kr";
      console.log("salg-if er sant");
   } else {
      varsel.textContent = "Du har " + lager + " vafel på lager";
      console.log("salg-else er sant");
   }
}
function pluss() {
   if (pris < 10) {
      pris++;
      prisGebi.textContent = pris + " kr";
      localStorage.setItem("pris", penger);
   }
}
function minus() {
   if (pris > 0) {
      pris--;
      prisGebi.textContent = pris + " kr";
      localStorage.setItem("pris", penger);
   }
}
// En funksjon som kjører hver gang siden laster på nytt
window.onload = function () {
   // Henter verdien til "penger" fra localStorage som et tall
   penger = parseInt(localStorage.getItem("penger"));
   com = parseInt(localStorage.getItem("com"));
   lager = parseInt(localStorage.getItem("lager"));
   pris = parseInt(localStorage.getItem("pris"));
   // Viser verdien i html-dokumentet
   pengerGebi.textContent = localStorage.getItem("penger") + " kr";
   comGebi.textContent = localStorage.getItem("com");
   lagerGebi.textContent = localStorage.getItem("lager") + " vafel på lager";
   prisGebi.textContent = localStorage.getItem("pris") + " kr";
};

/*
function autoMake(){
   if (penger >= 200) {
      autoSellGebi.style.display = "block";
      autoMakeGebi.style.display = "none"
      penger -= 200
      // localStorage.setItem('penger', penger);
      setInterval(() => {
         lagVaffel()
      }, 750);
   }
}


function autoSell() {
   if (penger >= 500) {
      penger -=500
      // localStorage.setItem('penger', penger);
      setInterval(() => {
         selg()
         autoSellGebi.style.display = "none" 
      }, 500);
   }
}*/
