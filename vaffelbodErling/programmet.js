let moneyGebi = document.getElementById("viserAntallKroner")
let comGebi = document.getElementById("viserPrisIngredienser")
let lagerGebi = document.getElementById("viserVareBeholdning")
let prisGebi = document.getElementById("viserGjeldendePris")
let lag = document.getElementById("lageKnapp")
let autoMakeGebi = document.getElementById("upgrade1")
let autoSellGebi = document.getElementById("upgrade2")
let varsel = document.getElementById("varselTekst")

let money = parseInt(localStorage.getItem("money")) || 3
let com = parseInt(localStorage.getItem("com")) || 3
let lager = parseInt(localStorage.getItem("lager")) || 0
let pris = parseInt(localStorage.getItem("pris")) || 10

localStorage.setItem('money', money);
localStorage.setItem('com', com);
localStorage.setItem('lager', lager);
localStorage.setItem('pris', pris);


function lagVaffel() { 
    let lager = parseInt(localStorage.getItem('lager'));
    let money = parseInt(localStorage.getItem('money'));
    console.log("lagVaffel-funksjonen fungerer")

    if (money >= com) {
        lager++
        money -= com;
        varsel.textContent = "";
        localStorage.setItem('lager', lager);
        localStorage.setItem('money', money);
        lagerGebi.textContent = localStorage.getItem("lager") + " vafel på lager";
        moneyGebi.textContent = localStorage.getItem("money") + " kr";
        console.log("If er sant")
    }
    else {
        varsel.textContent = "Du har " + money + " kr";
        console.log("salg-else er sant")
    }
}
function selgVaffel() {
    let lager = parseInt(localStorage.getItem('lager'));
    let money = parseInt(localStorage.getItem('money'))
    console.log("selgVaffel-funksjonen fungerer")

    if (lager > 0){
        lager--;
        money += pris;
        varsel.textContent = "";
        localStorage.setItem('lager', lager);
        localStorage.setItem('money', money);
        lagerGebi.textContent = localStorage.getItem("lager") + " vafel på lager";
        moneyGebi.textContent = localStorage.getItem("money") + " kr";
        console.log("salg-if er sant")
    }
    else {
        varsel.textContent = "Du har " + lager + " vafel på lager";
        console.log("salg-else er sant")
    }
}
function pluss() {
    if (pris < 10) {
    pris++
    prisGebi.textContent = pris + " kr"
    localStorage.setItem('pris', money); 
    }
}
function minus() {
    if (pris > 0) {
    pris--
    prisGebi.textContent = pris  + " kr"
    localStorage.setItem('pris', money);
    }
}
window.onload = function() {
    money = parseInt(localStorage.getItem("money"));
    com = parseInt(localStorage.getItem("com"));
    lager = parseInt(localStorage.getItem("lager"));
    pris = parseInt(localStorage.getItem("pris"));

    moneyGebi.textContent = localStorage.getItem("money") + " kr";
    comGebi.textContent = localStorage.getItem("com");
    lagerGebi.textContent = localStorage.getItem("lager") + " vafel på lager";
    prisGebi.textContent = localStorage.getItem("pris") + " kr";
}

/*
function autoMake(){
    if (money >= 200) {
        autoSellGebi.style.display = "block";
        autoMakeGebi.style.display = "none"
        money -= 200
        // localStorage.setItem('money', money);
        setInterval(() => {
            lagVaffel()
        }, 750);
    }
}


function autoSell() {
    if (money >= 500) {
        money -=500
        // localStorage.setItem('money', money);
        setInterval(() => {
            selg()
            autoSellGebi.style.display = "none" 
            
        }, 500);
    }
}*/