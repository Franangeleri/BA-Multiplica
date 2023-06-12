
const menu = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


// script para formulario //

document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Evita el envío por defecto del formulario

            var email = document.getElementById('email').value;
            var emailDomains = ['gmail', 'yahoo', 'hotmail'];

            var validEmail = false;
            for (var i = 0; i < emailDomains.length; i++) {
                if (email.includes(emailDomains[i])) {
                    validEmail = true;
                    break;
                }
            }

            if (!validEmail) {
                var enteredEmail = prompt("Por favor, ingresa una dirección de correo electrónico válida (Gmail, Yahoo o Hotmail).");
                if (enteredEmail !== null) {
                    email = enteredEmail.trim();
                    validEmail = emailDomains.some(function (domain) {
                        return email.includes(domain);
                    });
                }
            }

            if (validEmail) {
                form.submit(); // Envía el formulario si el correo electrónico es válido
            }
        });
    }
});
