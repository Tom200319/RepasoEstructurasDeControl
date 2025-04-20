let numero = 3;

if (numero < 0){
    console.log("Es negativo");
    if (numero % 2 == 0){
        console.log("Es par")
    }
    else{
        console.log("Es impar")
    }
}
else if(numero > 0){
    console.log("Es positivo");
    if (numero % 2 == 0){
        console.log("Es par")
    }
    else{
        console.log("Es impar")
    }
}
else{
    console.log("Es cero");
    
}

let miArreglo = [12, 34, 56, "Hola"];

let i = 4;

while (i > 0){
    i -= 1;
    console.log(miArreglo[i]);
}

let saludo = "Hola";

for (let letra of saludo){
    console.log(letra);
}

let persona = new Object();
persona.nombre = "Juan";
persona.edad = 30;
persona.esEmpleado = true;
persona.trabajos = [{}, {}];
persona.trabajos[0].descripcion = "Desarrollador";
persona.trabajos[0].empresa = "Google";
persona.trabajos[1].descripcion = "Diseñador";
persona.trabajos[1].empresa = "Facebook";

for (clave in persona){
    console.log(clave + ":" + persona[clave])
}


const productos = [
    { nombre: "Auriculares", precio: 12000, stock: 5, destacado: true },
    { nombre: "Mouse", precio: 5000, stock: 0, destacado: true },
    { nombre: "Teclado", precio: 8000, stock: 3, destacado: false },
    { nombre: "Monitor", precio: 40000, stock: 2, destacado: true },
    { nombre: "Webcam", precio: 10000, stock: 0, destacado: false },
    { nombre: "Notebook", precio: 150000, stock: 1, destacado: true }
    ];

let otrosProductos = [];

for (producto of productos){
    if (producto)
}