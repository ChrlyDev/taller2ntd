function leerTutorias() {
    // En esta función vamos a leer los datos de las tutorias para formatearlos y renderizarlas en una tabla html
    
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
        
        tablaTutorias.appendChild(fila);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    leerTutorias();
});
