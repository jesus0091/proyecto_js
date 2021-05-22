function guardarCliente(NuevoCliente) {
    // Carga los clientes anteriores
    var Clientes = JSON.parse(localStorage.getItem("Clientes"));
    
    if(!Clientes){
        Clientes = [];
    }
    
    // Agrego cliente al array Clientes
    Clientes.push(NuevoCliente);
    
    // Guardo cliente en el STORAGE
    var ClienteJSON = JSON.stringify(Clientes);
    localStorage.setItem("Clientes", ClienteJSON);
}