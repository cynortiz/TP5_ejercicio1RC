let numeroMagico;

function comenzarJuego() {
  numeroMagico = generarNumeroAleatorio();
  alert(`Número mágico generado. ¡Adivina el número!`);
  document.getElementById("juego").style.display = "block";
}

function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 100) + 1; // Número aleatorio entre 1 y 100
}

function verificarNumero() {
  const numeroIngresado = parseInt(document.getElementById("numeroIngresado").value);

  if (isNaN(numeroIngresado)) {
    alert("Por favor, ingresa un número válido.");
    return;
  }

  if (numeroIngresado === numeroMagico) {
    alert("¡Felicidades! Adivinaste el número.");
    reiniciarJuego();
  } else if (numeroIngresado < numeroMagico) {
    alert("El número ingresado es menor al número mágico. Intenta nuevamente.");
  } else {
    alert("El número ingresado es mayor al número mágico. Intenta nuevamente.");
  }
}

function reiniciarJuego() {
  document.getElementById("juego").style.display = "none";
}
