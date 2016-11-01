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
     //   alert("json posted!");

       $("#tabla").append("<tr><td>" + identificador + "</td>" + "<td>" + tituloPeli
    + "</td>" + "<td>" + directorPeli + "</td>" + "<td>" + sipnosisPeli + "</td>" + 
    "<td>" + fechaPeli + "</td>"
    + "<td><button>" + "Editar" + "</button></td></tr>");

    document.getElementById("id").value = "";
    document.getElementById("titulo").value = "";
    document.getElementById("director").value = "";
    document.getElementById("sipnosis").value = "";
    document.getElementById("fecha").value = "";
    };







/*function init(){



    $.ajax({
        // Puede ser una cadena, un array o un object de JS
        // nombre=Ruben&nivel_de_cafe=medio
        //  data: {id:"Ruben",nivel_de_cafe:"medio"},
        // Tipo de peticion http
        type:"GET",
        // tipo de dato esperado
        dataType: "json",
        // URL de comunicación con el servicio
        url: "http://localhost:3000/peliculas"
    })
    .done(peticionCompletada)
    .fail(peticionFallida);
}

function peticionCompletada(data, status,jqXHR){
    for (var i = 0; i < data.length; i++) {
    prepareTableCell(data[i].id, data[i].titulo, data[i].director, data[i].fecha);
    //alert("Petición completada con status "+ status +" : " + data);
         $("#tabla").append("<tr><td>" + data[i].id + "</td>" + "<td>" + data[i].tituloPeli
    + "</td>" + "<td>" + data[i].directorPeli + "</td>" + "<td>" + data[i].sipnosisPeli + "</td>" + 
    "<td>" + data[i].fechaPeli + "</td>"
    + "<td><button>" + "Editar" + "</button></td></tr>");
   // $("#tabla").html(data[7].username)
}
function peticionFallida(jqXHR,status,error){
    alert.log("Error al procesar la petición" );
    console.log("Status :" + status);
    console("Error! " + error);
}
*/












        $.ajax({
        url: 'http://localhost:3000/peliculas',
        type: 'GET',
        contentType: 'application/json',
        // JSON.stringify( { "first-name": $('#first-name').val(), "last-name": $('#last-name').val() } ),
        data: JSON.parse({
        id:identificador,
        titulo:tituloPeli,
        director:directorPeli,
        genero:sipnosisPeli,
        fecha:fechaPeli
        }),
        dataType: 'json'
        });
     //   alert("json posted!");




    $("#tabla").append("<tr><td>" + identificador + "</td>" + "<td>" + tituloPeli
    + "</td>" + "<td>" + directorPeli + "</td>" + "<td>" + sipnosisPeli + "</td>" + 
    "<td>" + fechaPeli + "</td>"
    + "<td><button>" + "Editar" + "</button></td></tr>");

        
    }

    /* // on ready render data
  $(document).ready(function() {
    $.table_of_contacts.get.init();
  });
})().call(this);*/