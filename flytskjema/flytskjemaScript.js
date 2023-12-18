function sammenlignTall() {
   // Fjerner tekstinnholdet til "resultat" og "error" hver gang funksjon kjøres, slik at kun et resultat vises om gangen.
   document.querySelector("#resultat").textContent = "";
   document.querySelector("#error").textContent = "";

   // Henter verdien i input-feltene og koverterer de til tall med parseFloat
   let a = parseFloat(document.querySelector("#input1").value);
   let b = parseFloat(document.querySelector("#input2").value);
   let c = parseFloat(document.querySelector("#input3").value);

   // Sjekker om hentet verdi er tall, hvis ikke returnerer den en feilmelding.
   if (isNaN(a) || isNaN(b) || isNaN(c)) {
      document.querySelector("#error").textContent = "Skriv inn et gyldig tall i alle feltene";
      return;
   }

   // koden bruker if/else for å sammenligne to og to tall ved hjelp av "større enn"-tegnet (>)
   // && er en logisk "OG" operatør som lar teste om to operasjoner er begge "sant/true"
   // === er en "streng likhets" operatør som sammenligner innhold og type. Eksempel: strengen "5" er ikke det samme som tallet 5.
   // innerHTML er et alternativ til textContent, som lar oss skrive HTML fremfor ren tekst. <strong></strong>-taggene styler teksten før den vises.
   if (a > b && a > c) {
      document.querySelector("#resultat").innerHTML = "Det største tallet er <strong>Value A</strong>.";
   } else if (b > a && b > c) {
      document.querySelector("#resultat").innerHTML = "Det største tallet er <strong>Value B</strong>.";
   } else if (c > a && c > b) {
      document.querySelector("#resultat").innerHTML = "Det største tallet er <strong>Value C</strong>.";
   } else if (a === b && b > c) {
      document.querySelector("#resultat").innerHTML = "<strong>Value A</strong> og <strong>Value B</strong> er størst.";
   } else if (a === c && a > b) {
      document.querySelector("#resultat").innerHTML = "<strong>Value A</strong> og <strong>Value C</strong> er størst.";
   } else if (b === c && b > a) {
      document.querySelector("#resultat").innerHTML = "<strong>Value B</strong> og <strong>Value C</strong> er størst.";
   } else {
      document.querySelector("#resultat").innerHTML = "Alle verdiene er like stor.";
   }

   // Andre nyttige operatører
   // || en logisk "ELLER" operatør som lar oss teste om en av testene er riktig.
   // == er en "likhets"-operatør, den prøver å konvertere innholdet til samme datatype før den sammenligner om innholdet er lik.
   // !== er en "streng ulikhets"-operatør, den returnerer sant/true dersom resultatet er ulikt.
}
