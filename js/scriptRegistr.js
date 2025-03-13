
const nombreDeUsuario = document.getElementById("nombreDeUsuario");
const nombreRegister = document.getElementById("nombreRegister");
const edadRegister = document.getElementById("edadRegistr");
const emailRegister = document.getElementById("emailRegister");
const passwordRegister = document.getElementById("passwordRegister");
const registrarBtn = document.getElementById("registarse-re");
const fs = require("fs");
const filePath = "../data/users.json";



// Función para registrar un nuevo usuario

function agregarUsuario() {
    const username = nombreDeUsuario.value.trim();
    const nombre = nombreRegister.value.trim();
    const edad = parseInt(edadRegister.value, 10);
    const email = emailRegister.value.trim();
    const password = passwordRegister.value.trim();

    if (!username || !nombre || !edad || !email || !password) {
        alert("❌ Todos los campos son obligatorios.");
        return;
    }

    // Leer el archivo JSON
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error al leer el archivo:", err);
            return;
        }

        let usersData = JSON.parse(data);
        let users = usersData.users;

        // Verificar si el usuario o correo ya existen
        if (users.some(user => user.email === email || user.username === username)) {
            alert("❌ Error: El usuario o el correo ya están registrados.");
            return;
        }

        // Crear un nuevo usuario
        const newUser = {
            id: users.length + 1,
            username,
            nombre,
            edad,
            password,
            email,
            historial_tutorias: []
        };

        // Agregar el nuevo usuario al array
        users.push(newUser);

        // Guardar cambios en el archivo JSON
        fs.writeFile(filePath, JSON.stringify({ users }, null, 2), (err) => {
            if (err) {
                console.error("Error al guardar el archivo:", err);
            } else {
                alert("✅ Usuario registrado correctamente.");
                console.log("Usuario agregado:", newUser);
            }
        });
    });
}

// Agregar evento al botón de registro
registrarBtn.addEventListener("click", function (event) {
    event.preventDefault();
    agregarUsuario();
});