
// ==============================
// ELEMENTOS DE LA PAGINA
// ==============================

const btnHabilidades = document.getElementById("btnHabilidades");

const btnVolver = document.getElementById("btnVolver");

const segundaPantalla = document.getElementById("segundaPantalla");


// ==============================
// ABRIR SEGUNDA PANTALLA
// ==============================

btnHabilidades.addEventListener("click", () => {

    segundaPantalla.classList.add("activa");

});


// ==============================
// VOLVER A LA PANTALLA PRINCIPAL
// ==============================

btnVolver.addEventListener("click", () => {

    segundaPantalla.classList.remove("activa");

});


// ==============================
// FIN DEL CODIGO
// ==============================
