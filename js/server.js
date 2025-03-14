const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const filePath = path.join(__dirname, "data", "users.json");

// Función para leer el JSON
const leerUsuarios = () => {
    try {
        const data = fs.readFileSync(filePath, "utf8");
        return JSON.parse(data);
    } catch (err) {
        console.error("Error al leer el archivo:", err);
        return { users: [] };
    }
};

// Ruta para registrar usuarios
app.post("/registrar", (req, res) => {
    const usuariosData = leerUsuarios();
    const usuarios = usuariosData.users;

    const nuevoUsuario = {
        id: usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1, // Autoincrementar ID
        username: req.body.username,
        nombre: req.body.nombre,
        edad: req.body.edad,
        password: req.body.password,
        email: req.body.email,
        historial_tutorias: []
    };

    usuarios.push(nuevoUsuario);

    // Escribir en el archivo JSON
    fs.writeFile(filePath, JSON.stringify({ users: usuarios }, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ message: "Error al guardar el usuario" });
        }
        res.status(201).json({ message: "Usuario registrado correctamente", usuario: nuevoUsuario });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
