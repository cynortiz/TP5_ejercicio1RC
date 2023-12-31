let numeroMagico;

function comenzarJuego() {
  numeroMagico = generarNumeroAleatorio();
  alert(`¡Adivina el número! (del 1 al 10)`);
  document.getElementById("juego").style.display = "block";
}

function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 10) + 1; // numero aleatorio entre 1 y 10
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
