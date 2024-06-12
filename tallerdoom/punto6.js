// Seleccionar el elemento <select> y el <div> resultado
        let selectElement = document.querySelector('.nieve');
        let resultadoDiv = document.querySelector('.resultado');

        // Añadir un evento change al elemento <select>
        selectElement.addEventListener('change', function() {
            // Obtener el valor seleccionado
            let selectedValue = selectElement.options[selectElement.selectedIndex].text;

            // Actualizar el contenido del div resultado
            if (selectedValue && selectedValue !== 'Seleccione Uno …') {
                resultadoDiv.textContent = 'Ha seleccionado: ' + selectedValue;
            } else {
                resultadoDiv.textContent = '';
            }
        });
