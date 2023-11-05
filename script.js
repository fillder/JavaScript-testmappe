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

let leggTil = 5;
function tellerPos() {
   leggTil++;
   document.getElementById("posTeller").textContent = leggTil;
}
let trekkFra = 5;
function tellerNeg() {
   trekkFra--;
   document.getElementById("negTeller").textContent = trekkFra;
}
