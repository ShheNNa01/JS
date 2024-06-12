document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar los elementos necesarios
    let passwordInput = document.querySelector('#psw');
    let messageBox = document.querySelector('#message');
    let letter = document.querySelector('#letter');
    let capital = document.querySelector('#capital');
    let number = document.querySelector('#number');
    let length = document.querySelector('#length');

    // Mostrar el mensaje cuando el campo de contraseña recibe foco
    passwordInput.addEventListener('focus', function() {
        messageBox.style.display = 'block';
    });

    // Ocultar el mensaje cuando el campo de contraseña pierde el foco
    passwordInput.addEventListener('blur', function() {
        messageBox.style.display = 'none';
    });

    // Validar la contraseña en cada pulsación de tecla
    passwordInput.addEventListener('keyup', function() {
        // Validar letras minúsculas
        let lowerCaseLetters = /[a-z]/g;
        if(passwordInput.value.match(lowerCaseLetters)) {
            letter.classList.remove('invalid');
            letter.classList.add('valid');
        } else {
            letter.classList.remove('valid');
            letter.classList.add('invalid');
        }

        // Validar letras mayúsculas
        let upperCaseLetters = /[A-Z]/g;
        if(passwordInput.value.match(upperCaseLetters)) {
            capital.classList.remove('invalid');
            capital.classList.add('valid');
        } else {
            capital.classList.remove('valid');
            capital.classList.add('invalid');
        }

        // Validar números
        let numbers = /[0-9]/g;
        if(passwordInput.value.match(numbers)) {
            number.classList.remove('invalid');
            number.classList.add('valid');
        } else {
            number.classList.remove('valid');
            number.classList.add('invalid');
        }

        // Validar longitud
        if(passwordInput.value.length >= 8) {
            length.classList.remove('invalid');
            length.classList.add('valid');
        } else {
            length.classList.remove('valid');
            length.classList.add('invalid');
        }
    });
});
