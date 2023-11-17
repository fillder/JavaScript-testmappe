function resetOutput(id) {
   document.getElementById(id).textContent = "";
}
function reset10() {
   document.getElementById("teller").textContent = "10";
}

const tallA = 6;
const tallB = 3.5;
document.getElementById("pluss").textContent = tallA + tallB;
document.getElementById("minus").textContent = tallA - tallB;
document.getElementById("gange").textContent = tallA * tallB;
document.getElementById("dele").textContent = tallA / tallB;
document.getElementById("modul").textContent = 11 % 3;

const navnA = "kant";
const seksKant = "Et heksagon er en " + tallA + "-" + navnA;
document.getElementById("seksKant").textContent = seksKant;

let tellerTall = 10;
function leggTil() {
   tellerTall++;
   document.getElementById("teller").textContent = tellerTall;
}
function trekkFra() {
   tellerTall--;
   document.getElementById("teller").textContent = tellerTall;
}

let tallPluss = 5;
let tallMinus = 5;
let tallGange = 5;
let tallDele = 5;
tallPluss += 5;
tallMinus -= 5;
tallGange *= 5;
tallDele /= 5;
function tallPlussKnapp() {
   document.getElementById("TilleggsargumetSvar").textContent = tallPluss;
}
function tallMinusKnapp() {
   document.getElementById("TilleggsargumetSvar").textContent = tallMinus;
}
function tallGangeKnapp() {
   document.getElementById("TilleggsargumetSvar").textContent = tallGange;
}
function tallDeleKnapp() {
   document.getElementById("TilleggsargumetSvar").textContent = tallDele;
}
// Sammenkoblinsoperasjon pluss tilleggsargument
let navnB = "Etter første del, ";
navnB += "kommer del to.";
function tilleggsAddisjon() {
   console.log(navnB);
   document.getElementById("tilleggsAddisjon").textContent = navnB;
}
