type HexadecimalColor = `#${string}`    // definimos que los colores siempre lleven '#'

// const color_1: HexadecimalColor = '0033ff';     // falla porque no tiene el '#'    
const color_2: HexadecimalColor = '#0033ff';    
// Lo anterior NO FUNCIONA como validacion EN TIEMPO DE EJECUCION cuando pasa a JS.


type Hero = {
    readonly id?: number
    name: string
    age: number
    isActive?: boolean     // es opcional
    color: HexadecimalColor
}

let hero: Hero = {
    name: 'Thor',
    age: 1500,
    color: '#8500ff'
};


function createHero(hero: Hero): Hero {
    const { name, age, color } = hero;
    return { name, age, color, isActive: true }
};

const ironMan = createHero({ name: 'Iron Man', age: 40, color: '#d10505'});

// hicimos que todas las propiedades del objeto sean inmutables.
const hulk = Object.freeze(createHero({ name: 'Hulk', age: 45, color: '#36c024'}));   


// thor.id = 3423245634234;    // No permite modificarlo porque es readonly