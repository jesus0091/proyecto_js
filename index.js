
const dataClient = () => {
    
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

    let day = $('.event-day').html();
    let date = $('.event-date').html();
    let Fecha = day + ', ' + date;
    let Hour = $(".event-hour").html();
    let NombreCliente = $("#name").val();
    let TelefonoCliente = $("#telf").val();
    let CorreoCliente = $("#email").val();

    const btnModal = document.querySelector("#dataUser");
    let elementodiv = document.createElement("div");
    btnModal.innerHTML = ``;
    elementodiv.innerHTML = `
    <div class="Modal_content container">
        <img class="ImagenModal" src="images/comprobado.svg" alt="">
        <h2 class="text-center">¡Hola, ${NombreCliente}!</h2>
        <p class="">Tu turno se ha generado con éxito para el dia <span class="font-weight-bold">${Fecha}</span> a las <span class="font-weight-bold">${Hour}</span> con <span class="font-weight-bold">${Barbero}</span></p>
        <p class="m-0">Cualquier cosa nos ponemos en contacto contigo a traves del <span class="font-weight-bold">${TelefonoCliente}</span> ó <span class="font-weight-bold">${CorreoCliente}</span></p>   
    </div>
    `;
    btnModal.appendChild(elementodiv);
    
    var NuevoCliente = new Cliente(NombreCliente, TelefonoCliente, CorreoCliente, Barbero);
    console.log(NuevoCliente);
    saveClient(NuevoCliente);

    form.reset();
    eraseIcons();
}
