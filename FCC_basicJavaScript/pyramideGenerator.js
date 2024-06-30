// En variabel med symbolet som skal brukes i pyramiden.
const character = "#";
// En variabel med et statisk tall som er antall rader pyramiden skal bestå av.
const count = 8;
// Et tomt array, som skal lagre hver rad av pyramiden som separate elementer
const rows = [];
//
function padRow(rowNumber, rowCount) {
   return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
//
for (let i = 1; i < count; i++) {
   rows.push(padRow(i, count));
}
// En tom streng som skal lagre det fullstendige mønsteret til pyramiden
let result = "";

for (const row of rows) {
   result = result + "\n" + row;
}

console.log(result);

// Define the character to be used in the pattern
const patternCharacter = "#";

// Set the total number of rows for the pattern
const totalRows = 12;

// Initialize an empty array to hold the rows of the pattern
const patternRows = [];

// Function to pad a single row
function padRow(rowNumber, rowCount) {
   // Calculate the number of spaces and characters needed for this row
   const leadingSpaces = " ".repeat(rowCount - rowNumber);
   const centralCharacters = patternCharacter.repeat(2 * rowNumber - 1);
   const trailingSpaces = " ".repeat(rowCount - rowNumber);

   // Return the padded row using string concatenation
   return leadingSpaces + centralCharacters + trailingSpaces;
}

// Generate the rows for the pattern
for (let i = 1; i <= totalRows; i++) {
   patternRows.push(padRow(i, totalRows));
}

// Construct the final pattern string
const patternString = patternRows.join("\n");

// Log the final pattern to the console
console.log(patternString);
