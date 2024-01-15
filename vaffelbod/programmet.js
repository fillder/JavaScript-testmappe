let vafelLager = 0;
let lagerVaffel = false; // Legger til en variabel for å sjekke om vi allerede lager en vaffel

function lagVaffler() {
   if (!lagerVaffel) {
      // Sjekker om vi ikke allerede lager en vaffel
      lagerVaffel = true; // Setter flagget til true fordi vi starter å lage en vaffel
      // Starter en timer
      setTimeout(() => {
         vafelLager++;
         document.getElementById("viserVarebeholdning").textContent = vafelLager + " Vaffel";
         lagerVaffel = false; // Når timeren er ferdig, setter vi flagget tilbake til false
      }, 2000); // (2000 millisekunder / 2sek)
   } else {
      document.getElementById("lagerVaflerTekst").textContent = "Vaffeljernet er fullt!";
      console.log("Vaffeljernet er fullt!");
   }
}
