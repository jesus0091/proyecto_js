// Funcion para recolectar los datos del cliente en el HTML
const DatosCliente = () => {
    // Definir barbero
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
    console.log(Barbero);
    
    // Definir fecha
    let day = $('.event-day').html();
    let date = $('.event-date').html();
    let Fecha = day+', '+date; 
    // Definir hora

    // Formulario: Datos
    let NombreCliente = $("#name").val();
    let TelefonoCliente = $("#telf").val();
    let CorreoCliente = $("#email").val();
    console.log(NombreCliente);

    const Modal = document.querySelector("#DatosUser");
    let elementodiv = document.createElement("div");
    Modal.innerHTML = ``;
    elementodiv.innerHTML = `
        <ul>
            <li>${NombreCliente}</li>
            <li>${TelefonoCliente}</li>
            <li>${CorreoCliente}</li>
            <li>${Fecha}</li>
            <li>${Barbero}</li>
        </ul>
    `;
    Modal.appendChild(elementodiv) //  metemos adentro del modal el div que creamos


    var NuevoCliente = new Cliente(NombreCliente, TelefonoCliente, CorreoCliente, Barbero);
    console.log(NuevoCliente);
    guardarCliente(NuevoCliente);
}