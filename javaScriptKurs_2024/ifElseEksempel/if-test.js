function ifTest() {
   let x = 10;
   if (x > 5) {
      console.log("10 er større enn 5");
   }
}

function elseTest() {
   let y = 3;
   if (y > 5) {
      console.log("3 er større enn 5");
   } else {
      console.log("3 er ikke større enn 5");
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
