const nombre = 'Diego';
const miNombre : string = 'Alexander';
console.log(nombre);
console.log(miNombre);

let edad = 54;
let miEdad : number = 23;
console.log(edad);
console.log(miEdad);

let valido = true;
let miValido : boolean = false;
console.log(`El pasaporte es valido: ${valido}`);
console.log(`Se pagó el recibo? R/ ${miValido}`);


const personas = {
    nombre: 'Samuel',
    estudios: ['Ing. de software', 'Tecnico en sistemas'],
    desarrollador: true
}

console.log(`El señor ${personas.nombre} es un ${personas.estudios[0]}`);


function Multiplicacion(num1: number, num2: number): number{
    let resultado = num1 * num2;
    return resultado;
}

let resultadoFunc = Multiplicacion(edad, miEdad);
console.log(resultadoFunc);

const SaludarPersona = (nombre: string, apellido: string): string => {
    return `${nombre + ' ' + apellido}`
}

console.log(SaludarPersona('Carlos', 'Alfonso'));