var Auto = [];

function Autos () {
    
    do {

        var vraag = prompt("Wat voor auto wilt u toevoegen?");
        Auto.push(vraag);
        console.log(Auto);

    } while (vraag != "stop") {

        Auto.pop()

    }

    for (let i = 0; i < Auto.length; i++) {
        document.write(Auto[i] + "<br>");
    }

}

Autos()