// Efecto del Modo Oscuro
const toggleDarkModeCheckbox = document.getElementById("toggle");
const body = document.body;

toggleDarkModeCheckbox.addEventListener("change", function () {
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  if (isDarkMode) {
    localStorage.setItem("dark-mode", "enabled");
  } else {
    localStorage.removeItem("dark-mode");
  }
});

// Verifica si el modo oscuro estaba activado antes
if (localStorage.getItem("dark-mode") === "enabled") {
  body.classList.add("dark-mode");
  toggleDarkModeCheckbox.checked = true;
}

// Obtener datos del formulario
document
  .getElementById("miFormulario")
  .addEventListener("submit", function (event) {
    // Evitar que el formulario se envíe
    event.preventDefault();

    // Obtener los valores de los campos de entrada
    const nombre = document.getElementById("name").value;
    const contraseña = document.getElementById("password").value;

    if (nombre.trim() === "")
      document.getElementById("mssname").style.visibility = "visible";
    if (contraseña.trim() === "")
      document.getElementById("msspassword").style.visibility = "visible";

    let datos;
    if (nombre.trim() && contraseña.trim() !== "") {
      datos = {
        nombre: nombre,
        contraseña: contraseña,
      };
      document.getElementById("miFormulario").reset();
      document.getElementById("mssname").style.visibility = "hidden";
      document.getElementById("msspassword").style.visibility = "hidden";
      console.log(datos);
    }

    // Hacer algo con los valores obtenidos, como enviarlos a un servidor
  });
