import tutoriasDatos from '../data/tutorias.js';
// Obtener usuario de sessionStorage
const user = JSON.parse(sessionStorage.getItem("user"));

if (user) {
  document.getElementById("userNameDisplay").textContent = `Bienvenido, ${user.username}`;
} else {
  // Si no hay usuario en sesión, redirigir al login
  window.location.href = "../pages/login.html";
}
function leerTutorias() {
    const tablaTutorias = document.getElementById("tutorias-table").getElementsByTagName('tbody')[0];
    tablaTutorias.innerHTML = '';

    const historialTutorias = user.historial_tutorias || [];
    
    tutoriasDatos.tutorias.forEach(tutoria => {
        const fila = document.createElement('tr');

        const celdas = [
            tutoria["fecha-hora"],  
            tutoria.tema,
            tutoria.tutor
        ];

        celdas.forEach(contenido => {
            const celda = document.createElement('td');
            celda.textContent = contenido;
            fila.appendChild(celda);
        });
// Verificar si la tutoría ya está agendada
const yaAgendada = historialTutorias.some(t => t.id === tutoria.id);

// Agregar botón de agendar o mostrar "Agendada"
const celdaAccion = document.createElement('td');
const botonAgendar = document.createElement('button');
botonAgendar.textContent = yaAgendada ? "Agendada" : "Agendar";
botonAgendar.disabled = yaAgendada;

if (!yaAgendada) {
    botonAgendar.addEventListener('click', () => agendarTutoria(tutoria.id));
}

celdaAccion.appendChild(botonAgendar);
fila.appendChild(celdaAccion);
tablaTutorias.appendChild(fila);
});
}

function agendarTutoria(id) {
    if(!user.historial_tutorias){
user.historial_tutorias=[]
    }
    const tutoria = tutoriasDatos.tutorias.find(t => t.id === id);
    if (tutoria && confirm(`¿Estás seguro de agendar la tutoría de ${tutoria.tema} con ${tutoria.tutor}?`)) {
        tutoria.asignada = true;
        user.historial_tutorias.push(tutoria);
        sessionStorage.setItem("user", JSON.stringify(user));
        leerTutorias(); // Actualizar la tabla
    }
}

document.addEventListener("DOMContentLoaded", () => {
    leerTutorias();
});

document.getElementById("logout").addEventListener("click", function() {
    // Eliminar el usuario del sessionStorage
    sessionStorage.removeItem("user");
    
    // Redirigir al login
    window.location.href = "../pages/login.html";
  });