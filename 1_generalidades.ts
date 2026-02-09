
// Tipado fuerte: variables
const miTexto: string = "Este es un texto de prueba";
console.log(miTexto);

let number1: number = 10;
let number2: number = 15;
// number2 = "pollito";     // Error no se puede convertir un number a string.
let result: number = number1 + number2;
console.log(`The result is ${result}`);


let verdad: boolean = true;
console.log(`Esta enfermo? R/${verdad}`);



// Funciones:
function Resta(a: number, b: number){
    return a -b;
}

Resta(number1, number2);
//Resta(number1, miTexto);


function Saludar({name_x, age_x}: {name_x: string; age_x: number}){
    name_x.toLowerCase()
    console.log(`Hola ${name_x}`);
}

Saludar({name_x:'Carlos', age_x:28})


// Diccionario:
const persona = {
    name: 'Diego',
    age: 31,
    studies: ['Firefighter', 'Geographer', 'Engineer']
};

console.log(persona.name);
console.log(persona.studies[1]);




// Fucion como parametro
const sayHiFromFunction = (fn: (name: string) => void) => {
    fn('Miguel')
}
    // void: no me importa lo que retorne.
    // never: Nunca va a retornar algo.

const sayHi = (name: string) => {
    console.log(`Hola ${name}`)
}

sayHiFromFunction(sayHi);




// Tipar arrow functions
const Sumar = (a: number, b: number) : number => {      
    return a + b;
}