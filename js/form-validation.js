// Form validation
document.getElementById("contactForm").addEventListener("submit", function (event) {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;

    let nombreError = document.getElementById("nombreError");
    let apellidoError = document.getElementById("apellidoError");
    let emailError = document.getElementById("emailError");
    let telefonoError = document.getElementById("telefonoError");

    nombreError.textContent = "";
    apellidoError.textContent = "";
    emailError.textContent = "";
    telefonoError.textContent = "";

    if (nombre === "") {
        nombreError.textContent = "Por favor, ingrese su nombre.";
        event.preventDefault();
    }

    if (apellido === "") {
        apellidoError.textContent = "Por favor, ingrese su apellido.";
        event.preventDefault();
    }

    if (email === "") {
        emailError.textContent = "Por favor, ingrese su email.";
        event.preventDefault();
    }

    // Simple email validation
    if (email !== "" && !email.includes("@")) {
        emailError.textContent = "Por favor, ingrese un email válido.";
        event.preventDefault();
    }
});