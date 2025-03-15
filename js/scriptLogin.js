import users from '../data/users.js';
console.log(users);



const emailLogin = document.getElementById("emailLogin");
const passwordLogin = document.getElementById("passwordLogin");
const login = document.getElementById("login");

document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    let passwordInput = document.getElementById("passwordLogin");
    let togglePassword = document.getElementById("togglePassword");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePassword.style.backgroundImage =
        "url('/assets/img/loginRegister/oculto.png')";
    } else {
      passwordInput.type = "password";
      togglePassword.style.backgroundImage =
        "url('/assets/img/loginRegister/ojo.png')";
    }
  });

login.addEventListener("click", function (event) {
  event.preventDefault(); // Evita la recarga de la página

  const email = emailLogin.value.trim();
  const password = passwordLogin.value.trim();

  // Validación de campos vacíos
  if (email === "" || password === "") {
    alert("❌ Ingresa un correo y una contraseña.");
    return;
  }

  // Buscar usuario en la lista
  const user = users.find((u) => u.email === email);

  if (!user) {
    alert("❌ El usuario no existe.");
    return;
  }

  // Verificar contraseña
  if (user.password !== password) {
    alert("❌ Contraseña incorrecta.");
    return;
  }
   // Guardar información del usuario en sessionStorage para la sesión
   sessionStorage.setItem("user", JSON.stringify(user));

   // Usuario autenticado correctamente
   alert(`✅ Bienvenido, ${user.nombre}!`);
   console.log("Redirigiendo...");
 
  window.location.href = "../pages/agendamiento.html";
});
