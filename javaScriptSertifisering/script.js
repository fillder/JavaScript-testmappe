let cityName = "Althgar";
let xp = 0;
let gold = 50;
let healthMax = 100;
let health = 100;
let armDurMax = 10;
let armDur = 10;
let weapDurMax = 10;
let weapDur = 10;
let repairCost = armDurMax + weapDurMax - armDur - weapDur;
let weaponCost = 30;
let armorCost = 30;
let currentWeaponIndex = 0;
let currentArmorIndex = 0;
let fighting;
let monsterHealth;
let treatWoundsPrice = healthMax - health;
let buyElixirPrice = 100;
let buyBombPrice = 100;
/*  Vi kan legge til en array i variabelen ved hjelp av klammeparenteser.
    let inventory = ["stick","dagger","sword"];*/
let inventory = ["stick"];
//  querySelector("") ser etter det første eksemplaret av nevnt element, nyttig for klasser og h1-tagg
const buttonI = document.querySelector("#buttonI");
const buttonII = document.querySelector("#buttonII");
const buttonIII = document.querySelector("#buttonIII");
const optionI = document.querySelector("#optionI");
const optionII = document.querySelector("#optionII");
const optionIII = document.querySelector("#optionIII");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const weapons = [
   {
      name: "stick",
      power: 5,
   },
   {
      name: "dagger",
      power: 30,
   },
   {
      name: "claw hammer",
      power: 50,
   },
   {
      name: "sword",
      power: 100,
   },
];
const armors = [
   {
      name: "boiled leather armor",
      durability: 12,
   },
   {
      name: "Gambeson armor",
      durability: 24,
   },
   {
      name: "Half-plate armor",
      durability: 48,
   },
   {
      name: "Full-plate armor",
      durability: 96,
   },
];
const locations = [
   {
      name: "outskirts",
      Text: "You are outside the town of " + cityName + ". Where do you want to go?",
      buttonText: ["The Town square", "The Forlorn Woods", "The Mountains"],
      buttonFunction: [goTown, goWoods, goMountain],
   },
   {
      name: "town square",
      Text: "You are in the town square. what do you want to do?. you can:",
      buttonText: ["Visit the blacksmith", "Visit the ", "Fight dragon"],
      buttonFunction: [goSmith, goCave, fightDragon],
   },
   {
      name: "forlorn forest",
      buttonText: ["Fight slime", "Fight fanged beast", "Go to town square"],
      buttonFunction: [fightSlime, fightBeast, goTown],
      text: "You enter the cave. You see some monsters.",
   },
   {
      name: "secret forest",
      buttonText: ["Fight slime", "Fight fanged beast", "Go to town square"],
      buttonFunction: [fightSlime, fightBeast, goTown],
      text: "You enter the cave. You see some monsters.",
   },
   {
      name: "mountain",
      buttonText: ["Fight slime", "Fight fanged beast", "Go to town square"],
      buttonFunction: [fightSlime, fightBeast, goTown],
      text: "You enter the cave. You see some monsters.",
   },
   {
      name: "mountain summit",
      buttonText: ["Fight slime", "Fight fanged beast", "Go to town square"],
      buttonFunction: [fightSlime, fightBeast, goTown],
      text: "You enter the cave. You see some monsters.",
   },
   {
      name: "caves",
      buttonText: ["Fight slime", "collect mushrooms", "Explore deeper"],
      buttonFunction: [fightSlime, collectMushrooms, exploreCave],
      text: "You enter the cave. You see some monsters.",
   },
];
const shops = [
   {
      name: "apothecary",
      optionText: [treatWoundsPrice, buyElixirPrice, buyBombPrice],
      buttonText: ["Treat Wounds", "Buy elixir", "Buy bomb"],
      buttonFunction: [treatWounds, buyElixir, buyBomb],
      text: "You visit the Apothecary.",
   },
   {
      name: "Blacksmith",
      optionText: [
         "Repair your equipment for " + repairCost + " gold",
         "buy " + weapons[currentWeaponIndex + 1].name + " for " + weaponCost + " gold",
         "buy " + armors[currentArmorIndex + 1].name + " for " + armorCost + " gold",
      ],
      buttonText: ["Buy 10 health", "Buy weapon", "Buy a armor"],
      buttonFunction: [repairEquipment, buyWeapon, buyArmor],
      text: "You enter the smithy.",
   },
];
// initialiser knappene
function update(location) {
   /*   1. Vi kan gjøre innholdet i funksjonen dynamisk ved å benytte definert parameter, basert på lokasjonen vi er vil teksten endre seg 
        2. Siden lokasjon buttonText består av et array med tre elementer, kan vi velge hvilken tekst som skal vises med hakeparentes-begrepet [0];*/
   optionI.innerText = location.optionText[0];
   optionII.innerText = location.optionText[1];
   optionIII.innerText = location.optionText[2];
   buttonI.innerText = location.buttonText[0];
   buttonII.innerText = location.buttonText[1];
   buttonIII.innerText = location.buttonText[2];
   buttonI.onclick = location.buttonFunction[0];
   buttonII.onclick = location.buttonFunction[1];
   buttonIII.onclick = location.buttonFunction[2];
   text.innerText = location.text;
}
//Location options Outskirts
function goTown() {
   /*  1. Vi kan kalle en funksjon ved å kun skrive navnet på funksjonen etterfulgt av paranteser. Eksempel: minFunkjson()
        2. Inni parentesene til funksjonen vår kan vi kan vi spesifisere et paramenter/argument. Dette kan være et eksisterende Array. Eksempel: minFunksjon(arrayNavn) 
        3. Dersom vi ønsker å hente inn en spesifikk del av et array, kan vi spesifisere det med et tall, som representerer rekkefølgen det er skrevet i arrayet*/
   update(locations[1]);
}
function goWoods() {
   update(locations[2]);
}
function goMountain() {
   update(locations[3]);
}
//Location options Town Square
function goSmith() {
   update(locations[1]);
}
function goApothecary() {
   update(locations[1]);
}
function goInn() {
   update(locations[1]);
}
//Location options Forlorn Forest
function fightBeast() {}
function collectplants() {}
function exploreForest() {}
//Location options Secret forest
//Location options Mountain
function goCave() {
   update(locations[2]);
}
function goSummit() {}
function goBack() {}
//Location options Cave
function fightSlime() {}
function collectMushrooms() {}
function exploreCave() {}
//Location options Mountain Summit
function fightDragon() {}
function useItem() {}
function flee() {}

