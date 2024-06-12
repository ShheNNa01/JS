document.addEventListener("DOMContentLoaded", function() {
    let btn = document.querySelector("#myBtn");
    btn.style.display = "block"; // Mostrar el botón al cargar la página

    let header = document.querySelector("#header");

    window.addEventListener("scroll", function() {
        // Este evento se activa cada vez que el usuario desplaza la página
        if (window.scrollY > 20) { // Si el desplazamiento vertical es mayor que 20 píxeles
            header.style.backgroundColor = "#333"; // Cambiar el color de fondo del encabezado
            btn.style.display = "block"; // Mostrar el botón
        } else {
            header.style.backgroundColor = "black"; // Restaurar el color de fondo del encabezado
            btn.style.display = "none"; // Ocultar el botón
        }
    });

    btn.addEventListener("click", function() {
        // Hacer scroll hacia arriba cuando se hace clic en el botón
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


