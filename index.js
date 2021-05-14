var cliente1 = {
    nombre: prompt("Cliente 1: Ingrese su nombre:"),
    apellido: prompt("Ingrese su apellido:"),
    correo: prompt("Ingrese su correo electrónico:"),
    telefono: prompt("Ingrese tu telefono:"),
    pelo: prompt("Quiere corte de pelo?"),
    barba: prompt("Quiere corte de barba?"),
    servicio: function(){
        var preciocorte = 500;
        var preciobarba = 200;
        if( (this.pelo.toUpperCase()).trim() == "SI" && (this.barba.toUpperCase()).trim() == "SI" ){
            console.log("Debe pagar: " + (preciocorte + preciobarba));
        }else{
            console.log("Debe pagar: " + preciocorte);
        }
    }
}
var cliente2 = {
    nombre: prompt("Cliente 2: Ingrese su nombre:"),
    apellido: prompt("Ingrese su apellido:"),
    correo: prompt("Ingrese su correo electrónico:"),
    telefono: prompt("Ingrese tu telefono:"),
    pelo: prompt("Quiere corte de pelo?"),
    barba: prompt("Quiere corte de barba?"),
    servicio: function(){
        var preciocorte = 500;
        var preciobarba = 200;
        if( (this.pelo.toUpperCase()).trim() == "SI" && (this.barba.toUpperCase()).trim() == "SI" ){
            console.log("Debe pagar: " + (preciocorte + preciobarba));
        }else{
            console.log("Debe pagar: " + preciocorte);
        }
    }
}
var cliente3 = {
    nombre: prompt("Cliente 3: Ingrese su nombre:"),
    apellido: prompt("Ingrese su apellido:"),
    correo: prompt("Ingrese su correo electrónico:"),
    telefono: prompt("Ingrese tu telefono:"),
    pelo: prompt("Quiere corte de pelo?"),
    barba: prompt("Quiere corte de barba?"),
    servicio: function(){
        var preciocorte = 500;
        var preciobarba = 200;
        if( (this.pelo.toUpperCase()).trim() == "SI" && (this.barba.toUpperCase()).trim() == "SI" ){
            console.log("Debe pagar: " + (preciocorte + preciobarba));
        }else{
            console.log("Debe pagar: " + preciocorte);
        }
    }
}
var cliente4 = {
    nombre: prompt("Cliente 4: Ingrese su nombre:"),
    apellido: prompt("Ingrese su apellido:"),
    correo: prompt("Ingrese su correo electrónico:"),
    telefono: prompt("Ingrese tu telefono:"),
    pelo: prompt("Quiere corte de pelo?"),
    barba: prompt("Quiere corte de barba?"),
    servicio: function(){
        var preciocorte = 500;
        var preciobarba = 200;
        if( (this.pelo.toUpperCase()).trim() == "SI" && (this.barba.toUpperCase()).trim() == "SI" ){
            console.log("Debe pagar: " + (preciocorte + preciobarba));
        }else{
            console.log("Debe pagar: " + preciocorte);
        }
    }
}
var clientes = [];
clientes.push(cliente1, cliente2, cliente3, cliente4); 

for(i=0; i < clientes.length; i++){
    clientes[i].servicio();

}