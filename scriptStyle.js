function fargeleggOrd(prefix, className) {
   const kodeBoksList = document.querySelectorAll(".kodeFarge");
   kodeBoksList.forEach((kodeBoks) => {
      const kodeTekst = kodeBoks.innerHTML;
      const regex = new RegExp(`\\b(${prefix}\\w*)\\b`, "g");
      const fargetTekst = kodeTekst.replace(regex, `<span class="${className}">$1</span>`);
      kodeBoks.innerHTML = fargetTekst;
   });
}
fargeleggOrd("navn", "eksNavn");
fargeleggOrd("tall", "eksNavn");
fargeleggOrd("svar", "eksNavn");

fargeleggOrd("query", "eksQue");
fargeleggOrd("get", "eksQue");

fargeleggOrd("eksBool", "eksNavn");
/* 1. Funksjon for å fargelegge bestemte ord i HTML-tekst
   2. Først henter den alle eksemplarene av HTML-elementer med klassen "kodeFarge" til variabelen "kodeBiksList"
   3. Deretter kjører den gjennom hvert eksemplar og henter tekstinnholdet til variabelen "kodeTekst" med innerHTML
   4. Med informasjonen kjøres en "new RegExp" som er et "regulært inntrykk" designet for å finne alle forekomster av ord.
   5. RegExp-funskjonen er satt opp med ett sett regler:
      a. \b    =  Et "word boundary-anker" som brukes for å indikere at et mønster skal starte og slutte på en ordgrense. 
      b. \\b   =  På grunn av at skråstrek er et spesialtegn Js-strenger, må vi skrive to skråstrek før “b”, slik at det leses “\b”
      b. "g"   =  angir at det skal finne alle forekomster, ikke bare den første.)
      c. \\w*  =  er et mønster som samsvarer med null eller flere ordkarakterer. \w samsvarer med alfanumeriske tegn (bokstaver og tall), 
      d. *     =  indikerer null eller flere alfanumeriske tegn.
   6. Alle forekomster funnet av RegExp erstattet med seg selv ved hjelp av .replace samtidig som de innlemmes med <span>-tagg. 
   7. Til slutt skriver innformasjonen fra fargetTekst tilbake til tekstinnholdet i kodeBoksen ved hjelp av innerHTML.
   8. Ord defineres separat ved å kjøre fargeleggOrd for hvert ord i mønsteret "fargeleggOrd(prefix, color)". 
*/

function fargeleggHeleOrd(word, className) {
   const kodeBoksList = document.querySelectorAll(".kodeFarge");
   kodeBoksList.forEach((kodeBoks) => {
      const kodeTekst = kodeBoks.innerHTML;
      const regex = new RegExp(`\\b${word}\\b`, "g");
      const fargetTekst = kodeTekst.replace(regex, `<span class="${className}">${word}</span>`);
      kodeBoks.innerHTML = fargetTekst;
   });
}
fargeleggHeleOrd("var", "eksVar");
fargeleggHeleOrd("const", "eksVar");
fargeleggHeleOrd("let", "eksVar");
fargeleggHeleOrd("True", "eksVar");
fargeleggHeleOrd("False", "eksVar");
fargeleggHeleOrd("null", "eksVar");
fargeleggHeleOrd("undefined", "eksVar");
fargeleggHeleOrd("p", "eksVar");
fargeleggHeleOrd("function", "eksVar");

fargeleggHeleOrd("RegExp", "eksReg");

fargeleggHeleOrd("BigInt", "eksQue");
fargeleggHeleOrd("Symbol", "eksQue");
fargeleggHeleOrd("forEach", "eksQue");
fargeleggHeleOrd("teller", "eksQue");

fargeleggHeleOrd("document", "eksDoc");
fargeleggHeleOrd("textContent", "eksDoc");

fargeleggHeleOrd("eksString", "eksNavn");
fargeleggHeleOrd("eksSymbol", "eksNavn");
fargeleggHeleOrd("eksNumber", "eksNavn");
fargeleggHeleOrd("eksBigInt", "eksNavn");
fargeleggHeleOrd("eksObject", "eksNavn");
fargeleggHeleOrd("eksUndefined", "eksNavn");
fargeleggHeleOrd("eksNull", "eksNavn");
fargeleggHeleOrd("name", "eksNavn");
fargeleggHeleOrd("surname", "eksNavn");
fargeleggHeleOrd("age", "eksNavn");
fargeleggHeleOrd("Nøkkel", "eksNavn");
fargeleggHeleOrd("id", "eksNavn");
fargeleggHeleOrd("seksKant", "eksNavn");

function fargeleggTall() {
   const kodeBoksList = document.querySelectorAll(".kodeFarge");
   kodeBoksList.forEach((kodeBoks) => {
      const kodeTekst = kodeBoks.innerHTML;
      const regex = /\b(\d+(\.\d+)?)\b/g;
      const fargetTekst = kodeTekst.replace(regex, '<span class="eksNum">$1</span>');
      kodeBoks.innerHTML = fargetTekst;
   });
}
fargeleggTall();
/* 1. Et regulært uttrykk som fungerer på samme måte som koden over, men laget for å fange opp alle forekomster av tall
   “/”      =  Start- og sluttdelimiterne for det regulære uttrykket. Alt som er mellom disse delerene er selve uttrykket.
   “\b”     =  Et word boundary-anker. Det indikerer at uttrykket skal starte og slutte på en ordgrense.
   “(\d+)”  =  Fanger ett eller flere sifre. \d er en metakarakter som samsvarer med en enkelt siffer, og + indikerer ett eller flere sifre.
   “(\.\d+)”=  Fanger desimalpunktet (.) etterfulgt av ett eller flere sifre
   “?”      =  Gjør hele gruppen valgfri, slik at den kan fanges hvis den er til stede, eller utelates hvis det ikke er desimaler.
   “\b”     =  Et annet word boundary-anker som indikerer at uttrykket skal slutte på en ordgrense.
   “g”      =  Et flagg som indikerer at søket etter mønsteret skal gjentas globalt over hele teksten, ikke bare stoppe ved den første forekomsten.
   */
