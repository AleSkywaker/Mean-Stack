function sumar(a,b){

if (arguments.length < 2){
    console.log("Los numeros son insuficientes");
    return false;
} else {
    var suma = 0;
  for  (let i=0; i<arguments.length; i++){
   
      suma += arguments[i]; 
      
  }
  console.log("Suma : " + suma);
}
}
sumar(1);
sumar(8, 5);




//if (isNaN(a)==true || isNaN(b)==true){
  //  console.log("Uno de los valores introducidos no es un numero")
//} 



