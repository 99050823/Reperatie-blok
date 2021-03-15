var smallButton = document.getElementById("small");
var mediumButton = document.getElementById("medium");
var largeButton = document.getElementById("large");

var printBon = document.getElementById("bon");

var kassabon = document.getElementById("kassabon");

var popUpSmall = document.getElementById("popUpSmall");
var popUpMedium = document.getElementById("popUpMedium");
var popUpLarge = document.getElementById("popUpLarge");

var popUpSmallContent = document.getElementById("prijsSmall");
var popUpMediumContent = document.getElementById("prijsMedium");
var popUpLargeContent = document.getElementById("prijsLarge");

var totaalTekst = document.getElementById("totaalBedrag");

//------------------------------------------------------------------------------------
// Prijzen en prijs berekening

    const prijsSmall = 1.80;
    const prijsMedium = 2.20;
    const prijsLarge = 3.00;

    var aantalSmall;
    var aantalMed;
    var aantalLarge;

    var totaalSmall;
    var totaalMed;
    var totaalLarge;

    var totaal;

//------------------------------------------------------------------------------------

smallButton.onclick = small;
mediumButton.onclick = medium;
largeButton.onclick = large;
printBon.onclick = print;

//-------------------------------------------------------------------------------------

// functies berekenen pizza's 

function small () {
    aantalSmall = prompt("Hoeveel kleine pizza's wilt u?");

    totaalSmall = aantalSmall * prijsSmall;
}


function medium () {
    aantalMed = prompt("Hoeveel normale pizza's wilt u?");

    totaalMed = aantalMed * prijsMedium;

}

function large () {
    aantalLarge = prompt("Hoeveel grote pizza's wilt u?");

    totaalLarge = aantalLarge * prijsLarge;
}

//-------------------------------------------------------------------------------------

// functies kassabon & PopUps

function print () {
    kassabon.style.visibility = "visible";

    popUpSmallContent.append(Math.floor((totaalSmall) * 100) / 100);
    popUpMediumContent.append(Math.floor((totaalMed) * 100) / 100);
    popUpLargeContent.append(Math.floor((totaalLarge) * 100) / 100);

    document.getElementById("aantal1").append(aantalSmall);
    document.getElementById("aantal2").append(aantalMed);
    document.getElementById("aantal3").append(aantalLarge);

    totaal = totaalSmall + totaalMed + totaalLarge; 

    totaalTekst.append(Math.floor((totaal) * 100) / 100);
}

function smallClick () {
    popUpSmall.style.display = "block";
}

function mediumClick () {
    popUpMedium.style.display = "block";
}

function largeClick () {
    popUpLarge.style.display = "block";
}

function buttonPopUp1 () {
    popUpSmall.style.display = "none";
}

function buttonPopUp2 () {
    popUpMedium.style.display = "none";
}

function buttonPopUp3 () {
    popUpLarge.style.display = "none";
}
