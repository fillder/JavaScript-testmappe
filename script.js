const tallA = 6;
const tallB = 3;
document.getElementById("pluss").textContent = tallA + tallB;
document.getElementById("minus").textContent = tallA - tallB;
document.getElementById("gange").textContent = tallA * tallB;
document.getElementById("dele").textContent = tallA / tallB;

const navnA = "kant";
const seksKant = "Et heksagon er en " + tallA + "-" + navnA;
document.getElementById("seksKant").textContent = seksKant;

let inkrement = 0;
function teller() {
   inkrement++;
   document.getElementById("inkrementKnapp").textContent = inkrement;
}
