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

//Dot Notation vs Bracket Notation: Dot notation (object.property) is used when you know the property name at compile time. Bracket notation (object['property']) is used when the property name is dynamic or stored in a variable.
