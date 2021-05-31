function guardarCliente(NuevoCliente) {
    // Carga los clientes anteriores
    var Clientes = JSON.parse(localStorage.getItem("Users"));
    
    if(!Clientes){
        Clientes = [];
    }
    
    // Agrego cliente al array Clientes
    Clientes.push(NuevoCliente);
    
    // Guardo cliente en el STORAGE
    var ClienteJSON = JSON.stringify(Clientes);
    localStorage.setItem("Users", ClienteJSON);
}
const Controlar = (event) => {
    if (!(event.keyCode >= 48 && event.keyCode <= 57)) event.preventDefault();
    console.log(event);
}

  