console.log("Hola mundo!");
variablesGlobales = "variableGlobal";
var variablesGolbalesConVar = "Sigue siendo variable golbal";
mi_funcion_con_let();
mi_funcion_con_var();
function mi_funcion_con_var(){
var otraVariable = "Esto es una variable local"
  for(var i = 0; i<10; i++){
      console.log("valor de i " + i);
  }
 console.log("valor de i al final " + i);
}


function mi_funcion_con_let(){
var otraVariable = "Esto es una variable local"
  for(let i = 0; i<10; i++){
      console.log("valor de i " + i);
  }








//TODO: Buscar una condicion para evaluar si la variable existe
//console.log("valor de i al final " + i);
}

console.log("Tipo de datos");
var tipoDeDatosNumerico = 7;
var tipoDatoCadena = "siete";
// Referencia 0x23467182
var fechaDeEstreno = new Date();
// Referencia 0x23467182
var otraFecha = fechaDeEstreno;
otraFecha.setFullYear(1989);
console.log("Fecha de estreno " + fechaDeEstreno.getFullYear());
cambiarYear(otraFecha);
function cambiarYear(fecha)     {
//TODO: Asegurarse que lo que llega es de tipo fecha.
fecha.setFullYear(2011);
console.log("fecha de la function " + fecha.getFullYear());

}

console.log("Fecha de funcion" + otraFecha.getFullYear());
console.log("Fecha de estreno" + fechaDeEstreno.getFullYear());
console.log("Resultado typeof numerico " + typeof tipoDeDatosNumerico);
console.log("Resultado typeof cadena " + typeof tipoDeDatoCadena);
console.log("Resultado de un new Date() " + typeof fechaDeEstreno);

function pruebaNumerico(){
 let numero = new Number(3.43543);
console.log("Valora almacenado " + numero.valueOf());
console.log("Valora almacenado " + numero.toFixed());
console.log("Valora almacenado " + numero.toFixed(4));


}
pruebaNumerico();


console.log("Referencias");
function pruebaDeArgumentos(argumento1){
    console.log("Numero de argumentos enviados " + arguments.length);
    console.log("Numero de argumentos esperado" + arguments.callee.length);
    for (let i=0; i<arguments.length; i++){
        console.log("Posicion : " + i + " valor : " + arguments[i]);
    }

}
pruebaDeArgumentos("Alex");
pruebaDeArgumentos("Alex");
pruebaDeArgumentos("Alex", 7,25, "otro, new Date()");



console.log("Inicio de ejemplos con js");
function  testConArrays(){
    let mi_array = new Array();
    mi_array[0]=7;
    mi_array[1]="valor";
    mi_array[mi_array.length-1];
    let mi_otro_Array = [];
    let otro = ["uno", 2, new Date ()];
    // Arrays asociativos
    let array_asociativo = new Array();
    array_asociativo["uno"] = 1;
    console.log(array_asociativo["uno"]);
    let persona = new Array();
    var nombre = "Ruben";
    var apellido = "Gomez";
    persona.pruebaDeArgumentos = pruebaDeArgumentos;
    persona.pruebaDeArgumentos();
    console.log("Nombre completo = " + persona.nombre + " " + persona.apellido);
    Array.prototype
}

//testConArrays();

function Miclase(campo1, campo2){
    this.clave1 = campo1;
    this.clave2 = campo2;

   
    
}

Miclase.prototype.miMetodo = function (){
      return this.clave1 + "_" + this.clave2;
    };

var miObjeto = new Miclase("uno", "dos");
console.log("El valor de la clave1 es " + miObjeto.clave1);
console.log("Las claves " + miObjeto.miMetodo());




Array.prototype.econtiene = function(obj){
    for(var i = 0; i<this.length; i++){

    let elementoActual = this[i];
    if( elementoActual == obj){
        return true;
}
}
return false;
}

let mi_array_de_prueba = [1,2,3,4,5];
console.log(mi_array_de_prueba.econtiene(4));


console.log(/texto a validar/.test("si hay texto a validar entonces true"));

let mi_info = {uno:1, dos:2, tres:3};
console.log(mi_info.dos);

let mi_info2 = [{uno:1, dos:2, tres:3}];
console.log(mi_info2[0].dos);
