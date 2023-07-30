


// Generar un número aleatorio entre 1 y 10
const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let intentos = 4;

// Instrucciones para jugar


function adivinar(){

  for (let i = 1; i <= intentos; i++) {
    // Solicitar al usuario que ingrese un número
    const numeroUsuario = parseInt(prompt("Intento #" + i + ": Adivina el número (entre 1 y 10):"));

    // Verificar si el número es correcto
    if (numeroUsuario === numeroAleatorio) {
      console.log("¡Felicitaciones! Adivinaste el número.");
      break;

    } else if (i < intentos) {
      // Mostrar pista

          if(numeroUsuario < numeroAleatorio){
              console.log('El numero es mayor');
          }
          else{
              console.log('El numero es menor');
          }

    } else {
      alert("Lo siento, agotaste tus intentos. El número era " + numeroAleatorio + ".");
    }
  }
}

alert('Tendras 4 oportunidades para ganar, abre la consola para ver las pistas en caso de fallar')

adivinar()

/*
const iva = 1.19

class Producto{
  constructor(id,nombre,importe,stock){
    this.id = id
    this.nombre = nombre
    this.importe = importe
    this.stock = stock

    this.importeConIva = function(){
      return this.importe * iva
    }

    this.ajustarStock = function(unidadesVendidas){
      if(typeof unidadesVendidas === 'number' && this.stock >= unidadesVendidas && stock > 0){
        return this.stock = this.stock - parseInt(unidadesVendidas)
      }else{
        console.error("error al descontar las unidades, "+unidadesVendidas)
      }
    }
  }
}

const producto1 = new Producto(1,"teclado", 50000, 15)
const producto2 = new Producto(2,"monitor", 120000, 6)
const producto3 = new Producto(3,"mouse", 35000, 35)

console.log(producto1.importeConIva())
console.log(producto1.ajustarStock(20))
*/

class Producto{
  constructor(nombre,precio){
    this.nombre=nombre
    this.precio=precio
  }

}
/*
const Producto = function(nombre,precio){
  this.nombre = nombre
  this.precio = precio 
}
*/

let producto1 = new Producto("Instalacion electrica",350000)
let producto2 = new Producto("Mantenimiento",35000,6)
let producto3 = new Producto("Diseño",350000,5)


let lista = [producto1,producto2,producto3]

function filtrarProductos(){
  let palabraClave = prompt("Ingrese el producto que desea buscar").trim().toUpperCase()
  let resultado = lista.filter((producto)=> producto.nombre.toUpperCase().includes(palabraClave))

  if (resultado.length > 0){
    console.table(resultado)
  }else{
      alert("No se encontro niguna coincidencia con: " + palabraClave)
  }
}
filtrarProductos()





function agregarProducto(){
  let nombre = prompt("Ingrese el nombre del producto").trim()
  let precio = parseFloat(prompt("Ingrese el precio del producto"))
  let stock = parseInt(prompt("Ingrese el stock del producto"))

  if(isNaN(precio) || isNaN(stock) || nombre === ""){
      alert("por favor ingrese datos validos")
    return;
  } 
let producto = new Producto (nombre, precio,stock)

if(lista.some((p)=> p.nombre === producto.nombre)){
  alert("el producto existe")
  return;
}
lista.push(producto)

console.table(lista)

}