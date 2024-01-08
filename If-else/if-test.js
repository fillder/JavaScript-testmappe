/* Dette er en enkel if-setning med en 
"større enn" operatør */
function ifTest() {
   let x = 10;
   if (x > 5) {
      console.log("10 er større enn 5");
   }
}

function elseTest() {
   let y = 5;
   if (y === "5") {
      console.log("Det er samme verdi");
   } else {
      console.log("Det er ikke samme verdi");
   }
}

function ifElseTest() {
   let z = 18;
   if (z > 20) {
      console.log("18 er større enn 20, 15 og 10");
   } else if (z > 15) {
      console.log("18 er større enn 15 og 10");
   } else if (z > 10) {
      console.log("18 er større enn 10");
   } else {
      console.log("18 er ikke større enn 10, 15 eller 20");
   }
}
