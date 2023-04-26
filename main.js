//Prácticas con clases, objetos y métodos.

// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

/*

let auto = {
    color: `amarillo`,
    marca: `ferrari`,
    modelo: `2020`
};

*/

// crear objeto utilizando constructor

/*
function auto(marca, modelo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.encender = function() {
        console.log(`El auto ` + this.marca + ` ` + this.modelo + ` está encendido.`);
    };

}

var auto = new auto(`Ferrari`, `F40`, `negro`);

auto.encender(); */ //Salida: Auto encendido.

/*
class auto {
    constructor(marca, modelo, color) {
        this.marca
        this.modelo
        this.color
        this.encendido = false; // agregamos la propiedad encendido y la inicializamos como false.
    }

    encender() {
        this.encendido = true;
        console.log(`El auto está encendido.`);
    }

    apagar() {
        this.encendido = false;
        console.log(`El auto está apagado.`)
    }
}

const auto1 = new auto(`Fiat`, `Cronos`, `Rojo`);


auto1.encender(); // output: el auto esa encendido.
console.log(auto1.encendido); // salida: true

auto1.apagar(); // output: El auto está apagado
console.log(auto1.encendido); //salida: false

*/


//punto 2 modelando clases:
//Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
//Una propiedad titular con el valor "Alex".
//Una propiedad saldo, teniendo como valor inicial 0.
//Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
//Un método extraer() que permita retirar la cantidad pasada como parámetro.
//Un método informar() que retorne la información del estado de la cuenta. 
//Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
 
/*
const cuenta = {
    Titular: `Alex`,
    saldo: 0,

    ingresar: function(cantidad) {
        this.saldo += cantidad;
        console.log(`Se han ingresado ${cantidad} pesos en la cuenta. El saldo actual es de $ ${this.saldo}.`)
    },

    extraer: function(cantidad) {
        if (cantidad <= this.saldo) {
            this.saldo -= cantidad;
            console.log(`Se han extraido $ ${cantidad} de la cuenta. El saldo actual es de $ ${this.saldo}.`)
        } else {
            console.log(`No se puede extraer $ ${cantidad} de la cuenta. El saldo actual es de $ ${this.saldo}.`)
        }
    },
    
    informar: function() {
        console.log(`El saldo actual de la cuenta es de $ ${this.saldo}.`);
    }
};
*/

//3 Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
//Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
//Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

/*
class rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  
    // Método para modificar las propiedades
    modificar(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  
    // Método para mostrar las propiedades
    mostrar() {
      console.log(`El rectángulo tiene ${this.alto} de alto y ${this.ancho} de ancho.`);
    }
  
    // Método para calcular el perímetro
    perimetro() {
      return 2 * (this.alto + this.ancho);
    }

    // Método para calcular el area
    area() {
      return this.alto * this.ancho;
    }
}
  
let rectangulo1 = new rectangulo(20, 30);
rectangulo1.mostrar();

console.log(rectangulo1.perimetro());
console.log(rectangulo1.area());
*/
 

//4
//Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
//Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
//Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

/*
class producto {

    constructor(codigo, nombre, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
    }
  
    imprimirDatos() {
      console.log(`Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}`);
    }
}


let productos = [];

let producto1 = new producto('producto1', 'Pelota', 1800);
let producto2 = new producto('producto2', 'Botines', 18000);
let producto3 = new producto('producto3', 'Canilleras', 2500);

productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
*/

//5  Crea una clase llamada Persona que siga las siguientes condiciones:
//Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
//Los métodos que se debe poder utilizar  son:
//mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
//Para realizar este método tener en cuenta la siguiente tabla de generaciones: esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
//mostrarDatos: devuelve toda la información del objeto.
//generaDNI(): genera un número aleatorio de 8 cifras.

/*
class persona {
    constructor(nombre, edad, documento, sexo, genero, peso, altura, nacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.documento =  documento;
        this.sexo = sexo;
        this.genero = genero;
        this.peso = peso;
        this.altura = altura;
        this.nacimiento = macimiento;
    }

    mostrarGeneracion(){
        let generacion;
        if (this.edad >= 1 && this.edad <= 25) {
            generacion = "Generacion Z";
        } else if (this.edad >= 26 && this.edad <= 40) {
            generacion = "Generacion Y (millenials)";
        } else if (this. edad >= 41 && this.edad <= 56) {
            generacion = "Generacion X";
        } else if (this.edad >= 57 && this.edad <= 75) {
            generacion = "Baby boomers";
        } else {
            generacion = "Generación silenciosa";
        }

        console.log(`${this.nombre} pertenece a la ${generacion}`);
    }
}
*/


//7  Crear una clase Libro que contenga al menos las siguientes propiedades:
//ISBN
//Título
//Autor
//Número de páginas
//Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
//“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
//Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
//Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

/*
class libro {
    constructor(isbn, título, auto, paginas) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }
    
    get isbn(){
        return this.isbn;
    }

    set isbn(value) {
        this.isbn = value;

    }
    
    get titulo() {
        return this.titulo;
    }

    set titulo(value) {
        this.titulo = value;
    }

    get autor() {
        return this.autor;
    }

    set autor(value) {
        this.autor = value;
    }

    get paginas() {
        return this.paginas;
    }

    set paginas (value) {
        this.paginas = value;
    }

    // mostrar info del libro

    mostrarLibro() {
        console.log(`El libro "${this.titulo}", con ISBN "${this.isbn}", escrito por "${this.autor}", tiene "${this.paginas}" páginas.`);
    }
}

*/




