$(document).ready(initializeEvents);
function initializeEvents() {
$("#agregar").click(agregarFila);
}
var peliculasArray = [];

var peliculasObj = { id: identificador, titulo: tituloPeli, director: directorPeli, sipnosis: sipnosisPeli, fecha: fechaPeli };
peliculasArray.push(peliculasObj);

function agregarFila() {
   
var identificador = document.getElementById("id").value;
var tituloPeli = document.getElementById("titulo").value;
var directorPeli = document.getElementById("director").value;
var sipnosisPeli = document.getElementById("sipnosis").value;
var fechaPeli = document.getElementById("fecha").value;

    $.ajax({
        url: 'http://localhost:3000/peliculas',
        type: 'POST',
        contentType: 'application/json',
        // JSON.stringify( { "first-name": $('#first-name').val(), "last-name": $('#last-name').val() } ),
        data: JSON.stringify({
        id:identificador,
        titulo:tituloPeli,
        director:directorPeli,
        genero:sipnosisPeli,
        fecha:fechaPeli
        }),
        dataType: 'json'
        });
       // alert("json posted!");
        
       $.ajax({
        url: 'http://localhost:3000/peliculas',
        type: 'GET',
        contentType: 'application/json',
        // JSON.stringify( { "first-name": $('#first-name').val(), "last-name": $('#last-name').val() } ),
        data: JSON.stringify({
        id:identificador,
        titulo:tituloPeli,
        director:directorPeli,
        genero:sipnosisPeli,
        fecha:fechaPeli
        }),
        dataType: 'json'
        });
      //  alert("json posted!");

    $("#tabla").append("<tr><td>" + identificador + "</td>" + "<td>" + tituloPeli
    + "</td>" + "<td>" + directorPeli + "</td>" + "<td>" + sipnosisPeli + "</td>" + 
    "<td>" + fechaPeli + "</td>"
    + "<td><button>" + "Editar" + "</button><br><button>" + "Eliminar" + "</button></td></tr>");

    document.getElementById("id").value = "";
    document.getElementById("titulo").value = "";
    document.getElementById("director").value = "";
    document.getElementById("sipnosis").value = "";
    document.getElementById("fecha").value = "";
    };


 function init(){



      $.getJSON("http://localhost:3000/peliculas", function(data){

       for (var i = 0; i < data.length; i++) {
    
         $("#tabla").append("<tr><td>" + data[i].id + "</td>" + "<td>" + data[i].titulo
    + "</td>" + "<td>" + data[i].director + "</td>" + "<td>" + data[i].genero + "</td>" + 
    "<td>" + data[i].fecha + "</td>"
    + "<td><button>" + "Editar" + "</button><br><button>" + "Eliminar" + "</button></td></tr>");

       }

       
        });



 }



