let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const weapons = [
   { name: "stick", power: 5 },
   { name: "dagger", power: 30 },
   { name: "claw hammer", power: 50 },
   { name: "sword", power: 100 },
];
const locations = [
   {
      name: "town square",
      buttonText: ["Go to store", "Go to cave", "Fight dragon"],
      buttonFunctions: [goStore, goCave, fightDragon],
      text: 'You are in the town square. You see a sign that says "Store".',
   },
   {
      name: "store",
      buttonText: ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
      buttonFunctions: [buyHealth, buyWeapon, goTown],
      text: "You enter the store.",
   },
   {
      name: "cave",
      buttonText: ["Fight slime", "Fight fanged beast", "Go to town square"],
      buttonFunctions: [fightSlime, fightBeast, goTown],
      text: "You enter the cave. You see some monsters.",
   },
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
   button1.innerText = location.buttonText[0];
   button2.innerText = location.buttonText[1];
   button3.innerText = location.buttonText[2];
   button1.onclick = location.buttonFunctions[0];
   button2.onclick = location.buttonFunctions[1];
   button3.onclick = location.buttonFunctions[2];
   text.innerText = location.text;
}

function goTown() {
   update(locations[0]);
}

function goStore() {
   update(locations[1]);
}

function goCave() {
   update(locations[2]);
}

function fightDragon() {
   console.log("Fighting dragon.");
}

function buyHealth() {
   if (gold >= 10) {
      gold -= 10;
      health += 10;
      goldText.innerText = gold;
      healthText.innerText = health;
   } else {
      text.innerText = "You do not have enough gold to buy health.";
   }
}
function buyWeapon() {
   /* 1. .length er en innebygd metode for oss å returnere et Array sitt totale antall. 
      2. Her sjekker vi om gjeldende våpen index er mindre enn den totale mengden våpen.
      3. Ettersom Array-indeksering starter på 0, legger vi til -1 etter .length for å gjør opp for at vi allerede har låst opp første gjenstand */
   if (currentWeaponIndex < weapons.length - 1) {
      if (gold >= 30) {
         gold -= 30;
         currentWeaponIndex++;
         goldText.innerText = gold;
         let newWeapon = weapons[currentWeaponIndex].name;
         text.innerText = "You now have a " + newWeapon + ".";
         inventory.push(newWeapon);
         text.innerText += " In your inventory you have: " + inventory;
      } else {
         text.innerText = "You do not have enough gold to buy a weapon.";
      }
   } else {
      text.innerText = "You already have the most powerful weapon!";
      button2.innerText = "Sell weapon for 15 gold";
      button2.onclick = sellWeapon();
   }
}

function fightSlime() {}

function fightBeast() {}

function sellWeapon() {
   if (inventory.length > 1) {
      gold += 15;
      goldText.innerText = gold;
   }
}
