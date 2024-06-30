/* ------------------ // ----------------
   -------------- // --- // -------------
   ----------- // For-loops // ----------
   -------------- // --- // -------------
   ----------------- // ----------------- */

const character = "#";
const count = 8;
const rows = [];

/* 1)  En loop benyttes for å iterere eller kjøre en kode flere ganger
   2)  En For loop benyttes for å kjøre noe X antall ganger 
   3)  For-loops har følgende oppskrift
   
   for ("iterator"; "condition"; "iteration") {
      logic;
   }

   4)  "Iterator" er hva som skal kjøres. Dette kan være en variabel, e.g "let i = 0"
   5)  "condition" er en betingelse som er enten "true" eller "false", Loopen vil kjøre så lenge betingelsen er "true"
   6)  "iteration" bestemmer hva som skal skje med "iterator", altså variabelen i denne situasjonen, hver gang loopen kjører
   
   */

for (let i = 0; i < count; i = i + 1) {
   // Legger til verdien av "i" inn i arrayet for hver gang den kjører for-loopen
   rows.push(i);
   console.log(i);
}
// 7)  Oppsummert: Koden over tar variabelen "i", og legger til 1, så lenge betingelsen er riktig, som vil si at den slutter når variabelen har en verdi på "7", fordi 8 er ikke mindre enn 8.

/* 8)  En alternativ for-loop er en "fot...of" metode
   9)  Denne itererer over hvert element i det itererbare objektet og lagrer det midlertidig i en variabel
   10) Her kan vi benytte en const variabel, da den kun varer en iterasjon, ikke hele loopen

   for (const value of iterable) {
      logic;
}*/
let result = "";

for (const row of rows) {
   // 11) Vi kan bruke for-loops til å lage sammenkoblinger (concatenation)
   result = result + row;
}

/* 12) En "fluktsekvens" (escape sequence) er et begrep for kodesnutter vi bruker for å utføre spesielle handlinger, og kan brukes som en del av en sammenkobling
   13) "\n" er en fluktsekvens for å bytte linje og kan brukes for å sammenkoble strenger over flere linjer. eksempel:  */

for (let i = 0; i < count; i++) {
   /* 14) Koden dytter verdien av character (#) inn i et array, like mange ganger som verdien av "i", for hver iterasjon
      15) Vi legger til "+1" for å unngå å returnere "0" første iterasjon, da arrays bruker 0 indeksering */
   rows.push(character.repeat(i + 1));
}
