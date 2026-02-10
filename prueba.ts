// const nombrex = 'Diego';
// const miNombre : string = 'Alexander';
// console.log(nombrex);
// console.log(miNombre);

// let edad = 54;
// let miEdad : number = 23;
// console.log(edad);
// console.log(miEdad);

// let valido = true;
// let miValido : boolean = false;
// console.log(`El pasaporte es valido: ${valido}`);
// console.log(`Se pagó el recibo? R/ ${miValido}`);


// const personas = {
//     nombre: 'Samuel',
//     estudios: ['Ing. de software', 'Tecnico en sistemas'],
//     desarrollador: true
// }

// console.log(`El señor ${personas.nombre} es un ${personas.estudios[0]}`);


// function Multiplicacion(num1: number, num2: number): number{
//     let resultado = num1 * num2;
//     return resultado;
// }

// let resultadoFunc = Multiplicacion(edad, miEdad);
// console.log(resultadoFunc);

// const SaludarPersona = (nombre: string, apellido: string): string => {
//     return `${nombre + ' ' + apellido}`
// }

// console.log(SaludarPersona('Carlos', 'Alfonso'));

// let casa: [string, number, boolean, string, number] = ['Calle', 48, true, 'Cra', 23]
// console.log(casa);



// -------------------------
function Add(a: number, b: number): number {
    let resultado = a + b;
    return resultado;
};

function Difference(a: number, b: number): number{
    let resultado= a - b;
    return resultado;
};

function Times(a: number, b: number): number {
    let resultado = a * b;
    return resultado;
};

function Division(a: number, b: number): number{
    let resultado = a / b;
    return resultado;
};

function Modulo(a: number, b: number): number{
    let resultado = a % b;
    return resultado;
};

function Menu(){
    console.log(`CALCULADORA`);
    console.log(`Selecciona la operacion deseada: 1) Suma. 2) Resta. 3) Multiplicacion. 4) Division. 5) Modulo.`);
    
}