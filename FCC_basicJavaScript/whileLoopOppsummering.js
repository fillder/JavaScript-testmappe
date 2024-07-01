/* ------------------- // ----------------- 
   -------------- // ----- // ------------- 
   ----------- // while-loop // -----------
   ------------- // ----- // -------------- 
   ----------------- // ------------------- */

/* 1)  En while-loop fortsetter å kjøre til betingelsen er nådd
   2)  En while-loop som er satt til "false" vil ikke kjøre, mens satt til "true" vil den kjøre uten stop. 
   3)  En endeløs eller "infinite" loop, kan være krevende og til og med låse systemet, slik at det krever en restart. Dette må vi prøve å unngå. 
*/

while (condition) {
   logic;
}

// to variabler nødvendig

let continueLoop = false;
let done = 0;

while (continueLoop) {
   done++;
   if (done === count) {
      continueLoop = false;
   }
}

// En variabler nødvendig

let done2 = 0;

while (done <= count) {
   done++;
   rows.push(padRow(done, count));
}

// Ingen variabler nødvendig

while (rows.length < count) {
   rows.push(padRow(rows.length + 1, count));
}
