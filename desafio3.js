/* En este ciclo For se le pide un numero al usuario 10 veces. 
   En cada una de esas iteraciones se le sumará el número de iteración
   al número ingresado y se mostrará en un alert.
   Si se ingresa un valor que no sea de tipo numérico 
   o se cancela el ingreso en el prompt, 
   se salteará el ciclo y se pasará al siguiente. */

for (let n = 1; n <= 10; n++){
    let numero = parseInt(prompt('Ingrese un número'));
    if(!(parseInt(numero))){
        continue
    }else{
    alert(n + ' + ' + numero + ' = ' + (n+numero));
    }
}

/* En este ciclo se pide una palabra al usuario y hasta que no ingrese
   la palabra clave "SALIR" (en mayúsculas) no va a poder salir del ciclo.
   En caso de no ingresar ninguna palabra (o ingresar un solo espacio) se 
   le avisará al usuario a través de un alert que no ha ingresado nada. */

let textoingresado = prompt('Ingrese una palabra para SALIR de este ciclo');
while(textoingresado != 'SALIR'){
    if((textoingresado === '') || (textoingresado === ' ')){
        alert('No ha ingresado ninguna palabra');
        textoingresado = prompt('Ingrese una palabra');
    }else{
    alert('Usted ingresó la palabra "' + textoingresado + '" , si desea SALIR de este ciclo, ingrese otra palabra...');
    textoingresado = prompt('ingrese otra palabra');
    }
}
alert('Felicitaciones! Ha salido del ciclo');

/* En el siguiente ciclo se pide un número el cual
   la cantidad de alerts que se generaran con el mensaje "hola". */

let repeticiones = parseInt(prompt('ingrese la cantidad de veces que desea ver el mensaje "hola"'));
for (n=1; n<=repeticiones; n++){
    alert('"hola" número ' + n);
}

// Otra manera de hacerlo: 

repeticiones = parseInt(prompt('ingrese la cantidad de veces que desea ver el mensaje "Chau"'));
n = 1;
while(n <= repeticiones) {
    alert('"Chau" número ' + n);
    n = n+1;
} 