//Shop options blacksmith
function repairEquipment() {}
function buyWeapon() {
   if (currentWeaponIndex < 3) {
      if (gold >= weaponCost) {
         gold -= weaponCost;
         weaponCost *= 2;
         currentWeaponIndex++;
         goldText.innerText = gold;
         let newWeapon = weapons[currentWeaponIndex].name;
         text.innerText = "You now have a " + newWeapon + ".";
         // sender dataen fra variabelen til slutten av Arrayet "inventory"
         inventory.push(newWeapon);
         text.innerText += " In your inventory you have: " + inventory;
      } else {
         text.innerText = "You do not have enough gold to buy a weapon..";
      }
   }
}
function buyArmor() {}
//Shop options apothecary
function treatWounds() {
   if (gold >= treatWoundsPrice && health < healthMax) {
      gold -= treatWoundsPrice;
      health = healthMax;
      goldText.innerText = gold;
      healthText.innerText = health;
   } else if (health == healthMax) {
      text.innerText = "You are already at full health.";
   } else if (gold < treatWoundsPrice) {
      text.innerText = "You do not have enough gold to treat your wounds.";
   }
}
function buyElixir() {}
function buyBomb() {}
//Shop options inn
function relax() {}
function askGossip() {}
function takeQuest() {}

// En funksjon kan deklareres med en såkalt "dot notion" eller punktum-begrep i skriptet, eller som en HTML attributt
buttonI.onclick = goSmith;
buttonII.onclick = goCave;
buttonIII.onclick = fightDragon;
console.log(treatWoundsPrice);
