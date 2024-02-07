let vaffelStekeAnimasjon = null; // Variabel for å lagre intervallet
let gjeldendeSteg = 0; // Starter fra  0
let vaflerTilSalgs = 0;
let vaflerTilSalgsTekst = document.getElementById("vaflerTilSalgs");
let vaflerTotalt = document.getElementById("vaflerTotalt");

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
      clearInterval(vaffelStekeAnimasjon); // Stopp animasjonen
      gjeldendeSteg = 100; // Sett posisjonen til det siste bildet
   }
   vaffelStekingProsess(gjeldendeSteg);
}
// Funksjon for å starte animasjonen ved klikk på knappen
function startSteking() {
   if (!vaffelStekeAnimasjon) {
      // Hvis animasjonen ikke allerede kjører
      vaffelStekeAnimasjon = setInterval(stekVaffel, 1000); // Kall stekVaffel hvert sekund
   }
}
function flippVaffel() {
   if (vaffelStekeAnimasjon) {
      clearInterval(vaffelStekeAnimasjon);
      vaffelStekingProsess(0);
   }
   vaflerTilSalgs++;
   vaflerTilSalgsTekst.textContent = vaflerTilSalgs;
}

window.onload = function () {
   vaffelStekingProsess(0); // Start ved første bilde
   vaffelMiksProsess(0); // Start ved første bilde
};
