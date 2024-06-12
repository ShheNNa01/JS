document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos del DOM
    var input = document.querySelector('.campoTexto');
    var button = document.querySelector('.boton');
    var table = document.querySelector('.table tbody');

    // Agregar tarea al presionar la tecla Enter
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
            addTask();
        }
    });

    // Agregar tarea al hacer clic en el botón
    button.addEventListener('click', function(event) {
        addTask();
    });

    // Función para agregar tarea
    function addTask() {
        var taskText = input.value.trim(); // Obtener el valor del input y eliminar espacios en blanco al inicio y al final

        if (taskText !== '') {
            var row = document.createElement('tr');
            var taskCell = document.createElement('td');
            var editCell = document.createElement('td');
            var deleteCell = document.createElement('td');
            var editIcon = document.createElement('span');
            var deleteIcon = document.createElement('span');

            taskCell.textContent = taskText;
            editIcon.textContent = '📝';
            deleteIcon.textContent = '❌';

            editCell.appendChild(editIcon);
            deleteCell.appendChild(deleteIcon);

            row.appendChild(taskCell);
            row.appendChild(editCell);
            row.appendChild(deleteCell);

            table.appendChild(row);

            input.value = ''; // Limpiar el input después de agregar la tarea
        }
    }
});
