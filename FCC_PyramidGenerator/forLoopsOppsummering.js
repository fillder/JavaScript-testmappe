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
