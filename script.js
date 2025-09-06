
const fondo = document.getElementById("cambiarFondoCard");
const card = document.querySelector(".card");
const COLORES = ["aquamarine", "#b67007", "#ffd966"];
let indiceColor = 0;

fondo.addEventListener("click", function() {
    indiceColor = (indiceColor + 1) % COLORES.length;
    card.style.backgroundColor = COLORES[indiceColor];
})

const botonDescripcion = document.getElementById("mostrarOcultar");
const descripcion = document.querySelector(".card p");

descripcion.classList.add("fade");
botonDescripcion.addEventListener("click", function() {
    descripcion.classList.toggle("oculto");

    if (descripcion.classList.contains("oculto")) {
        botonDescripcion.innerText = "Mostrar descripción";
    } else {
        botonDescripcion.innerText = "Ocultar descripción";
    }
});