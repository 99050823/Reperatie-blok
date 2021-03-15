var drankjes = document.getElementById("drankjes");
var snacks = document.getElementById("snacks");
var printBon = document.getElementById("bon");
var kassabon = document.getElementById("kassabon");
var popUp = document.getElementById("popUp");
var content = document.getElementById("popUpContent");

drankjes.onclick = bestellenDrinken;
printBon.onclick = print;
snacks.onclick = bestellenSnacks;

const prijzen = {bier:1.80, fris:1.50, wijn:2.00, bitterballen8:4.00, bitterballen16:8.00}
var aantallen = {bier:0, fris:0, wijn:0, bitterballen8:0, bitterballen16:0};


function bestellenDrinken () {

    while (bestelling != "stop") {
        var bestelling = prompt("Maak u keuze: bier, wijn of fris?");

        if (bestelling == "bier") {
            aantallen['bier'] = prompt("Hoeveel bier wilt u bestellen?");
        }

        if (bestelling == "fris") {
            aantallen['fris'] = prompt("Hoeveel blikjes fris wilt u bestellen?");
        }

        if (bestelling == "wijn") {
            aantallen['wijn'] = prompt("Hoeveel glazen wijn wilt u bestellen?");
        }
    }

}

function bestellenSnacks () {
    while (bestelling != "stop") {
        var bestelling = prompt("Maak u keuze: \nbitterballen schaal 8st \nbitterballen schaal 16st");

        if (bestelling == "8") {
            aantallen['bitterballen8'] = prompt("Hoeveel schalen van 8 wilt u bestellen?");
        }

        if (bestelling == "16") {
            aantallen['bitterballen16'] = prompt("Hoeveel schalen van 16 wilt u bestellen?");
        }
    }
}

function print () {
    var bier = aantallen['bier'];
    var totaalBier = bier*prijzen['bier'];
    console.log(totaalBier);

    var fris = aantallen['fris'];
    var totaalFris = fris*prijzen['fris'];
    console.log(totaalFris);

    var wijn = aantallen['wijn'];
    var totaalWijn = wijn*prijzen['wijn'];
    console.log(totaalWijn);

    var bitterballen8 = aantallen['bitterballen8'];
    var totaalBitter8 = bitterballen8*prijzen['bitterballen8'];
    console.log(totaalBitter8);

    var bitterballen16 = aantallen['bitterballen16'];
    var totaalBitter16 = bitterballen16*prijzen['bitterballen16'];
    console.log(totaalBitter16);

    var eindTotaal = totaalFris + totaalWijn + totaalBier + totaalBitter8 + totaalBitter16;
    console.log(eindTotaal);

    kassabon.style.visibility = "visible";

    if (bier > 0) {
        document.getElementById("bier").append("Aantal flessen bier = " + bier);
    }

    if (wijn > 0) {
        document.getElementById("wijn").append("Aantal glazen wijn = " + wijn);
    }

    if (fris > 0) {
        document.getElementById("fris").append("Aantal blikken fris = " + fris);
    }

    if (bitterballen8 > 0) {
        document.getElementById("bitter8").append("Aantal schalen van 8st = " + bitterballen8);
    }

    if (bitterballen16 > 0) {
        document.getElementById("bitter16").append("Aantal schalen van 16st = " + bitterballen16);
    }

    document.getElementById("Totaal").append(eindTotaal);

}

function bon () {
    popUp.style.display = "block";
}

function buttonPopUp1 () {
    popUp.style.display = "none";
}


