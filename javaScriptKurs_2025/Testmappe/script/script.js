/*let penger = 10;
let varer = 0;
const pengerTekstRef = document.getElementById("pengerTekst");
const varerTekstRef = document.getElementById("varerTekst");
const lagVareKnapp = document.getElementById("lagVareKnapp");
const selgVareKnapp = document.getElementById("selgVareKnapp");

function selgVare() {
	if (varer >= 1) {
		varer--;
		penger++;
		sjekkBeholdning();
	}
}

function lagVare() {
	if (penger >= 1) {
		varer++;
		penger--;
		sjekkBeholdning();
	}
}

function sjekkBeholdning() {
	pengerTekstRef.textContent = penger;
	varerTekstRef.textContent = varer;

	lagVareKnapp.disabled = !(penger >= 1);
	selgVareKnapp.disabled = !(varer >= 1);
	//knappen deaktiveres hvis penger IKKE er mer eller det samme som 1
}
sjekkBeholdning();
*/
let penger = 10;
let varer = 0;
const pengerTekst = document.getElementById("pengerTekst");
const varerTekst = document.getElementById("varerTekst");
const lagVareKnapp = document.getElementById("lagVareKnapp");
const selgVareKnapp = document.getElementById("selgVareKnapp");

function selgVare() {
	if (varer >= 1) {
		varer--;
		penger++;
	}
	oppdaterUI();
}

function lagVare() {
	if (penger >= 1) {
		varer++;
		penger--;
	}
	oppdaterUI();
}

function oppdaterUI() {
	pengerTekst.textContent = penger;
	varerTekst.textContent = varer;

	lagVareKnapp.disabled = !(penger >= 1);
	selgVareKnapp.disabled = !(varer >= 1);
	//knappen deaktiveres hvis penger IKKE er mer eller det samme som 1
}
oppdaterUI();
