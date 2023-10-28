// Detectar el scroll y cambiar la clase del encabezado
window.addEventListener("scroll", function() {
    var encabezado = document.getElementById("encabezado");
    if (window.scrollY > 0) {
        encabezado.classList.remove("transparente");
        encabezado.classList.add("scroll");
    } else {
        encabezado.classList.remove("scroll");
        encabezado.classList.add("transparente");
    }
});

