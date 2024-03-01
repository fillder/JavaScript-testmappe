let vaffelStekeAnimasjon = false; // status for om variabelen kjører
let gjeldendeSteg = 0;
let vaffelMiksMengde = 0;
let vaflerTilSalgs = 0;
let vaflerTotalt = 0;
let pengerTotalt = 100;
let prisMerMiks = 10;
let vaflerTilSalgsTekst = document.getElementById("vaflerTilSalgsTekst");
let vaflerTotaltTekst = document.getElementById("vaflerTotaltTekst");
let flippKnapp = document.querySelector("#flippKnapp");
let stekeKnapp = document.querySelector("#stekeKnapp");
let rensJernKnapp = document.querySelector("#rensJernKnapp");

/* --- FUNKSJONER SOM STYRER VAFFELRØRE --- */
let miksTilgjengelig = 0;
let miksTilgjengeligTekst = document.getElementById("miksTilgjengelig");
let miksTotalt = 10;
let miksTotaltTekst = document.getElementById("miksTilgjengelig");
let vaffelMiksGrafikk = document.getElementById("vaffelMiks");

oppdaterStats();

// Funksjon som henter grafikken til vaffelMiks og legger til parameteret %
function lagMiksProsess(prosent) {
   vaffelMiksGrafikk.style.backgroundPositionX = prosent + "%";
}
// Funksjon for å lage vaffelrøre og endre animasjonen til røra.
function lagMiks() {
   let gjeldendeMiks = parseFloat(vaffelMiksGrafikk.style.backgroundPositionX);
   let merMiks = Math.min(gjeldendeMiks + 9.09, 100);
   if (vaffelMiksMengde <= 10) {
      vaffelMiksMengde++;
      pengerTotalt -= prisMerMiks;
      lagMiksProsess(merMiks);
   }
   knappKontroller();
   oppdaterStats();
}
function brukMiks() {
   let gjeldendeMiks = parseFloat(vaffelMiksGrafikk.style.backgroundPositionX);
   let mindreMiks = Math.max(gjeldendeMiks - 9.09, 0); // Bruk Math.max for å unngå negative verdier
   if (vaffelMiksMengde >= 1) {
      vaffelMiksMengde--;
      lagMiksProsess(mindreMiks);
      oppdaterStats();
   }
}

/* --- FUNKSJONER SOM STYRER VAFFELSTEKING --- */

function vaffelStekingProsess(prosent) {
   let vaffelSteking = document.getElementById("vaffelJern");
   vaffelSteking.style.backgroundPositionX = prosent + "%";
}
// Funksjon for å starte animasjonen ved klikk på knappen
function lagVaffel() {
   if (!vaffelStekeAnimasjon && vaffelMiksMengde > 0) {
      vaffelStekeAnimasjon = true;
      vaffelStekeAnimasjon = setInterval(lagVaffelProsess, 1000); // Kall lagVaffelProsess hvert sekund
      brukMiks();
      // Aktiver flippknappen
      setTimeout(function () {
         let flippKnapp = document.querySelector("#flippKnapp");
         flippKnapp.disabled = false;
         flippKnapp.classList.remove("deaktivert");
      }, 1000);
   }
   knappKontroller();
   oppdaterStats();
}
function lagVaffelProsess() {
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

function flippVaffel() {
   if (vaffelStekeAnimasjon) {
      clearInterval(vaffelStekeAnimasjon);
      vaffelStekeAnimasjon = false;
      vaffelStekingProsess(0);
   }
   vaflerTilSalgs++;
   vaflerTotalt++;
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
   oppdaterStats();
   let vaffelRist = document.getElementById("vaffelRist");
   vaffelRist.appendChild(vaflerPaaRist);
   // Deaktiver flippknappen
   flippKnapp.disabled = true;
   flippKnapp.classList.add("deaktivert");
   return; // Avslutt funksjonen hvis det ikke er noen vafler
}
function endreButikkNavn() {
   let nyttButikkNavn = document.getElementById("nyttSpillerNavn").value;
   document.getElementById("spillerNavn").textContent = nyttButikkNavn;
}
function oppdaterStats() {
   pengerTilgjengelig;
   miksTilgjengelig;
   vaflerTilSalgsTekst;
   AttraksjonTekst;
   ettersporselTekst;

   pengerTotaltTekst;
   miksTotaltTekst;
   vaflerTotaltTekst;
   kastetTotaltTekst;
   ustektTotaltTekst;
   normalTotaltTekst;
   brentTotaltTekst;
   HoyestettErsporsel;

   vaflerSolgtTekst.textContent = vaflerSolgt;
   vaflerKastetTekst.textContent = vaflerKastet;
   vaflerTilSalgsUstektTekst.textContent = vaflerTilSalgsUstekt;
   vaflerTilSalgsNormalTekst.textContent = vaflerTilSalgsNormal;
   vaflerTilSalgsBrentTekst.textContent = vaflerTilSalgsBrent;

   pengerTilgjengeligTekst.textContent = pengerTilgjengelig;
   pengerTotaltTekst.textContent = pengerTotalt;

   miksTotaltTekst.textContent = miksTotalt;
   miksTilgjengeligTekst.textContent = miksTilgjengelig;
}
function knappKontroller() {
   if (vaffelMiksMengde > 0) {
      lagVaffelKnapp.classList.remove("deaktivert");
      lagVaffelKnapp.disabled = false;
   } else {
      lagVaffelKnapp.classList.add("deaktivert");
      lagVaffelKnapp.disabled = true;
   }
   if (pengerTotalt > prisMerMiks) {
      lagMiksKnapp.classList.remove("deaktivert");
      lagMiksKnapp.disabled = false;
   } else {
      lagMiksKnapp.classList.add("deaktivert");
      lagMiksKnapp.disabled = true;
   }
}

window.onload = function () {
   vaffelStekingProsess(0); // Start ved første bilde
   lagMiksProsess(0); // Start ved første bilde
   flippKnapp.disabled = true;
   stekeKnapp.disabled = true;
   rensJernKnapp.disabled = true;
   flippKnapp.classList.add("deaktivert");
   stekeKnapp.classList.add("deaktivert");
   rensJernKnapp.classList.add("deaktivert");
};
