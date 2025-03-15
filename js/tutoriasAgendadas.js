// Obtener usuario de sessionStorage
const user = JSON.parse(sessionStorage.getItem("user"));

if (user) {
  const tutoriasContainer = document.getElementById("tutoriasContainer");
  document.getElementById("userNameDisplay").textContent = `Estas son tus tutorías, ${user.username}`;

  //document.getElementById("userNameDisplay").textContent = Bienvenido, ${user.username}!;
  if (user.historial_tutorias.length === 0) {



    // Mostrar mensaje si no hay tutorías
    tutoriasContainer.innerHTML = `<p class="no-tutorias">No tienes tutorías agendadas.</p>`;
  } else {
    user.historial_tutorias.forEach(tutoria => {
      // Verificar si los valores existen antes de agregarlos
      const tema = tutoria.tema ? tutoria.tema : "Sin tema";
      const tutor = tutoria.tutor ? tutoria.tutor : "No asignado";
      const fechaHora = tutoria["fecha-hora"] ? tutoria["fecha-hora"] : "Fecha no disponible";

      const card = document.createElement("div");
      card.classList.add("ag-courses_item");
      card.innerHTML = `
          <a href="#" class="ag-courses-item_link">
            <div class="ag-courses-item_bg"></div>
            <div class="ag-courses-item_title">
              ${tema}
            </div>
            <div class="ag-courses-item_date-box">
              Tutor:
              <span class="ag-courses-item_date">
                  ${tutor}
              </span>
            </div>
            <div class="ag-courses-item_date-box">
              Fecha y Hora:
              <span class="ag-courses-item_date">
                ${fechaHora}
              </span>
            </div>
          </a>
      `;
      tutoriasContainer.appendChild(card);
    });
  }
} else {
  // Si no hay usuario en sesión, redirigir al login
  window.location.href = "../pages/login.html";
}


document.getElementById("logout").addEventListener("click", function() {
    // Eliminar el usuario del sessionStorage
    sessionStorage.removeItem("user");
    
    // Redirigir al login
    window.location.href = "../pages/login.html";
  });