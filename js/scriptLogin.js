const inputs = document.querySelectorAll(".input");
const users = [];
const emailLogin = document.getElementById("emailLogin");
const passwordLogin = document.getElementById("passwordLogin");
const login = document.getElementById("login");

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}
function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}
inputs.forEach((input) => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});

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



  function cargarJsonUser() {
	fetch("../data/users.json")
	  .then(function (res) {
		return res.json();
	  })
	  .then(function (data) {
		users.push(...data.users); 
		console.log(users); 
	  })
	  .catch(error => console.error("Error al cargar el JSON:", error));
  }

  cargarJsonUser();
  
	

  login.addEventListener("click", function () {

	const email = emailLogin.value;
	const password = passwordLogin.value;
  
	users.forEach(user => {
	  if (user.email === email && user.password === password){
		console.log(user);
		alert("Usuario logueado correctamente");
		  
		window.location.href = '../index.html';	
		
	  }

  });
});