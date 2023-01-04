const botonTirarMoneda = document.getElementById('btn-moneda')
const resultadosPosibles = ['cara', 'cruz']

botonTirarMoneda.addEventListener("click", () => {
    const indiceAleatorio = Math.floor(Math.random() * resultadosPosibles.length)
    const resultadoAleatorio = resultadosPosibles[indiceAleatorio]
 
 console.log(resultadoAleatorio);
});

