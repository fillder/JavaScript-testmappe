/* ------------------ // ------------------ 
   -------------- // ---- // -------------- 
   ----------- // Funksjoner // ----------- 
   ------------- // ---- // --------------- 
   ----------------- // ------------------- */

/* 16) Vi initialiserer/lager en funksjon med å skrive "function" etterfulgt av funksjonens navn og to parenteser
   17) For å kalle/kjøre en funksjon, skriver vi kun navnet på funksjonen etterfulgt av parenteser
   18) Hvis vi kaller på en tom funksjon, returnerer vi en udefinert verdi "undefined". Vi kan motvirke dette ved å bruke return-koden for å returnere en spesifikk verdi eller streng
   */
function padRow() {
   return "Hello!";
}
padRow();
const call = padRow();
console.log(call);

/* 19) Strengen over ("Hello!") er hardkodet, dette er ikke alltid ønskelig, da dette ikke er en dynamisk verdi
      20) For å gjøre koden mer dynamisk kan vi bruke "parametere" 
      21) Parametere er en spesiell variabel som tilegnes en verdi når funksjonen kalles, basert på funksjonens logikk*/

function addTwoNumbers(num1, num2) {
   // Vi legger til begge parameterne som et addisjonsstykke etter return.
   return num1 + num2;
}
// Vi kaller på funksjonen, og lagerer to verdien som returneres i en variabel vi har kalt "sum"
const sum = addTwoNumbers(5, 10);
// Når vi printer verdien av sum får vi lagret verdi, som er resultatet av mattestykke, altså 15.
console.log(sum);

/* ----------------- // ----------------
   -------------- // - // -------------- 
   ------------ // Scope // ------------
   ------------- // - // ---------------
   --------------- // ------------------ */

/* 1.  Begrepet "Scope" kan sies å bestemme en kodes tilgjengelighet
      2.  Dersom en variabel, funksjon eller loop skrives selvstendig, uten å være innlemmet i en annen kode, har de en "global scope" eller "global tilgjengelighet" 
      3.  Variabelen "tittle" under er global, og kan derfor brukes av den følgende funksjonen
      4.  Variabelen "professjon" er laget inni funksjonen, og får derfor en "local scope" eller "block scope", som i kodeblokk. Kode med lokal tilgjengelighet", kan kun brukes av funksjonen den er laget i og kode som er innlemmet i samme funksjon 
      */

const tittle = "Professor ";
function demo(name) {
   const professjon = "Scientist";
   return tittle + name;
}
demo("Naomi");

/* 5.  For å hente en verdi fra en lokal variabel, må vi legge den til funksjonen return*/
function getName() {
   const name = "Camper cat";
   return name;
}
/* 6. Verdien av en return kan printes til konsollen, eller lagres i en variabel  */
console.log(getName()); // "Camper cat"
const capturedReturnValue = getName();
console.log(capturedReturnValue); // "Camper cat"

/* ---------------- // ---------------- 
   ------------- // -- // ------------- 
   ----------- // Return // ----------- 
   ------------- // -- // -------------
   ---------------- // ---------------- */

/* 1) En sekundær-rolle til return, er å stoppe funksjonen fra å kjøre 
   2) Dersom vi prøver å skrive noe under return, gråes det ut, fordi funkjsonen aldri kommer til å kjøre det*/
function thisDoesNotWork() {
   const test = "Testing";
   return test;
   console.log("This does not work!");
}

function thisWorks() {
   const test = "Testing";
   console.log("This works!");
   return test;
}

// Som vist lengre opp, kan return brukes for å gjennomføre mattematiske regnestykker
function addOneTo(a) {
   const result = a + 1;
   return result;
}
/* Et annet bruksområde er å bruke det som et "standard"-svar; så lenge if-betingelsen ikke er "true", vil den returnere "false"
   Dette kaller vi en tidlig "exit", fordi koden stoppes, når den har funnet svaret.*/
function isEven(num) {
   if (num % 2 === 0) return true;
   return false;
}
// Det kan bemerkes at dette har identisk funksjon til en else-betingelse med samme svar
function isEven(num) {
   if (num % 2 === 0) {
      return true;
   } else {
      return false;
   }
}

function newPadRow(rowNumber, rowCount) {
   return character.repeat(rowNumber);
}
for (let i = 0; i < count; i = i + 1) {
   rows.push(padRow(i + 1, count));
}

/*
let classScore = [92, 88, 12, 77, 57, 100, 67, 38, 97, 89]
let students = classScore.length
let totalScore = 0

function getAverage(scores) {
  for (let i = 1; i <= students; i++) {
  const popped = classScore.pop();
  totalScore += popped;
  console.log(totalScore)
}
  return totalScore / students
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));*/
