const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});





  document.getElementById("togglePassword").addEventListener("click", function () {
	let passwordInput = document.getElementById("passwordLogin");
	let togglePassword = document.getElementById("togglePassword");

	if (passwordInput.type === "password") {
		passwordInput.type = "text";
		togglePassword.style.backgroundImage = "url('/assets/img/loginRegister/oculto.png')";
	} else {
		passwordInput.type = "password";
		togglePassword.style.backgroundImage = "url('/assets/img/loginRegister/ojo.png')";
	}
});




