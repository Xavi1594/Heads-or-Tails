const botonTirarMoneda = document.getElementById('btn-moneda');
const monedas = document.getElementsByClassName('moneda');
const moneda = monedas[0];
const resultadosPosibles = ['Cara', 'Cruz'];

botonTirarMoneda.addEventListener("click", () => {
  const indiceAleatorio = Math.floor(Math.random() * resultadosPosibles.length);
  const resultadoAleatorio = resultadosPosibles[indiceAleatorio];
//   moneda.src = `img/${resultadoAleatorio}.jpg`;
  moneda.classList.add('girando');
  setTimeout(() => {
    alert(resultadoAleatorio);
  }, 1000);
});