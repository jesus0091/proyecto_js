// Funcion para recolectar los datos del cliente en el HTML
const DatosCliente = () => {
    // Selecciona el Barbero: Datos
    let Barbero = '';
    let Barbero1 = document.getElementById("Barbero1");
    let Barbero2 = document.getElementById("Barbero2");
    let Barbero3 = document.getElementById("Barbero3");

    if (Barbero1.checked){
        Barbero = Barbero1.value;
    } else if (Barbero2.checked){
        Barbero = Barbero2.value;
    } else if (Barbero3.checked){
        Barbero = Barbero3.value;
    }

    // Barbero = (Barbero1.checked)? Barbero1.value : (Barbero2.checked)? Barbero2.value : (Barbero3.checked)? Barbero3.value;
    // Quise reemplazar el if y esto no me funcionó 

    // Formulario: Datos
    let NombreCliente = document.getElementById("name").value;
    let TelefonoCliente = document.getElementById("telf").value;
    let CorreoCliente = document.getElementById("email").value;

    console.log(NombreCliente);

    var NuevoCliente = new Cliente (NombreCliente, TelefonoCliente, CorreoCliente, Barbero);
    console.log(NuevoCliente); 
    guardarCliente(NuevoCliente);
}

