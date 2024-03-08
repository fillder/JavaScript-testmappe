// Animasjon
let vaffelStekeAnimasjon = false; // status for om variabelen kjører
let gjeldendeSteg = 0;
const vaffelMiksGrafikk = document.getElementById("vaffelMiks");

// Vaffler
let vaflerTilSalgs = 0;
let vaflerTotalt = 0;
let kastetTotalt = 0;
let ustektTotalt = 0;
let normalTotalt = 0;
let brentTotalt = 0;
const vaflerTilSalgsStat = document.getElementById("vaflerTilSalgsTekst");
const vaflerTotaltStat = document.getElementById("vaflerTotaltTekst");
const kastetTotaltStat = document.getElementById("kastetTotaltTekst");
const ustektTotaltStat = document.getElementById("ustektTotaltTekst");
const normalTotaltStat = document.getElementById("normalTotaltTekst");
const brentTotaltStat = document.getElementById("brentTotaltTekst");

// Vaffelmiks
let prisMerMiks = 10;
let miksTilgjengelig = 0;
const miksTilgjengeligStat = document.getElementById("miksTilgjengeligTekst");

// Penger
let pengerTotalt = 100;
let pengerTilgjengelig = 100;
const pengerTotaltStat = document.getElementById("pengerTotaltTekst");
const pengerTilgjengeligStat = document.getElementById("pengerTilgjengeligTekst");

// Kunder og salg
let kunderPerMin = 0;
let salgsprosent = 0;
const kunderPerMinStat = document.getElementById("kunderPerMinTekst");
const salgsprosentStat = document.getElementById("salgsprosentTekst");

// Knapper
const flippVaffel = document.querySelector("#flippVaffelKnapp");
const stekVaffel = document.querySelector("#stekVaffelKnapp");
const lagMiks = document.querySelector("#lagMiksKnapp");
const rensMiks = document.querySelector("#rensMiksKnapp");

// Funksjoner ved oppstart
oppdaterStats();

// Funksjon som henter grafikken til vaffelMiks og legger til parameteret %
function lagMiksProsess(prosent) {
   vaffelMiksGrafikk.style.backgroundPositionX = prosent + "%";
}
// Funksjon for å lage vaffelrøre og endre animasjonen til røra.
function lagMiksFunksjon() {
   let gjeldendeMiks = parseFloat(vaffelMiksGrafikk.style.backgroundPositionX);
   let merMiks = Math.min(gjeldendeMiks + 9.09, 100);
   if (miksTilgjengelig <= 10) {
      miksTilgjengelig++;
      pengerTilgjengelig -= prisMerMiks;
      lagMiksProsess(merMiks);
   }
   vaffelKnappKontroll();
   oppdaterStats();
}
function brukMiksFunksjon() {
   let gjeldendeMiks = parseFloat(vaffelMiksGrafikk.style.backgroundPositionX);
   let mindreMiks = Math.max(gjeldendeMiks - 9.09, 0); // Bruk Math.max for å unngå negative verdier
   if (miksTilgjengelig >= 1) {
      miksTilgjengelig--;
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
function stekVaffelFunksjon() {
   if (!vaffelStekeAnimasjon && miksTilgjengelig > 0) {
      vaffelStekeAnimasjon = true;
      vaffelStekeAnimasjon = setInterval(stekVaffelProsess, 1000); // Kall stekVaffelProsess hvert sekund
      brukMiksFunksjon();
      // Aktiver flippVaffelen
      setTimeout(function () {
         flippVaffel.disabled = false;
         flippVaffel.classList.remove("deaktivert");
      }, 1000);
   }
   miksKnappKontroll();
   vaffelKnappKontroll();
   oppdaterStats();
}
function stekVaffelProsess() {
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

function flippVaffelFunksjon() {
   if (vaffelStekeAnimasjon) {
      clearInterval(vaffelStekeAnimasjon);
      vaffelStekeAnimasjon = false;
      vaffelStekingProsess(0);
      vaffelKnappKontroll();
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
   // Deaktiver flippVaffelen
   flippVaffel.disabled = true;
   flippVaffel.classList.add("deaktivert");
   return; // Avslutt funksjonen hvis det ikke er noen vafler
}
function endreButikkNavn() {
   let nyttButikkNavn = document.getElementById("nyttSpillerNavn").value;
   document.getElementById("spillerNavn").textContent = nyttButikkNavn;
}
function oppdaterStats() {
   // Ressurser
   pengerTilgjengeligStat.textContent = pengerTilgjengelig;
   miksTilgjengeligStat.textContent = miksTilgjengelig;
   vaflerTilSalgsStat.textContent = vaflerTilSalgs;
   salgsprosentStat.textContent = salgsprosent;
   kunderPerMinStat.textContent = kunderPerMin;
   // Stats
   pengerTotaltStat.textContent = pengerTotalt;
   vaflerTotaltStat.textContent = vaflerTotalt;
   kastetTotaltStat.textContent = kastetTotalt;
   ustektTotaltStat.textContent = ustektTotalt;
   normalTotaltStat.textContent = normalTotalt;
   brentTotaltStat.textContent = brentTotalt;
}
function vaffelKnappKontroll() {
   if (miksTilgjengelig > 0 && !vaffelStekeAnimasjon) {
      stekVaffel.classList.remove("deaktivert");
      stekVaffel.disabled = false;
   } else {
      stekVaffel.classList.add("deaktivert");
      stekVaffel.disabled = true;
   }
}
function miksKnappKontroll() {
   if (pengerTotalt > prisMerMiks) {
      lagMiks.classList.remove("deaktivert");
      lagMiks.disabled = false;
   } else {
      lagMiks.classList.add("deaktivert");
      lagMiks.disabled = true;
   }
}

window.onload = function () {
   vaffelStekingProsess(0); // Start ved første bilde
   lagMiksProsess(0); // Start ved første bilde
   miksKnappKontroll();
   vaffelKnappKontroll();
};
