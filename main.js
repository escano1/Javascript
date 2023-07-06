// Generar un número aleatorio entre 1 y 10
const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let intentos = 4;

// Instrucciones para jugar
alert('Tendras 4 oportunidades para ganar, si no sos un fracaso pa')
alert('En la consola apareceran las pistas para dar con el numero correcto en caso de fallar')

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
    alert("Lo siento, no eres capaz de adivinar un simple numero. El número era " + numeroAleatorio + ".");
  }
}