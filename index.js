// Funcion para recolectar los datos del cliente en el HTML
const DatosCliente = () => {
    // Selecciona el Barbero: Datos
    let Barbero = '';
    let Barbero1 = document.getElementById("Barbero1");
    let Barbero2 = document.getElementById("Barbero2");
    let Barbero3 = document.getElementById("Barbero3");

    if (Barbero1.checked) {
        Barbero = Barbero1.value;
    } else if (Barbero2.checked) {
        Barbero = Barbero2.value;
    } else if (Barbero3.checked) {
        Barbero = Barbero3.value;
    }

    // let Barbero = (Barbero1.checked)? Barbero1.value : (Barbero2.checked)? Barbero2.value : (Barbero3.checked)? Barbero3.value;
    // Quise reemplazar el if y esto no me funcionó 

    // Formulario: Datos
    let NombreCliente = document.getElementById("name").value;
    let TelefonoCliente = document.getElementById("telf").value;
    let CorreoCliente = document.getElementById("email").value;

    console.log(NombreCliente);

    const Modal = document.querySelector("#ModalReserva") //selecionas el modal
    let elementodiv = document.createElement("div") // creamos un elemento div
    // metemos adentro del div que creamos los datos del user
    elementodiv.innerHTML = `
        <ul>
            <li>${NombreCliente}</li>
            <li>${TelefonoCliente}</li>
            <li>${CorreoCliente}</li>
        </ul>
    `;
    Modal.appendChild(elementodiv) //  metemos adentro del modal el div que creamos


    var NuevoCliente = new Cliente(NombreCliente, TelefonoCliente, CorreoCliente, Barbero);
    console.log(NuevoCliente);
    guardarCliente(NuevoCliente);
}