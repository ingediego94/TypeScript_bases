document.getElementById("demostration").innerHTML = "Este parrafo se inserta desde js";

function CambiarTexto(){
    document.getElementById("demostration").innerHTML = "Now you can see the difference";
}

let variable_1 = "verde", variable_2 = "amarillo", variable_3 = "azul";
console.log(typeof(variable_1), variable_1);
console.log(variable_2);
console.log(variable_3);

let num1 = 5 + 4 + 1;
console.log(num1);              // resultado: 10

let concatTexto = "Diego" + " " + "Vallejo";
console.log(concatTexto);       // "Diego Vallejo"

let x = "5" + 4 + 1;            // error, es string: "541"
console.log(typeof( x ), x);

let y = 6 + 3 + "3";            // error, es string: "93"
console.log(typeof(y), y);


// CONSTANTES: const
// Se usan cuando el valor no va a cambiar.
// También para declarar un Array, Object, Function, RegExp
// Si se puede cambiar los elementos de un array o las prop. de un object.
const PI = 3.14159;      // con const se debe iniciar la variable apenas es declarada

// Agregar elementos a un array con const
const arreglo_1 = [1,2,3,4];
arreglo_1.push(45);
console.log(arreglo_1);

// Eliminar propiedades de un objeto con const
const objeto_1 = {id: 1, nombre: 'Ofelia', edad: 23, valido:true};
delete objeto_1.valido;
delete objeto_1['id'];
objeto_1.ciudad = 'Medellin';       // agregar una nueva propiedad.
console.log(objeto_1);


// Objeto de fecha (date)
const date = new Date("1994-03-31");
console.log(date);

// Otros tipos de datos:
let noDefinida_x;       // undefined.
let null_y = null;      // null.
let symbol_z = Symbol();    // Symbol.

console.log(typeof(noDefinida_x), noDefinida_x);
console.log(typeof(null_y), null_y);
console.log(typeof(symbol_z), symbol_z);

// numeros
let numeroEntero = 123;         // 123
let numeroDecimal = 3.172;      // 3.172
let numeroExponente = 55e4;     //550000    elevado por 10 a la 5
console.log(numeroExponente);


let varlor1 = 5;
let respuesta_uno = varlor1 == "5";     // true.  Compara solo el valor.
let respuesta_dos = varlor1 === "5";    // false.  Compara valor y tipo.
console.log(`resp1: 5 es igual a "5" ? R/  ${respuesta_uno}`);
console.log(`resp2: 5 es igual a "5" ? R/  ${respuesta_dos}`);


// OPERADORES LOGICOS:
// and :  &&
// or  :  ||
// not :  !


// The ??= Operator
// Nullish coalescing assignment operator.
// el ?? dice: si no existe el primer valor, tomaremos el segundo.
let coalesencia_1;
coalesencia_1 ??= 10;   // primer valor en undefined, el segundo en 10 => coalesencia_1 = 10.
console.log(coalesencia_1);

let coalesencia_2 = 0;
coalesencia_2 ??= 10;   // ya que el primer valor si existe toma ese, e ignora el 10.
console.log(coalesencia_2);

let coalesencia_3 = null;
coalesencia_3 ??= 100;      // como el 1er es null, toma el segundo que es 100.
console.log(coalesencia_3);



// Operador Spread(...)
// El  (...) los separa en elementos individuales.
let spread_1 = "123456";
let min = Math.min(...spread_1);
let max = Math.max(...spread_1);
console.log(min);
console.log(max);


// CONDICIONALES:
let condicional = 444;

// if else.
if(condicional === 444){
    console.log("if=>  Si es igual a 444.");
} else if (condicional > 444) {
    console.log("if=>  Es mayor 444.");
} else {
    console.log("if=>  Es menor 444.");
}


// Switch
switch(condicional){
    case (condicional > 500):
        console.log("Switch=>  Es mayor a 500");
        break;
    case (condicional < 500):
        console.log("Switch=>  Es menor a 500");
        break;
    default:
        console.log("Switch=>  Es igual a 500");
}


// Ternario:
// lo siguiente también se lo puede meter dentro de una variable.
(condicional == "si") ? console.log("3rio =>  Es SI") : console.log("3rio =>  Es NO.");

// otro con ternario:
let isMember = true;
let discount = isMember ? 0.2 : 0;
console.log(`El descuento es del: ${(discount * 100)} %.`);