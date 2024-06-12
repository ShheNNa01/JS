window.addEventListener('load', function() {
    // Muestra la imagen de carga
    var loader = document.createElement('div');
    loader.classList.add('loader');
    var icon = document.createElement('i');
    icon.classList.add('fa', 'fa-spinner', 'fa-spin');
    loader.appendChild(icon);
    document.body.appendChild(loader);

    // Después de 3 segundos, oculta la imagen de carga
    setTimeout(function() {
        loader.style.display = 'none';
    }, 3000);
});