// nummer og strenger er primitive datatyper, det vil si de kun kan holde en verdi om gangen
let profession = "teacher";
let age = 30;
/* 1)    Et Arrays er en ikke-primitiv datatype, som vil si at den kan lagre flere verdier og datatyper samtidig
   2)    Arrays lages ved hjelp av hakeparentes [], høyre-option + 8 og 9 på tastaturet
   3)    Dataen i et Array separeres ved hjelp av comma*/
let rows = ["Naomi", "Quincy", "CamperChan"];
/* 4)    Vi kan kalle på dataen inne i et array ved hjelp av et index-tall som refererer til rekkefølgen dataen er listet. 
   5)    Arrays er et starter indekseringen med 0, som vil si at første datatype har indeksen 0, mens andre har indeksen 1
   6)    Vi kaller på dataen ved hjelp av navnet til arrayet, etterfulgt av indekstallet i hakeparentes. */
console.log(rows[0]);
/* 7)    Arrays er "mutable", som vil si at dataen kan endres etter at den er laget
   8)    For å endre dataen kan vi benytte samme metode som når vi endrer en let-variabel. Bare denne gangen inkluderer vi indeksen til dataen vi vil endre*/
rows[2] = 10;
/* 9)    .length er en innebygd funksjon som gir oss antallet elementer som er lagret i arrayet
   10)   arraynavn.length på et array med tre elementer gir oss tallet 3
   11)   For å bruke denne metoden for å endre siste data-element, må vi legge til "-1" for å få riktig indeks */
rows[rows.length - 1] = 20;
//       Repetisjon av initialisering og endring av data med .length
let cities = ["London", "New York", "Mumbai"];
console.log(cities);
cities[cities.length - 1] = "Mexico City";
console.log(cities);
/* 12)   .push: For å legge til ny data til et eksisterende array, uten å endre på eksisterende elementer, kan vi bruke .push()
   13)   Ved behov kan vi lagre dataen som sist ble "dyttet" inn i arrayet, ved å lagre .push til en variabel*/
cities.push("Oslo");
// gir verdien "Oslo" til variabelen "pushed"
let pushed = cities.push();
/* 14)   .pop: En måte vi kan hente ut data på er ved hjelp av .pop
   15)   Dette fjerner dataen fra Arrayet og gjør den "tilgjengelig" til å brukes et annet sted i koden  
   16)   Vi kan gi en varabel verdien av data vi popper ut fra et array direkte */
let popped = cities.pop();
console.log(popped);
