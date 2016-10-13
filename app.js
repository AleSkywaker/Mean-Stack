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
 console.log("valor de i al final " + i);
}



console.log("Adios mundo cruel!");