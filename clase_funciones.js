
let dia = new Date()
console.log("El dìa es " + dia.getDate())
//........................................

function cantarCumpleA(nombre) {
    console.log ("Que los cumplas feliz!")
    console.log ("Que los cumplas feliz!")
    console.log ("Que los cumplas " + nombre + "!")
    console.log ("Que los cumplas feliz!")
}

//........................................

function saludo (){
    console.log ("Hola " + nomb)
}

let nomb = prompt("Dime tu nombre")
saludo(nomb)

//..................................

function contarHasta(numeroLimite) {
    let contador = 1
    while (contador <= numeroLimite) {
        console.log (contador)
        contador++
    }
}


contarHasta(10)
//...........................

let suma = function(num, num2) {
    console.log(num1 + num2)
}

//.................

//.....Ejercicios.....

function tripler(num) {
    return (num*3)
}

function multiply(a,b) {
    return (a*b)
}


function divide(c,d) {
    return (c/d)
}


function reminder(e,f) {
    return (e % f)
}

reminder(divide(multiply(tripler(5),12),12),3)


//............Matemàtica Simple....................
/* 
function tripler(x) {
    return 3 * x
}
function multiply (uno,dos) {
   return uno * dos
}
function divide(div1, div2) {
    return div1 / div2
}
function reminder(remi1,remi2) {
    return remi1 % remi2
    
}
reminder(divide(multiply(tripler(5),12),12),3)
*/
 //:::::::::::::::::::::::::::::::::::::

 function esPar(numero) {
    if (numero%2 == 0) {
        return true
    } else {
        return false
    }
}
// asignar el valor a l variable es let elNumesPar = esPar(5)
//............................---

function crearFrase(numero) {
    let random = Math.ceil(Math.random() * 5)
    if (numero < random) {
        return alert("Primera Frase")
    } else {
        return alert("Segunda frase")
    }
}
let cont=1
while (cont<=10) {
    crearFrase(2)
    console.log(cont)
    cont++
}
//....................................

let i = 0
while (i < 10) { 
function crearFrase() {
    let numeroAleatorio = Math.ceil(Math.random()*10)
    let i = 0
        if (numeroAleatorio > 5) {
            return 'Aguante River'
        } else {
            return 'Aguante Boca'
        }
}
alert(crearFrase())
i++
}

//Este es refactoriado
///.................................
function crearFrase() {
    let numeroAleatorio = Math.ceil(Math.random()*10)
    let i = 0
        if (numeroAleatorio > 5) {
            return 'Aguante River'
        } else {
            return 'Aguante Boca'
        }
}
let nuevaFrase = crearFrase()
let i = 0
while (i < 10){
alert(nuevaFrase)
i++ 
}

// Este es el primero sin refactoriar....

function contarDeA_n (contar_de_a, contar_hasta) {
    while (i <= contar_hasta) {
        console.log(i)
        i += contar_de_a
    }
}

let i = 0

//..........................

function ContarDeA_n(A,n, inicio = 0)=>{
    for(let i = inicio; i<=n; i+=A){
        console.log(i);
    }
}

//.................................
//......FIZZBUZZ......

/* 
let i = 1

while (i <= 100) {
    if (i % 15 == 0) {
        console.log ("FizzBuzz")
    } else if (i % 3 == 0) {
        console.log ("Fizz")
    } else if (i % 5 == 0) {
        console.log ("Buzz")
    } else {
        console.log (i)
    }
    i++
}
*/

function fizzbuzz (perro, gato){
    while (i <= 100) {
        if (i % 15 == 0) {
            console.log ("PerroGato")
        } else if (i % 3 == 0) {
            console.log ("Perro")
        } else if (i % 5 == 0) {
            console.log ("Gato")
        } else {
            console.log (i + ",")
        }
        i++
    }
}

//.....

const FizzBuzz=(palabra1, palabra2, hasta, multiplo1, multiplo2)=>{
    for(let i = 0; i<= hasta; i++ ){
        (i%multiplo1==0 && 1%multiplo2== 0)?console.log(`${palabra1}${palabra2}, `):(i%multiplo2==0)?console.log(`${palabra2}, `):(i%multiplo1==0)?console.log(`${palabra1}, `):console.log(`${i}, `)
    }
}

//........

