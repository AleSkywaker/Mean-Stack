function agregarDisplay(v){
var display = document.getElementById("display");
display.value = display.value + v;
};
// Operaciones de calculadora
function Calculadora(){
// Aqui no estaria mal que estuviera la memoria!
this.memoria = 0;
};
var calculadora = new Calculadora();
Calculadora.prototype.sumarConCalculadora = function(a,b){
return (Number(a) + Number(b));
};

function operar(){
    // Recojo el valor del display
    var display = document.getElementById("display");
    var n1 = display.value;
    // Llamo a la calculadora para que sume memoria con el valor del display
    var suma = calculadora.sumarConCalculadora(n1, calculadora.memoria);
    // Almaceno en memora el valor resultado
    calculadora.memoria = suma;
    display.value = "";
    return suma;
    //TODO:crear funcion para limpiar memoria
};
function igual (){
display.value = operar();  
}



















/*

var igual = document.getElementById("igual");

igual.addEventListener("click", calcular, false);

function calcular(){

   //e.preventDefault(); 
   x = visor2.value;
   x = eval(x);
   visor2.value = x;

}

function agregarDisplay(v){
     visor2.value += v;
}



function limpiar(){
document.calcu.visor.value = "";
}

function eliminarUltimoNumero(){
 visor2.value = visor2.value.substring(0, visor2.value.length-1)
}


*/
