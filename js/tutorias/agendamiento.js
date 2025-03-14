const tutoriasDatos = {
    "tutorias": [
        {
            "id": 1,
            "tutor": "Vivas",
            "tema": "Matemáticas",
            "fecha-hora": "2025-03-09 03:30 PM",
            "asignada": true
        },
        {           
            "id": 2,
            "tutor": "Carlos",
            "tema": "Ciencias sociales",
            "fecha-hora": "2025-03-12 02:30 PM",
            "asignada": false
        },
        {
            "id": 3,
            "tutor": "Samuel",
            "tema": "Programación",
            "fecha-hora": "2025-03-20 09:30 AM",
            "asignada": false
        },
        {
            "id": 4,
            "tutor": "Diego",
            "tema": "Arte",
            "fecha-hora": "2025-03-25 10:30 AM",
            "asignada": false
        },
        {
            "id": 5,
            "tutor": "Laura",
            "tema": "Física",
            "fecha-hora": "2025-04-01 11:00 AM",
            "asignada": false
        },
        {
            "id": 6,
            "tutor": "Miguel",
            "tema": "Química",
            "fecha-hora": "2025-04-05 04:00 PM",
            "asignada": true
        },
        {
            "id": 7,
            "tutor": "Ana",
            "tema": "Literatura",
            "fecha-hora": "2025-04-10 10:00 AM",
            "asignada": false
        },
        {
            "id": 8,
            "tutor": "Jorge",
            "tema": "Historia",
            "fecha-hora": "2025-04-15 03:00 PM",
            "asignada": false
        },
        {
            "id": 9,
            "tutor": "Sofía",
            "tema": "Biología",
            "fecha-hora": "2025-04-20 09:00 AM",
            "asignada": true
        },
        {
            "id": 10,
            "tutor": "Ricardo",
            "tema": "Geografía",
            "fecha-hora": "2025-04-25 02:30 PM",
            "asignada": false
        },
        {
            "id": 11,
            "tutor": "Patricia",
            "tema": "Inglés",
            "fecha-hora": "2025-05-01 01:00 PM",
            "asignada": false
        },
        {
            "id": 12,
            "tutor": "Fernando",
            "tema": "Filosofía",
            "fecha-hora": "2025-05-05 11:30 AM",
            "asignada": false
        },
        {
            "id": 13,
            "tutor": "Lucía",
            "tema": "Economía",
            "fecha-hora": "2025-05-10 04:00 PM",
            "asignada": true
        },
        {
            "id": 14,
            "tutor": "Oscar",
            "tema": "Derecho",
            "fecha-hora": "2025-05-15 10:00 AM",
            "asignada": false
        },
        {
            "id": 15,
            "tutor": "Carmen",
            "tema": "Psicología",
            "fecha-hora": "2025-05-20 03:30 PM",
            "asignada": false
        },
        {
            "id": 16,
            "tutor": "Héctor",
            "tema": "Estadística",
            "fecha-hora": "2025-05-25 09:00 AM",
            "asignada": false
        },
        {
            "id": 17,
            "tutor": "Isabel",
            "tema": "Música",
            "fecha-hora": "2025-06-01 02:00 PM",
            "asignada": true
        },
        {
            "id": 18,
            "tutor": "Raúl",
            "tema": "Dibujo técnico",
            "fecha-hora": "2025-06-05 11:00 AM",
            "asignada": false
        },
        {
            "id": 19,
            "tutor": "Elena",
            "tema": "Astronomía",
            "fecha-hora": "2025-06-10 04:30 PM",
            "asignada": false
        },
        {
            "id": 20,
            "tutor": "Gabriel",
            "tema": "Robótica",
            "fecha-hora": "2025-06-15 10:30 AM",
            "asignada": false
        }
    ]
};

function leerTutorias() {
    const tablaTutorias = document.getElementById("tutorias-table").getElementsByTagName('tbody')[0];
    tablaTutorias.innerHTML = '';

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

        // Agregar botón de agendar
        const celdaAccion = document.createElement('td');
        const botonAgendar = document.createElement('button');
        botonAgendar.textContent = tutoria.asignada ? "Agendada" : "Agendar";
        botonAgendar.disabled = tutoria.asignada;
        botonAgendar.addEventListener('click', () => agendarTutoria(tutoria.id));
        celdaAccion.appendChild(botonAgendar);
        fila.appendChild(celdaAccion);

        tablaTutorias.appendChild(fila);
    });
}

function agendarTutoria(id) {
    const tutoria = tutoriasDatos.tutorias.find(t => t.id === id);
    if (tutoria && confirm(`¿Estás seguro de agendar la tutoría de ${tutoria.tema} con ${tutoria.tutor}?`)) {
        tutoria.asignada = true;
        leerTutorias(); // Actualizar la tabla
    }
}

document.addEventListener("DOMContentLoaded", () => {
    leerTutorias();
});