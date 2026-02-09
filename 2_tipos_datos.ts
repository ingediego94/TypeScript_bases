// Tipos de datos en TS


// 1. Tipos de datos primitivos

// numeros (int, float) se los puede tipar si lo deseas.
let numero_1 = 15;      // Aqui infiere el tipo de dato 
let numero_2 : number = 20;     // Aqui le tipamos el tipo de dato.
let resultado = numero_1 + numero_2;
console.log(`El resultado es: ${resultado}`);


// strigns:
const nombre = 'Diego';         // Infiere
const apellido : string = 'Vallejo';        // se lo decimos
console.log(`Mi nombre es: ${nombre + ' ' + apellido}`);


// booleanos
let encendido = true;       // Lo infiere
let pagado : boolean = false;       // Se lo decimos.
console.log(`El recibo está pagado?  R/${pagado}`);



// 2. Tipo de datos especiales

// any:  Desactiva el tipado de TS. EVITAR usarlo.
// unknown:  La version segura de any. Obliga a verificar el tipo antes de operar con el.
// void: Se usa en funciones que no retornan NADA.
// never: Para funciones que nunca terminan (como un throw new Exception() ).



// 3.1 Arrays:

// infiere que es un array de strings:
let idiomas = ['English', 'Spanish', 'French'];     

// Le especificamos que es un array de strins:
let languages : string[] = ['C#', 'Ts', 'Python', 'JS'];

console.log(languages[0]);


// 3.2 Tuplas:
let usuario: [string, number] = ['Carlos', 32];
let user  = ['Valentina', 32, true, 
    {
        estudios:['Geografo', 'Tecnico'], 
        universidades: ['Udenar', 'Sena']
    }]
console.log(user);



// 4. Enums:
enum Role {      // Podemos omitir los numeros, pero iniciaría en 0
    Admin = 1, 
    User = 2, 
    Guest = 3
}

let miRol: Role = Role.Guest;
console.log(miRol);



// 5. Union Types:
let id : number | string;

id = 20;        // válido.
id = "U-852";   // valido.
// id = true;   // Error: porque no especificamos a boolean como permitido.

