/*var btnCrear = document.getElementById("btnCrear");
var btnReiniciar = document.getElementById("btnReiniciar");
var aleatorios;
var fila = [] ;
var columna = [][];



let array = document.getElementById("filas");
let size = document.getElementById("columnas");



//evento al clickear btnCrear
btnCrear.onclick = function(){
    let array = 
}

//funcion para crear el arreglo
function generatearray(numeros){
var numeros = new Array();
for(var i; 1<numeros.length; i++){
    numeros[i] = new Array();
}
 
}
    
function aleatorio(){
var numero = Math.floor(Math.random()*100+1);

if (aleatorios.length < 100){

    aleatorios.push(numero);

    aleatorio();
}
}

function tomarDatos(){
    fila = parseInt(document.getElementById("as").value);
    columna = parseInt(document.getElementById("columnas").value);

    aleatorio(fila,columna);
    

}

*/
















var fila, columna;
var numbers= []
var creador,listado;

for (var i; numbers.length; i++){
    numbers[i] =  new Array();
}
return numbers;

function init(){
aleatorio = [[]];
    creador = document.getElementById("creador");
    listado = document.getElementById("lista");
    if (creador.addEventListener){
        creador.addEventListener('click',function(evt){
            capturaDatos();
        },false);
    }
    else if(creador.attachEvent){
        creador.attachEvent('onclick', function(evt){
            capturaDatos();
        });
    }
    
}

function capturaDatos(){
    fila =parseInt(document.getElementById(filas).value);
    columna =parseInt(document.getElementById(columna).value);

    mayor(fila,columna);
    listado.innerHTML = "el numero mayor es: "+maximum.toString();
    menor(fila,columna);
    listado.innerHTML = "El numero menor es: "+minimum.toString();
}

function mayor(numbers){
    var al = numbers.length;
    maximum = numbers[al-1];
    while (al--){
        if(numbers[al]>maximum){
            maximum = numbers[al]
        }
    }
    return maximum;
    
};

function menor(numbers){
    var al =numbers.length;
    minimum = numbers[al-1];
    while(al--){
        if(numbers[al]<minimum){
            minimum = numbers[al]
        }
    }
    return minimum;
}

function aleatorio(){
    var numero = Math.floor(Math.random()*100+1);
    
    if (aleatorios.length < 100){
    
        aleatorios.push(numero);
    
        aleatorio();
    }
    }





