let vafelLager = 0;
let lagerVaffel = false; // Legger til en variabel for å sjekke om vi allerede lager en vaffel
let penger = 10;
let slagsPris = 10;
let ingredienser = 2;

function lagVaffler() {
   if (!lagerVaffel) {
      // Sjekker om vi ikke allerede lager en vaffel
      lagerVaffel = true; // Setter flagget til true fordi vi starter å lage en vaffel
      // Starter en timer
      setTimeout(() => {
         vafelLager++;
         penger -= ingredienser;
         document.getElementById("viserVarebeholdning").textContent = vafelLager + " Vaffel";
         document.getElementById("viserPengeBeholdning").textContent = "Du har " + penger + " kr";
         lagerVaffel = false; // Når timeren er ferdig, setter vi flagget tilbake til false
      }, 2000); // (2000 millisekunder / 2sek)
   } else {
      document.getElementById("lagerVaflerTekst").textContent = "Vaffeljernet er fullt!";
      console.log("Vaffeljernet er fullt!");
   }
}

function selgVaffler() {
   while (vafelLager > 0) {
      setTimeout(() => {
         vafelLager--;
         penger += slagsPris;
         document.getElementById("salgsVarsel").textContent = "Du har solgt 1 vaffel";
      }, 6000);
   }
}
window.onload = function () {
   setInterval(selgVaffler, 1000);
};

/*
let sell = setInterval(() => {
   if(prod <= 0) {
   prod--
   peng++

   document.getElementById("produsert").textContent = prod;
   document.getElementById("penger").textContent = peng;
       clearInterval(sell)
   }
}, 100)
*/