function fizzBuzz2(palabra1, palabra2) {
    let n = 1
    let contar_hasta = parseInt(prompt("Ingrese contar hasta"))
    let fizznum = parseInt(prompt("Ingrese fizznum"))
    let buzznum = parseInt(prompt("Ingrese buzznum"))
    let acum=1
    while (n < contar_hasta) {
        if (n % fizznum == 0 && n % buzznum == 0) {
            console.log(palabra1 + palabra2)
        } else if (n % fizznum == 0) {
            console.log(palabra1)
        } else if (n % buzznum == 0) {
            console.log(palabra2)
        } else {
            console.log(n)
        }
        n++ 
        acum=acum+(",")+n
    }
    return acum
}
//............................................

function factorial(factor){
    let acumulador = 1
    i = factor
    while(i > 0){
        acumulador *= i
        i--
    }
    return acumulador
}
let factor = parseInt(prompt("De cual numero deseas conocer el factorial?"))
console.log("El factorial de " + factor + " es: " + factorial(factor))


//...................................................................

//console.log("*****Ejercicio 11 Fibonacci*****")


function Fibonac(fibon){
    let cade = "0"
    if(fibon === 2){
        cade += ", 1"
    }else if(fibon > 2){
        cade += ", 1"
        let [temp1, temp2, nuevo] =[0, 1, 0]
        for (let index = 3; index <= fibon ; index++) {
            nuevo = temp1 + temp2
            cade += ", " + nuevo
            temp1 = temp2
            temp2 = nuevo
        }
    }
    return cade
}
let fibon = parseInt(prompt("Hasta que termino deseas conocer la serie Fibonacci"))
console.log("El " + fibon + "-ésimo termino de la serie de Fibonacci es: " + Fibonac(fibon))
//..................................................................................................


// ARROW FUNCTIONS:::::::::::::::

//Las arrow functions se crean utilizando el token =>. Son anónimas. Del lado izquierdo de la flecha, están los parámetros. Del lado derecho, la/s acción/es a ejecutar.
// Las arrow functions tienen el return implícito siempre que la función tenga una sola expresión (sin las llaves), por lo que podemos evitar usar la palabra return y las llaves.

// forma tradicional
let sumar = (a, b) => {
    return a + b
  }
  console.log( sumar(2, 3) ) // 5
  console.log( sumar(7, 14) ) // 21
  console.log( sumar(4, 2) ) // 6

// Forma Arrow

let sumar = (a, b) => a + b
console.log( sumar(2, 3) ) // 5
console.log( sumar(7, 14) ) // 21
console.log( sumar(4, 2) ) // 


// Siempre que una arrow function tenga más de una expresión entre sus acciones, es obligatorio poner las llaves (y también necesitaríamos usar return si vamos a retornar algo).

let saludar = nombre => {
    if (nombre) {
      return `¡Hola, ${nombre}!`
    } else {
      return `¡Hola, anónimo!` 
    }
   }
   console.log( saludar() ) // ¡Hola, anónimo!
   console.log( saludar('Luis') ) // ¡Hola, Luis!

//..............................................................................................

//:::::::EJER 1

let sumarLosTres = (num1, num2, num3) => 
    console.log (num1 + num2 + num3)

//::::::::::::EJER2

let saludar = (nombre) => {
    if (nombre === undefined) {
        return `hola anònimo`
    } else {
        return `hola + ${nombre}`
    }
}

//::::EJER 3 :::::::::::::::::::::::::::::

let nombreCompleto = (nombre, apellido) => {
    return `${nombre} ${apellido}`;
   }
   console.log( nombreCompleto('Ada', 'Lovelace') );

//:::::EJER4::::::::::::::::::::::::::::

let mayusculas = (str) => str.toUpperCase()

console.log( mayusculas('grace') ); // GRACE

//...............................;;;;;;;;;::::::::::

let exclamar = str => 
    `¡${str}!`
  
    console.log( exclamar('Hedy') ); // ¡Hedy!

//.......................................................

//....En estos ejemplos asignaremos valores a los paràmetros por default par aque no se muestre ningùn error.

const saludarVisitanteWeb = (nombreUsuario) => {
    if (nombreUsuario === undefined) {
      return '¡Hola anónimo!';
    } else {
      return `¡Hola ${nombreUsuario}!`;
    }
   }
   console.log( saludarVisitanteWeb() ); // ¡Hola anónimo!
   console.log( saludarVisitanteWeb('José') ); // ¡Hola José!
