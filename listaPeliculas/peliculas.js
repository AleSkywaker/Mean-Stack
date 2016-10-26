$(document).ready(initializeEvents);
function initializeEvents(){
   $("#agregar").click(agregarFila);
   $("#guardar").click(guardar);
   $("#actualizar").click(actualizar);
   $("#eliminar").click(eliminar);
   
}
function agregarFila(){
    $("table").append("<tr><td>6</td><td>Nuevo</td><td>Nuevo</td><td>Nuevo</td><td>Nuevo</td></tr>");
}
function guardar(){
    // dentro de <ul> me lo cargo y pongo lo que tenga dentro de html()
    $("ul").html("<li>Primer item</li><li>Segundo item</li><li>Tercer item</li><li>Cuarto item</li>");
}
function actualizar(){
    $("ul").append("<li>Agrego un item al final</li>");
}
function eliminar(){
    $("ul").prepend("<li>Agrego un item al principio</li>");
}
