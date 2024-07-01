/* -------------------- // ----------------
   --------------- // ----- // -------------
   ----------- // gjennomsnitt // ----------
   --------------- // ----- // -------------
   ------------------- // ----------------- */

// En lærer skal finne gjennomsnittet av klassens totale poengsum etter en test. Lag en funksjon som regner ut gjennomsnittet.

/* --- METODE 1 --- */
/* 1. Vi lager en funksjon med en poengene (scores) som et parameter
   2. Vi lager en lokalt tilgjengelig variabel (sum), som skal lagre total poengsum
   3. Vi lager en for-loop som kjører like mange ganger som antallet elementer i testet Array
      A. i er en isolert variabel
      B. loopen kjører så lenge i er mindre enn array
      C. Hver gang loopen kjører, øker i, som nå styrer både antall iterasjoner og indeks i utregningen
   4. Vi plusser sum med hvert element i Arrayet, ved å referere til elementets indeks scores[i].
   5. Når loopen er ferdig, deler vi verdien av sums på antallet elementer i Arrayet 
   6. Vi stopper funksjonen med en return, som gir svaret (gjennomsnittet) av regnestykket */

function getAverage(scores) {
   let sum = 0;
   for (let i = 0; i < scores.length; i++) {
      sum += scores[i];
   }
   let average = sum / scores.length;
   return average;
}
/* --- METODE 2 --- */
/* 1. 1. Vi lager en funksjon med en poengene (scores) som et parameter
   2. Vi lager en lokalt tilgjengelig variabel (sum), som skal lagre total poengsum
   3. Vi lager en for...of loop 
      A. "const" er en konstant-variabel som ikke skal endre seg, kun leses.
      B. "score" er en variabel som lagerer en verdi fra objektet som itereres for hver gang loopen kjøres.
      C. "of" itererer over et itererbart objekt, som i dette tilfellet er et Array.
      D. "scores" er parameteret som erstattes med et Array, og loopen kjører til den har iterert over alle elementene i Arrayet
   4. For hver gang loopen kjøres, legges verdien til "sum"-variabelen 
   5. Når loopen er ferdig returnerer vi verdien av variabelen "sum", delt på lengden (antall elementer) i Arrayet. */
function getAverage(scores) {
   let sum = 0;
   for (const score of scores) {
      sum += score;
   }
   return sum / scores.length;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

/* ------------------ // ----------------
   -------------- // --- // -------------
   ----------- // Karakter // -----------
   --------------// --- // --------------
   ----------------- // ----------------- */

// En Lærer skal sette karakter på hver student basert på funksjonen. Lag en funskjon som setter poengsummen opp mot en tallkarakter

/* 1. Vi et parameter for funksjonen som kan erstattes med en verdi
   2. Vi lager en if-test med parameteret som en betingelse, og tester om det er det samme som, eller mindre enn 59
   3. Vi begynner testen med øverste verdi i laveste karakter. Vi kan begynne motsatt også. 
   4. Hvis påstanden er sant, returneres en streng med bokstavkarakteren, og funksjonen stoppes.
*/
function getGradeAcsending(score) {
   if (score <= 59) {
      return "F";
   } else if (score <= 69) {
      return "D";
   } else if (score <= 79) {
      return "C";
   } else if (score <= 89) {
      return "B";
   } else if (score <= 99) {
      return "A";
   } else {
      return "A++";
   }
}
// Samme funksjonen bare skrevet i motsatt rekkefølge
function getGradeDescending(score) {
   if (score === 100) {
      return "A++";
   } else if (score >= 90) {
      return "A";
   } else if (score >= 80) {
      return "B";
   } else if (score >= 70) {
      return "C";
   } else if (score >= 60) {
      return "D";
   } else {
      return "F";
   }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

//Følgende test sjekker om studenten består prøven eller ikke, ved å returnere "true" eller "false" basert på om poengsummen er høyere enn karakteren "F"
function hasPassingGrade(score) {
   if (score >= 60) {
      return true;
   } else {
      return false;
   }
}
//???
function hasPassingGrade(score) {
   return getGrade(score) !== "F";
}

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

/* ------------------ // ----------------
   -------------- // ----- // -------------
   ----------- // Samlet test // ----------
   ------------- // ----- // -------------
   ----------------- // ----------------- */

function studentMsg(totalScores, studentScore) {
   let sum = 0;
   let grade = "";
   for (const score of totalScores) {
      sum += score;
   }

   if (studentScore === 100) {
      grade = "A++";
   } else if (studentScore >= 90) {
      grade = "A";
   } else if (studentScore >= 80) {
      grade = "B";
   } else if (studentScore >= 70) {
      grade = "C";
   } else if (studentScore >= 60) {
      grade = "D";
   } else {
      grade = "F";
   }

   if (grade !== "F") {
      return "Class average: " + sum / totalScores.length + ". Your grade: " + grade + ". You passed the course.";
   } else {
      return "Class average: " + sum / totalScores.length + ". Your grade: " + grade + ". You failed the course.";
   }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
