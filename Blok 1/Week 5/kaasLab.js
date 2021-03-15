var answer = prompt("Is de kaas geel?");

if (answer == "ja") {
    var answer = prompt("Zitten er gaten in?");

    if (answer == "ja") {
        var answer = prompt("Is de kaas belachelijk duur?");

        if (answer == "ja") {
            alert("Emmenthaler");
        } else {
            alert("Leerdammer");
        }
    } else {
        var answer = prompt("Is de kaas zo hard als steen?");

        if (answer == "ja") {
            alert("Parmigiano Reggiano");
        } else {
            alert("Goudse kaas");
        }
    }

} else {
    var answer = prompt("Heeft de kaas blauwe schimmels?");

    if (answer == "ja") {
        var answer = prompt("Heeft de kaas een korst?");

        if (answer == "ja") {
            alert("Bleu de Rochebaron");
        } else {
            alert("Fourme de Montbrison");
        }
    } else {
        var answer = prompt("Heeft de kaas een korst?");
        
        if (answer == "ja") {
            alert("Camembert");
        } else {
            alert("Mozzerella");
        }
    }
}