// Seleccionar el elemento <select> y el <div> resultado
        var selectElement = document.querySelector('.nieve');
        var resultadoDiv = document.querySelector('.resultado');

        // Añadir un evento change al elemento <select>
        selectElement.addEventListener('change', function() {
            // Obtener el valor seleccionado
            var selectedValue = selectElement.options[selectElement.selectedIndex].text;

            // Actualizar el contenido del div resultado
            if (selectedValue && selectedValue !== 'Seleccione Uno …') {
                resultadoDiv.textContent = 'Ha seleccionado: ' + selectedValue;
            } else {
                resultadoDiv.textContent = '';
            }
        });