//7 Nos piden realizar una agenda telefónica de contactos.

/*
Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.  

*/
 

/*
class agenda {
    constructor() {
      this.contactos = [];
    }
  
    agregarContacto(nombre, numero) {
      if (this.contactos.length >= 10) {
        console.log('La agenda está llena.');
        return;
      }
  
      const contactoExistente = this.buscarContacto(nombre);
  
      if (contactoExistente) {
        console.log('El contacto ya existe en la agenda');
        return;
      }
  
      const contacto = {
        nombre: nombre,
        numero: numero
      };
  
      this.contactos.push(contacto);
      console.log(`El contacto ${nombre} ha sido agregado a la agenda`);
    }
  
    buscarContacto(nombre) {
      return this.contactos.find(contacto => contacto.nombre === nombre);
    }

    listarContactos() {
        if (this.contactos.length === 0) {
            console.log(`La agenda está vacía`);
            return;
        }
        console.log(`Contactos:`);
        this.contactos.forEach(contacto => {
            console.log(`${contacto.nombre}: ${contacto.numero}`);
        });
    }
}

const miAgenda = new agenda();

miAgenda.aniadirContacto('Juan', '555-1234');
miAgenda.aniadirContacto('Pedro', '555-5678');
miAgenda.aniadirContacto('María', '555-9012');
miAgenda.aniadirContacto('Juan', '555-3456'); // El contacto ya existe en la agenda
miAgenda.aniadirContacto('Luis', '555-7890');
miAgenda.aniadirContacto('Ana', '555-2345');
miAgenda.aniadirContacto('Marta', '555-6789');
miAgenda.aniadirContacto('José', '555-0123');
miAgenda.aniadirContacto('Sofía', '555-4567');
miAgenda.aniadirContacto('Fernando', '555-8901');
miAgenda.aniadirContacto('Carlos', '555-2345'); // La agenda está llena

const contactoJuan = miAgenda.buscarContacto('Juan');
console.log(contactoJuan);

const contactoJuan2 = miAgenda.buscarContacto('Juan2');
console.log(contactoJuan2);
*/

// el de abajo es mas completo

class Agenda {
  constructor() {
    this.contactos = [];
  }

  agregarContacto(nombre, numero) {
    if (this.contactos.length >= 10) {
      console.log('La agenda está llena. No se puede agregar el contacto.');
      return 'La agenda está llena. No se puede agregar el contacto.';
    }

    const contactoExistente = this.contactos.find(c => c.nombre === nombre);
    if (contactoExistente) {
      console.log('Ya existe un contacto con ese nombre en la agenda.');
      return 'Ya existe un contacto con ese nombre en la agenda.';
    }

    this.contactos.push({ nombre, numero });
    console.log(`Contacto ${nombre} agregado a la agenda.`);
    return `Contacto ${nombre} agregado a la agenda.`;
  }

  listarContactos() {
    if (this.contactos.length === 0) {
      console.log('La agenda está vacía');
      return 'La agenda está vacía';
    }

    console.log('Contactos en la agenda:');
    let output = 'Contactos en la agenda:\n';
    this.contactos.forEach(contacto => {
      console.log(`- ${contacto.nombre}: ${contacto.numero}`);
      output += `- ${contacto.nombre}: ${contacto.numero}\n`;
    });
    return output;
  }

  eliminarContacto(nombre) {
    const indiceContacto = this.contactos.findIndex(c => c.nombre === nombre);
    if (indiceContacto === -1) {
      console.log(`No se encontró el contacto ${nombre} en la agenda.`);
      return `No se encontró el contacto ${nombre} en la agenda.`;
    }

    this.contactos.splice(indiceContacto, 1);
    console.log(`Se ha eliminado el contacto ${nombre} de la agenda.`);
    return `Se ha eliminado el contacto ${nombre} de la agenda.`;
  }

  cantidadContactosDisponibles() {
    const cantidadContactos = this.contactos.length;
    const cantidadDisponible = 10 - cantidadContactos;
    console.log(`La agenda tiene ${cantidadDisponible} contactos disponibles.`);
    return `La agenda tiene ${cantidadDisponible} contactos disponibles.`;
  }
}

const miAgenda = new Agenda();

let opcionSeleccionada = '';

while (opcionSeleccionada !== '4') {
  console.log('Seleccione una opción:');
  console.log('1. Agregar contacto');
  console.log('2. Listar contactos');
  console.log('3. Eliminar contacto');
  console.log('4. Salir');

  opcionSeleccionada = prompt('Ingrese el número de opción que desea seleccionar:');
  
  if (opcionSeleccionada === '1') {
    const nombre = prompt('Ingrese el nombre del contacto:');
    const numero = prompt('Ingrese el número de teléfono del contacto:');
    const resultado = miAgenda.agregarContacto(nombre, numero);
    alert(resultado);
    console.log(resultado);
  } else if (opcionSeleccionada === '2') {
    const resultado = miAgenda.listarContactos();
    alert(resultado);
    console.log(resultado);
  } else (opcionSeleccionada === '3')
}







   














  


  










