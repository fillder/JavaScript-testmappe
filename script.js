// Vi bruker to skråstrek i starten for å kommentere ut de resterende tegnene på samme linje.

/* For å kommentere ut flere linjer med kode/tekst,
kan vi innlemme innholdet mellom en skråstrek og et asterisk-symbol */

//Ulike type variabler
var varVariabel = "En var variabel er en utdatert metode som kan overskrive seg selv, og bør derfor ikke brukes";
let letVariable = "En let variabel kan tilegnes en verdi som kan manipuleres og muteres fritt";
const constVariabel = "En const variabel tilegnes konstant data som ikke endres etter deklarering. den er altså “read-only”";
document.getElementById("var").textContent = varVariabel;
document.getElementById("let").textContent = letVariable;
document.getElementById("const").textContent = constVariabel;
/* Verdien til en variabel kan hentes og refere til andre variabler e.g. 
A = 5
B = A
*/

//En Streng er en kombinasjon av tall og bokstaver og initialiseres med anførselstegn
const eksString = "En kombinasjon av tall og bokstaver initialiseres med anførselstegn";
document.getElementById("string").textContent += "string/streng: " + eksString;

//Et Nummer er et heltall og trenger ingen ekstra tegn for initialisering
const eksNumber = 6;
document.getElementById("number").textContent += " Integer/Nummer: e.g. " + eksNumber;

/*BigInt er nemmeriske verdier som er for stor til å bli representert av vanlige nummer. 
BigInt verdier kan ikke utregnes som mattematisk med andre tall uten konvertering*/
const eksBigInt = BigInt("0x1fffffffffffff");
document.getElementById("bigint").textContent += " BigInt/Big integer Value: e.g. " + eksBigInt;

//En Boolean er en datatype for om noe er sant/aktivt eller usant/ikke aktivt
let eksBooleanTrue = true;
let eksBooleanFalse = false;
// function ()

//Symboler er et ES6 datasett med en unik verdi som kan brukes for identifisering eller som en "nøkkel" til et objekt.
const eksSymbol = symbol("key");

//Ett objekt er at datasett som består av flere nøkkelverdier. Objekter initialiseres med krøllparentes og nøklene separeres med komma
const Spice0 = {
   type: "spice",
   level: 0,
   Name: "Nøytral",
};
const Spice1 = {
   type: "spice",
   level: 1,
   Name: "Krydret",
};

//Variabler som ikke har en definert verdi får verdien "undefined", fordi den ikke har fått en tilegnet verdi enda.
const eksUndefined = undefined;

//Variabler som har verdien "null" har ingen objektiv verdi og kan heller ikke brukes som identifikasjon.
const eksNull = null;
