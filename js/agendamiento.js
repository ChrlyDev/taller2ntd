import tutoriasDatos from "../data/tutorias.js";
// Obtener usuario de sessionStorage
const user = JSON.parse(sessionStorage.getItem("user"));

if (user) {
  document.getElementById(
    "userNameDisplay"
  ).textContent = `Bienvenido, ${user.username}`;
} else {
  // Si no hay usuario en sesión, redirigir al login
  window.location.href = "../pages/login.html";
}
function leerTutorias() {
  const tablaTutorias = document
    .getElementById("tutorias-table")
    .getElementsByTagName("tbody")[0];
  tablaTutorias.innerHTML = "";

  const historialTutorias = user.historial_tutorias || [];

  tutoriasDatos.tutorias.forEach((tutoria) => {
    const fila = document.createElement("tr");

    const celdas = [tutoria["fecha-hora"], tutoria.tema, tutoria.tutor];

    celdas.forEach((contenido) => {
      const celda = document.createElement("td");
      celda.textContent = contenido;
      fila.appendChild(celda);
    });
    // Verificar si la tutoría está asignada desde el inicio o si fue agendada por el usuario
    const yaAgendada =
      tutoria.asignada || historialTutorias.some((t) => t.id === tutoria.id);

    // Agregar botón de agendar o mostrar "Agendada"
    const celdaAccion = document.createElement("td");
    const botonAccion = document.createElement("button");
    botonAccion.textContent = yaAgendada ? "Agendada" : "Agendar";
    botonAccion.disabled = yaAgendada;
    botonAccion.style.backgroundColor = yaAgendada ? "#ccc" : "#ffc107";

    if (!yaAgendada) {
      botonAccion.addEventListener("click", () => agendarTutoria(tutoria.id));
    }

    celdaAccion.appendChild(botonAccion);
    fila.appendChild(celdaAccion);
    tablaTutorias.appendChild(fila);
  });
}

function agendarTutoria(id) {
  if (!user.historial_tutorias) {
    user.historial_tutorias = [];
  }
  const tutoria = tutoriasDatos.tutorias.find((t) => t.id === id);
  if (
    tutoria &&
    confirm(
      `¿Estás seguro de agendar la tutoría de ${tutoria.tema} con ${tutoria.tutor}?`
    )
  ) {
    tutoria.asignada = true;
    user.historial_tutorias.push(tutoria);
    sessionStorage.setItem("user", JSON.stringify(user));
    leerTutorias(); // Actualizar la tabla
  }
}

document.addEventListener("DOMContentLoaded", () => {
  leerTutorias();
});

document.getElementById("logout").addEventListener("click", function () {
  // Eliminar el usuario del sessionStorage
  sessionStorage.removeItem("user");

  // Redirigir al login
  window.location.href = "../pages/login.html";
});
