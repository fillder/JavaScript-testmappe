let vaffelStekeAnimasjon = false; // status for om variabelen kjører
let gjeldendeSteg = 0;
let vaflerTilSalgs = 0;
let vaflerTotalt = 0;
let vaflerTilSalgsTekst = document.getElementById("vaflerTilSalgs");
let vaflerTotaltTekst = document.getElementById("vaflerTotalt");

function vaffelMiksProsess(prosent) {
   let vaffelMiksMengde = document.getElementById("vaffelMiks");
   vaffelMiksMengde.style.backgroundPositionX = prosent + "%";
}
function lagMiks() {
   gjeldendeMiks = parseFloat(document.getElementById("vaffelMiks").style.backgroundPositionX);
   let nyMiks = Math.min(gjeldendeMiks + 9.09, 100); // Gå frem  9.09% = ett steg
   vaffelMiksProsess(nyMiks);
}
function vaffelStekingProsess(prosent) {
   let vaffelSteking = document.getElementById("vaffelJern");
   vaffelSteking.style.backgroundPositionX = prosent + "%";
}
function stekVaffel() {
   gjeldendeSteg = parseFloat(document.getElementById("vaffelJern").style.backgroundPositionX);
   gjeldendeSteg += 14.2857; // Gå frem  14.2857% = ett steg
   if (gjeldendeSteg > 99) {
      // Stopp når vi når det siste bildet
      vaffelStekeAnimasjon = false;
      clearInterval(vaffelStekeAnimasjon); // Stopp animasjonen
      gjeldendeSteg = 100; // Sett posisjonen til det siste bildet
   }
   vaffelStekingProsess(gjeldendeSteg);
}
// Funksjon for å starte animasjonen ved klikk på knappen
function startSteking() {
   if (!vaffelStekeAnimasjon) {
      vaffelStekeAnimasjon = true;
      vaffelStekeAnimasjon = setInterval(stekVaffel, 1000); // Kall stekVaffel hvert sekund
      // Aktiver flippknappen
      setTimeout(function () {
         let flippKnapp = document.querySelector("#flippKnapp");
         flippKnapp.disabled = false;
         flippKnapp.classList.remove("deaktivert");
      }, 1000);
   }
}

function flippVaffel() {
   if (vaffelStekeAnimasjon) {
      clearInterval(vaffelStekeAnimasjon);
      vaffelStekeAnimasjon = false;
      vaffelStekingProsess(0);
   }
   vaflerTilSalgs++;
   vaflerTilSalgsTekst.textContent = vaflerTilSalgs;
   vaflerTotalt++;
   vaflerTotaltTekst.textContent = vaflerTotalt;
   // Beregn prosentverdien som en hel tallverdi for å finne riktig SVG-fil
   let prosentVerdi = Math.floor(gjeldendeSteg / 14.2857);

   let vaflerPaaRist = document.createElement("img");
   vaflerPaaRist.src = `bilder/vaffelTilSalgs${prosentVerdi}.svg`;
   vaflerPaaRist.classList.add(`vaflerTilSalgs${prosentVerdi}`, "vaffelGrafikk");
   // Sjekk om det er en eksisterende vaffel på risten
   let vaflerAlleredePaaRist = document.querySelectorAll(".vaffelGrafikk");
   if (vaflerAlleredePaaRist.length > 0) {
      // Juster den nye vaffelen basert på antall eksisterende vaffeler
      vaflerPaaRist.style.left = `${vaflerAlleredePaaRist.length * 25}px`;
   } else {
      // For den første vaffelen, ikke justering
      vaflerPaaRist.style.left = "0";
   }
   let vaffelRist = document.getElementById("vaffelRist");
   vaffelRist.appendChild(vaflerPaaRist);
   // Deaktiver flippknappen
   let flippKnapp = document.querySelector("#flippKnapp"); // Pass på å gi knappen en unik ID eller bruk querySelector med riktig selector
   flippKnapp.disabled = true;
   flippKnapp.classList.add("deaktivert");
   return; // Avslutt funksjonen hvis det ikke er noen vafler
}
function endreButikkNavn() {
   let nyttButikkNavn = document.getElementById("nyttSpillerNavn").value;
   document.getElementById("spillerNavn").textContent = nyttButikkNavn;
}
window.onload = function () {
   vaffelStekingProsess(0); // Start ved første bilde
   vaffelMiksProsess(0); // Start ved første bilde
   let spillerNavn = document.getElementById("spillerNavnDialog");
   spillerNavn.showModal();
};
