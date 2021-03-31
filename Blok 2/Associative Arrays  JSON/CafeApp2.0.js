const prijzen = {bier:1.80, fris:1.60, wijn:1.80, bitterballen8:2.70, bitterballen16:5.40}
var aantallen = {bier:0, fris:0, wijn:0, '8':0, '16':0}

var bestel = document.getElementById("bestel");
var printBon = document.getElementById("print");
var bestelSnacks = document.getElementById("bestelSnacks");
var bon = document.getElementById("bon");

bestel.onclick = bestellingDrankjes;
bestelSnacks.onclick = bestellingSnacks;
printBon.onclick = berekening;

function bestellingDrankjes () {
    var bestelling = prompt("Wat voor drinken wilt u bestellen?");

    aantallen[bestelling] = aantallen[bestelling] + parseInt(prompt("Hoeveel flessen " + bestelling + " wilt u bestellen?"))
    console.log(aantallen);
} 

function bestellingSnacks () {

    var bestelling = prompt("Wilt u een schaal van 8 of 16 bitterballen?");

    aantallen[bestelling] = aantallen[bestelling] + parseInt(prompt("Hoeveel schalen van " + bestelling + " wilt u bestellen?"))
    console.log(aantallen);
} 

function berekening () {

    var totaal1 = aantallen.bier * prijzen.bier;
    var totaal2 = aantallen.fris * prijzen.fris;
    var totaal3 = aantallen.wijn * prijzen.wijn;

    var totaalBitter8 = aantallen['8'] * prijzen.bitterballen8;
    var totaalBitter16 = aantallen['16'] * prijzen.bitterballen16;

    var totaal = totaal1 + totaal2 + totaal3 + totaalBitter8 + totaalBitter16;

    console.log(Math.floor((totaal) * 100) / 100);

    if (totaal == 0) {
        alert("Voer eerst een bestelling in")
    }

    if (totaal > 0) {

        bestel.remove()
        bestelSnacks.remove()
        printBon.remove()

        print()
    }

    document.getElementById("totaal").append(totaal);
}

function print () {
    bon.style.visibility = "visible";
    bon.style.backgroundColor = "white";
    bon.style.marginLeft = "9cm";
    bon.style.marginRight = "9cm";

    if (aantallen.bier > 0) {
        document.getElementById("bier").innerHTML = "Bier : "
        document.getElementById("bier").append(aantallen.bier);
    }

    if (aantallen.fris > 0) {
        document.getElementById("fris").innerHTML = "Fris : "
        document.getElementById("fris").append(aantallen.fris);
    }

    if (aantallen.wijn > 0) {
        document.getElementById("wijn").innerHTML = "Wijn : "
        document.getElementById("wijn").append(aantallen.wijn);
    }

    if (aantallen['8'] > 0) {
        document.getElementById("bitter8").innerHTML = "Schaal van 8 bitterballen : "
        document.getElementById("bitter8").append(aantallen['8']);
    }

    if (aantallen['16'] > 0) {
        document.getElementById("bitter16").innerHTML = "Schaal van 16 bitterballen : "
        document.getElementById("bitter16").append(aantallen['16']);
    }
}
