const nombreRegister = document.getElementById("nombreRegister");
const edadRegister = document.getElementById("edadRegistr");
const emailRegister = document.getElementById("emailRegister");
const passwordRegister = document.getElementById("passwordRe");
const usernameRegister = document.getElementById("usernameRegister");
const registrarBtn = document.getElementById("registarse-re");

registrarBtn.addEventListener("click", async () => {
    event.preventDefault();
    const usuario = {
        username: usernameRegister.value,
        nombre: nombreRegister.value,
        edad: parseInt(edadRegister.value),
        password: passwordRegister.value,
        email: emailRegister.value
    };

    try {
        const response = await fetch("http://localhost:3000/registrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });

        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error("Error:", error);
        alert("Hubo un error al registrar el usuario");
    }
});
