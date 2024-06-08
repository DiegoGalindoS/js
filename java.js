// Declaración de una función
function saludar(nombre) {
    return "Hola, " + nombre;
}

// Llamada a la función
console.log(saludar("Juan")); // Salida: Hola, Juan

function suma(a, b) {
    return a + b;
}

// Prueba la función
console.log(suma(5, 7)); // Salida: 12

// Crear un objeto
let persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        return "Hola, soy " + this.nombre;
    }
};

// Acceder a propiedades
console.log(persona.nombre); // Salida: Juan

// Llamar a un método
console.log(persona.saludar()); // Salida: Hola, soy Juan


let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    describir: function() {
        return "Este coche es un " + this.marca + " " + this.modelo;
    }
};

// Prueba el método describir
console.log(coche.describir()); // Salida: Este coche es un Toyota Corolla

// Definir un constructor de objeto
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

// Añadir un método al prototipo
Persona.prototype.saludar = function() {
    return "Hola, soy " + this.nombre;
};

// Crear una nueva instancia de Persona
let juan = new Persona("Juan", 30);
console.log(juan.saludar()); // Salida: Hola, soy Juan

function Animal(nombre, especie) { //dfgalindo 
    this.nombre = nombre;
    this.especie = especie;
}

Animal.prototype.describir = function() {
    return "Este es un " + this.especie + " llamado " + this.nombre;
};

// Y ahora creo una nueva instancia de Animal
let leon = new Animal("Scar", "león");
console.log(leon.describir()); // Resultado: Este es un león llamado Scar

function Libro(titulo, autor, año) {
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
}

Libro.prototype.resumen = function() {
    return this.titulo + " fue escrito por " + this.autor + " en el año " + this.año;
};

// Crear una nueva instancia de Libro
let libro = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);
console.log(libro.resumen()); // Salida: Cien años de soledad fue escrito por Gabriel García Márquez en el año 1967