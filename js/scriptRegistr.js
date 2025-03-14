import users from "../data/users.js";
const username = document.getElementById("nombreDeUsuario");
const nombreRegister = document.getElementById("nombreRegister");
const edadRegister = document.getElementById("edadRegistr");
const emailRegister = document.getElementById("emailRegister");
const passwordRegister = document.getElementById("passwordRe");
const registrarBtn = document.getElementById("registarse-re");

document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    let passwordInput = passwordRegister;
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

registrarBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const userName = username.value.trim();
  const nombre = nombreRegister.value.trim();
  const edad = parseInt(edadRegister.value.trim());
  const email = emailRegister.value.trim();
  const password = passwordRegister.value.trim();

  if (
    userName === "" ||
    nombre === "" ||
    edad === "" ||
    email === "" ||
    password === ""
  ) {
    alert("❌ Ingresa todos los campos.");
    return;
  }
  // Buscar usuario en la lista
  const correoRegistrado = users.find((u) => u.email === email);

  if (correoRegistrado) {
    alert("❌ El correo ya esta registrado");
    return;
  }

  const usurNameRegistrado = users.find((u) => u.username === userName);
  if (usurNameRegistrado) {
    alert("❌ El nombre de usuario ya esta registrado");
    return;
  }

  // Crear el nuevo usuario
  const nuevoUsuario = {
    id: users.length + 1,
    username: userName,
    nombre: nombre,
    edad: edad,
    password: password,
    email: email,
    historial_tutorias: [],
  };

  // Agregar el nuevo usuario al array
  users.push(nuevoUsuario);

  localStorage.setItem("users", JSON.stringify(users));

  alert("✅ Usuario registrado correctamente");
  console.log("Usuarios actualizados:", users);
});
