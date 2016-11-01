$(document).ready(initializeEvents);
function initializeEvents() {
$("#agregar").click(agregarFila);
}
var peliculasArray = [];

function agregarFila() {

    var identificador = document.getElementById("id").value;
    var tituloPeli = document.getElementById("titulo").value;
    var directorPeli = document.getElementById("director").value;
    var sipnosisPeli = document.getElementById("sipnosis").value;
    var fechaPeli = document.getElementById("fecha").value;

    var peliculasObj = { id: identificador, titulo: tituloPeli, director: directorPeli, sipnosis: sipnosisPeli, fecha: fechaPeli };
    peliculasArray.push(peliculasObj);

    //console.log(peliculasArray);

    addTabla(identificador, tituloPeli, directorPeli, sipnosisPeli, fechaPeli);

    document.getElementById("id").value = "";
    document.getElementById("titulo").value = "";
    document.getElementById("director").value = "";
    document.getElementById("sipnosis").value = "";
    document.getElementById("fecha").value = "";
}

function addTabla(identificador, tituloPeli, directorPeli, sipnosisPeli, fechaPeli) {

$("#tabla").append("<tr><td>" + identificador + "</td>" + "<td>" + tituloPeli
        + "</td>" + "<td>" + directorPeli + "</td>" + "<td>" + sipnosisPeli + "</td>" + "<td>"
        + fechaPeli + "</td></tr>");
 /* var tablaPeli = document.getElementById("tabla");
    var fila = tablaPeli.insertRow();
    var idPeli = fila.insertCell(0); 
    var tituPeli = fila.insertCell(1); 
    var direPeli = fila.insertCell(2); 
    var sipPeli = fila.insertCell(3); 
    var fePeli = fila.insertCell(4); 
 
    idPeli.innerHTML = identificador;
    tituPeli.innerHTML = tituloPeli;
    direPeli.innerHTML = directorPeli;
    sipPeli.innerHTML = sipnosisPeli;
    fePeli.innerHTML = fechaPeli;  */
}

