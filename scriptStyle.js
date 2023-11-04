// Funksjon for å fargelegge et bestemt ord i HTML-tekst
function fargeleggOrd(prefix, color) {
   //Henter HTML-elementet med ID: #codeBlock
   const kodeBoks = document.getElementById("codeBlock");

   //henter teksten til HTML-elementet og lagrer det som en verdi til en ny variabel
   const kodeTekst = kodeBoks.innerHTML;

   /*Bygger et "regulært inntrykk" (regex, designet for å finne alle forekomster ord som skal fargelegges. 
    “\b” er en word boundary-anker som brukes i regulære uttrykk for å indikere at et mønster skal starte og slutte på en ordgrense. Dobbelt bakover skråstrek (\\) brukes fordi en enkelt bakover skråstrek (\) er et spesialtegn i JavaScript-strenger. “\\b” leses derfor som “\b”
    Dette er viktig for å sikre at vi fanger hele tall eller desimaltall som separate ord.
    “"g"” angir at det skal finne alle forekomster, ikke bare den første.)
    “\\w*” er et mønster som samsvarer med null eller flere ordkarakterer. \w samsvarer med alfanumeriske tegn (bokstaver og tall), 
    og * indikerer null eller flere av dem. Dette betyr at vi søker etter ord som starter med prefix og deretter har null eller 
    flere alfanumeriske tegn.
    \\b:” Dette er en annen word boundary-anker som indikerer at uttrykket skal slutte på en ordgrense.*/
   const regex = new RegExp(`\\b(${prefix}\\w*)\\b`, "g");

   /*bruker .replace for å erstatte alle forekomster av ordene med seg selv som er innlemmet
   med <span>-taggen sammen med en inline fargelegging*/
   const fargetTekst = kodeTekst.replace(regex, `<span style="color: ${color}">$1</span>`);

   //Tilegner variabelen fargetTekst til innholdet i kodeBoks, slik at fargene oppdateres riktig
   kodeBoks.innerHTML = fargetTekst;
}

// Kjører funksjonen for hvert ord som defineres under
fargeleggOrd("con", "#3691ff");
fargeleggOrd("var", "#10b1fe");

function fargeleggTall(color) {
   const kodeBoks = document.getElementById("codeBlock");
   const kodeTekst = kodeBoks.innerHTML;
   /* Et regulært uttrykk som er laget for å fange opp alle forekomster av tall
   “/” og “/” er start- og sluttdelimiterne for den regulære uttrykket. Alt som er mellom disse delerene er selve uttrykket.
   “\b” er en word boundary-anker. Det indikerer at uttrykket skal starte og slutte på en ordgrense. Dette er viktig for å sikre at vi fanger hele tall eller desimaltall som separate ord.
   “(\d+)” fanger ett eller flere sifre. \d er en metakarakter som samsvarer med en enkelt siffer, og + indikerer ett eller flere sifre.
   “(\.\d+)?” er en valgfri gruppe for desimaldeler av tallet. 
   “(\.\d+)” fanger desimalpunktet (.) etterfulgt av ett eller flere sifre, og ? gjør hele gruppen valgfri, 
   slik at den kan fanges hvis den er til stede, eller utelates hvis det ikke er desimaler.
   “\b” er en annen word boundary-anker som indikerer at uttrykket skal slutte på en ordgrense.
   “g” er en flagg som indikerer at søket etter mønsteret skal gjentas globalt over hele teksten, ikke bare stoppe ved den første forekomsten.*/
   const regex = /\b(\d+(\.\d+)?)\b/g;
   const fargetTekst = kodeTekst.replace(regex, `<span style="color: ${color}">$1</span>`);
   kodeBoks.innerHTML = fargetTekst;
}

fargeleggTall("#3fc56b");
