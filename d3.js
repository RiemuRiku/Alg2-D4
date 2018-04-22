var sanaCounter = 0;
var sanaTaulu = []; 

window.onload = function() {
    puskeTauluun(sanaCounter, "banaani");
    puskeTauluun(sanaCounter, "luumu");
    puskeTauluun(sanaCounter, "omena");
    puskeTauluun(sanaCounter, "persikka");
    puskeTauluun(sanaCounter, "sitruuna");
    luoLista();
    //rastiLomake();
}



function getData(e) {
    var x = sanaCounter;
    var y = document.getElementsByName("firstname").value;
    var z = document.getElementById('form');

    puskeTauluun(x, y);
    sanaCounter++;
}

function puskeTauluun(avain, arvo){
    sanaTaulu.push({
        key:   avain,
        value: arvo
    });
    sanaCounter++;  
}


function luoLista(){
    a = sanaTaulu;
	console.log(a);
    var index;
    var p = document.createElement("p");
    var ul = document.createElement("ul");


    var lista = document.getElementById("demo");
    //pitäisi poistaa aiemmat Li - elementit
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }



    for (index = (a.length -1); index > -1; --index) {

        var node = document.createElement("li");
        var textnode1 = document.createTextNode(Object.values(a[index]));

        ul.appendChild(node);
        node.appendChild(textnode1);
    }
        p.appendChild(ul);
        ul.appendChild(node);
        document.getElementById("demo").appendChild(p);
    console.log(a);
    };




function lisaaSana(e) {

    var valueInput;
    var lat = {};

    koodiInput = document.getElementById('form1');
    koodi = koodiInput.value;
    var key = sanaCounter;

    lat = {key : koodi};
    console.log(koodi, key);

    puskeTauluun(key, koodi);
    //jarjestaRastitAakkosin();
 
    //lisaaRastitPohjaan();
    luoLista();

    alert('Rasti "' + koodi + '" lisätty onnistuneesti ' + key);
    document.getElementById("form1").value = "";
    }

