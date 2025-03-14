const users = JSON.parse(localStorage.getItem("users")) || [
    {
        id: 1,
        username: "julianelmaspapuh",
        nombre: "Julian",
        edad: 19,
        password: "muysegura",
        email: "emailmeporfi@gmail.com",
        historial_tutorias: []
    },
    {
        id: 2,
        username: "anaverdadera",
        nombre: "Ana",
        edad: 22,
        password: "clave123",
        email: "ana@example.com",
        historial_tutorias: [ ]
    },
    {
        id: 3,
        username: "carlosenigma",
        nombre: "Carlos",
        edad: 25,
        password: "secreto2024",
        email: "carlos@example.com",
        historial_tutorias: []
    },
    {
        id: 4,
        username: "maria_dev",
        nombre: "Maria",
        edad: 21,
        password: "devpass",
        email: "maria@example.com",
        historial_tutorias: []
    },
    {
        id: 5,
        username: "pedrorunner",
        nombre: "Pedro",
        edad: 23,
        password: "contrasegura",
        email: "pedro@example.com",
        historial_tutorias: [
        ]
    }
];

export default users;
