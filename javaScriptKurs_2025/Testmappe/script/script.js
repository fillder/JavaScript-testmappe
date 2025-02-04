let penger = 10;
let varer = 0;
const pengerTekstRef = document.getElementById("pengerTekst");
const varerTekstRef = document.getElementById("varerTekst");
const lagVareRef = document.getElementById("lagVareKnapp");
const selgVareRef = document.getElementById("selgVareKnapp");

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
	if (penger >= 1) {
		lagVareRef.removeAttribute("disabled");
	} else {
		lagVareRef.toggleAttribute("disabled");
	}
	if (varer >= 1) {
		selgVareRef.removeAttribute("disabled");
	} else {
		selgVareRef.toggleAttribute("disabled");
	}
}
sjekkBeholdning();

const fargetBoksRef = document.getElementById("fargetBoks");

function byttFarge() {
	const red = Math.floor(Math.random() * 255) + 1;
	const green = Math.floor(Math.random() * 255) + 1;
	const blue = Math.floor(Math.random() * 255) + 1;

	fargetBoksRef.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}
