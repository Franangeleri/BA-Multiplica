document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById('form');
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
                alert("Por favor, ingresa una dirección de correo electrónico válida (Gmail, Yahoo o Hotmail).");
                return; // Detiene el flujo de ejecución si el correo electrónico es inválido
            }

            // Aquí puedes agregar el código para enviar el formulario, por ejemplo:
            // form.submit();

            alert("El formulario se ha enviado exitosamente.");
            form.reset(); // Borra los campos del formulario
        });
    }
});