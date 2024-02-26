let vaffelStekeAnimasjon = false; // status for om variabelen kjører
let gjeldendeSteg = 0;
let vaffelMiksMengde = 0;
let vaflerTilSalgs = 0;
let vaflerTotalt = 0;
let pengderTotalt = 100;
let vaflerTilSalgsTekst = document.getElementById("vaflerTilSalgs");
let vaflerTotaltTekst = document.getElementById("vaflerTotalt");
let vaffelMiksTekst = document.getElementById("miksGjeldende");
let flippKnapp = document.querySelector("#flippKnapp");
let stekeKnapp = document.querySelector("#stekeKnapp");
let rensJernKnapp = document.querySelector("#rensJernKnapp");

function vaffelMiksProsess(prosent) {
   let vaffelMiksGrafikk = document.getElementById("vaffelMiks");
   vaffelMiksGrafikk.style.backgroundPositionX = prosent + "%";
}
function lagMiks() {
   gjeldendeMiks = parseFloat(document.getElementById("vaffelMiks").style.backgroundPositionX);
   let nyMiks = Math.min(gjeldendeMiks + 9.09, 100); // Gå frem  9.09% = ett steg
   vaffelMiksProsess(nyMiks);
   vaffelMiksMengde++;
   vaffelMiksTekst.textContent = vaffelMiksMengde;
   oppdaterStats();
}
function reduserMiks() {
   gjeldendeMiks = parseFloat(document.getElementById("vaffelMiks").style.backgroundPositionX);
   let nyMiks = Math.min(gjeldendeMiks - 9.09, 100); // Gå frem  9.09% = ett steg
   vaffelMiksProsess(nyMiks);
   vaffelMiksMengde--;
   vaffelMiksTekst.textContent = vaffelMiksMengde;
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
   if (!vaffelStekeAnimasjon && vaffelMiksMengde > 0) {
      vaffelStekeAnimasjon = true;
      vaffelStekeAnimasjon = setInterval(stekVaffel, 1000); // Kall stekVaffel hvert sekund
      vaffelMiksMengde--;
      vaffelMiksTekst.textContent = vaffelMiksMengde;
      // Aktiver flippknappen
      setTimeout(function () {
         let flippKnapp = document.querySelector("#flippKnapp");
         flippKnapp.disabled = false;
         flippKnapp.classList.remove("deaktivert");
      }, 1000);
      reduserMiks();
   }
   oppdaterStats();
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
   flippKnapp.disabled = true;
   flippKnapp.classList.add("deaktivert");
   return; // Avslutt funksjonen hvis det ikke er noen vafler
}
function endreButikkNavn() {
   let nyttButikkNavn = document.getElementById("nyttSpillerNavn").value;
   document.getElementById("spillerNavn").textContent = nyttButikkNavn;
}
function oppdaterStats() {
   if (vaffelMiksMengde > 0) {
      stekeKnapp.classList.remove("deaktivert");
      stekeKnapp.disabled = false;
   } else {
      stekeKnapp.classList.add("deaktivert");
      stekeKnapp.disabled = true;
   }
}
window.onload = function () {
   vaffelStekingProsess(0); // Start ved første bilde
   vaffelMiksProsess(0); // Start ved første bilde
   flippKnapp.disabled = true;
   stekeKnapp.disabled = true;
   rensJernKnapp.disabled = true;
   flippKnapp.classList.add("deaktivert");
   stekeKnapp.classList.add("deaktivert");
   rensJernKnapp.classList.add("deaktivert");
};
