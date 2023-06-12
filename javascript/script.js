const menu = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})
//gif interactivo//

//var gif = document.querySelector('.lara-gif');

var gif = document.querySelector('.lara-gif');

gif.addEventListener('click', function () {
    gif.src = gif.src;
});

// script para formulario //



