let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
/*  Vi kan legge til en array i variabelen ved hjelp av klammeparenteser.
    let inventory = ["stick","dagger","sword"];*/
let inventory = ["stick"];
//  querySelector("") ser etter det første eksemplaret av nevnt element, nyttig for klasser og h1-tagg
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const locations = [
   {
      name: "town square",
      buttonText: ["Go to store", "Go to cave", "Fight dragon"],
      buttonFunction: [goStore, goCave, fightDragon],
      text: 'You are in the town square. You see a sign that says "Store".',
   },
   {
      name: "store",
      buttonText: ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
      buttonFunction: [buyHealth, buyWeapon, goTown],
      text: "You enter the store.",
   },
];
// initialiser knappene
function update(location) {
   /*Vi kan gjøre innholdet i funksjonen dynamisk ved å benytte definert parameter. Basert på lokasjonen vi er vil teksten endre seg */
   button1.innerText = location["button text"];
   button2.innerText = "Go to cave";
   button3.innerText = "Fight dragon";
   button1.onclick = goStore;
   button2.onclick = goCave;
   button3.onclick = fightDragon;
   text.innerText = 'You are in the town square. You see a sign that says "Store".';
}
function goTown() {
   /*  1. Vi kan kalle en funksjon ved å kun skrive navnet på funksjonen etterfulgt av paranteser. Eksempel: minFunkjson()
        2. Inni parentesene til funksjonen vår kan vi kan vi spesifisere et paramenter/argument. Dette kan være et eksisterende Array. Eksempel: minFunksjon(arrayNavn) 
        3. Dersom vi ønsker å hente inn en spesifikk del av et array, kan vi spesifisere det med et tall, som representerer rekkefølgen det er skrevet i arrayet*/
   update(locations[0]);
}
function goStore() {
   update(locations[1]);
}
function goCave() {
   console.log("Going to cave.");
}
function fightDragon() {
   console.log("Fighting dragon.");
}
function buyHealth() {}
function buyWeapon() {}
function goTown() {}
/* Parametere i en funksjon er en plassholder for en verdi som kan kalles på flere ganger i funksjonen
 */

// En funksjon kan deklareres med en såkalt "dot notion" eller punktum-begrep i skriptet, eller som en HTML attributt
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

/* _____________________________________________________________________________________ 

    1. Objekter er en ikke-primitiv datatype for å lagre flere sett med verdier samtidig.
    2. Ikke-primitive datatyper er mutable, men som ikke er udefinert, null, boolske verdier, nummer, streng, eller symbol. 
    3. Mutable betyr at dataen kan endres etter at den er initialisert/definert.
    4. I Arrays bruker vi "indexer" for å få tilgang på og endre data, mens i objekter endrer vi på data via "properties" også kjent som "Egenskap"
    5. En Egenskap består av en "nøkkel" som er navnet, og en verdi som er den lagrede dataen
*/
const cat = {
   name: "Whiskers",
   // nøkler med mellomrom må inlemmes med anførselstegn
   "Number of legs": 4,
};
/*  1. Et Array intitialiseres med hakeparentes [] 
    2. Et Array kan bestå av flere objekter. Objekter initialiseres med krøllparentes */
const stedsnavn = [
   {
      name: "town square",
      // Elementer i et Array separeres med komma
      "button text": ["Go to store", "Go to cave", "Fight dragon"],
   },
];
// Egenskaper kan kalles ved å først kalle på Objektet etterfulgt av et punktum-begrep (dot notion) med nøkkelnavnet
console.log(cat.name);
// En annen måte å kalle på en egenskap, er med et hakeparentes-begrep (bracket notion)
console.log(cat["Number of legs"]);
// bakoverlent skråstrek kan brukes til å benytte spesialtegn, som ellers vil tolkes som kode. For eksempel dobbelt anførselstegn: \"Store\"
