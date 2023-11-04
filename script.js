// Vi bruker to skråstrek i starten for å kommentere ut de resterende tegnene på samme linje. 

/* For å kommentere ut flere linjer med kode/tekst,
kan vi innlemme innholdet mellom en skråstrek og et asterisk-symbol */

//Ulike type variabler
var varVariabel = "En var variabel er en utdatert metode som kan både være konstant og manipuleres, og bør ikke brukes";
let letVariable = "En let variabel kan tilegnes en verdi som kan manipuleres og muteres fritt";
const constVariabel = "En const variabel tilegnes konstant data som ikke endres etter deklarering"; 
document.getElementById("var").textContent = varVariabel;
document.getElementById("let").textContent = letVariable;
document.getElementById("const").textContent = constVariabel;
