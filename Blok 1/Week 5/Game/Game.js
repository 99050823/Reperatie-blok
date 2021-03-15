var button1 = document.getElementById("button1");
var tekst = document.getElementById("BeginTekst");
var button2 = document.getElementById("button2");

var ja = 0;
var nee = 0;

button1.onclick = Begin;

button2.style.display = "none";

function Begin () {
    tekst.innerHTML = "Zou je voor jezelf kiezen?"

    button1.innerHTML = "ja";
    button1.onclick = vragen;
}

function vragen () {
    tekst.innerHTML = "Noem je dit arrogantie?"
    button2.style.display = "inline";  
    
    if (button1 = "click") {
        alert("Goed dat je het inziet. Eens kijken of het meent.");
        ja++;

        tekst.innerHTML = "Kies je voor je collega's?";
    } else {
        alert("test")
    }
}
