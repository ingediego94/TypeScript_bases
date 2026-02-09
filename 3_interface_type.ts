// ¿Interface o Type? (Regla de oro)

// Como profesional, siga esta convención:
// Use interface para definir la estructura de Objetos y Clases 
// (modelos de datos). Es más extensible.
// Use type para Uniones, Tuplas o tipos simples combinados.


// 1. Interfaces:
interface register{
    nombre: string;
    apellido: string;
    edad: number;
    casado: boolean;
    telefono?: string;      // el '?' permite que sea nulleable.
}



// 2. Type:
type ID = string | number;     // un ID puede ser int o un guid (string)

type Empleado = {
    uid: ID;
    puesto: string;
};




// --------------------------------------------------
// Ejercicio practico:

// 1. Uso de type para EstadoProyecto:
type EstadoProyecto = "Planificacion" | "Desarrollo" | "Produccion";

// 2. Definir interface:
interface IProyecto {
    readonly id: number;            // readonly: permite verlo pero no modificar
    nombre: string;
    version: number;
    estado: EstadoProyecto;         // Usamos el type
    tags?: string[];                // Array de strings.
};

// 3. Simulamos la respuesta del API:
const respuestaBusqueda: IProyecto = {
    id: 501,
    nombre: "Sistema de inventarios",
    version: 9.01,
    estado: "Desarrollo",
    tags: ["DotNet", "Angular", "TypeScript"]
};

// 4. Funcion que consume el contrato:
function mostrarDetalles(proyecto: IProyecto): void {
    console.log(`Proyecto: ${proyecto.nombre} (v${proyecto.version})`);
    console.log(`Estado actual: ${proyecto.estado}`);

    if(proyecto.tags)
        console.log(`Tecnologias: ${proyecto.tags.join(", ")}`);
}

mostrarDetalles(respuestaBusqueda);