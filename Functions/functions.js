const saveClient = (NuevoCliente) => {
    var Clientes = JSON.parse(localStorage.getItem("Users"));
    if (!Clientes) {
        Clientes = [];
    }
    Clientes.push(NuevoCliente);
    var ClienteJSON = JSON.stringify(Clientes);
    localStorage.setItem("Users", ClienteJSON);
}

const control = (event) => {
    if (!(event.keyCode >= 48 && event.keyCode <= 57))
        event.preventDefault();
}

const validField = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        $(`#grupo_${campo}`).removeClass('formulario_grupo_incorrecto');
        $(`#grupo_${campo}`).addClass('formulario_grupo_correcto');
        $(`#grupo_${campo} i`).removeClass('fa-times-circle');
        $(`#grupo_${campo} i`).addClass('fa-check-circle');
        $(`#grupo_${campo} .formulario_input_error`).removeClass('formulario_input_error_activo');
        console.log(campos[campo])
        campos[campo] = true;
    } else {
        $(`#grupo_${campo}`).addClass('formulario_grupo_incorrecto');
        $(`#grupo_${campo}`).removeClass('formulario_grupo_correcto');
        $(`#grupo_${campo} i`).addClass('fa-times-circle');
        $(`#grupo_${campo} i`).removeClass('fa-check-circle');
        $(`#grupo_${campo} .formulario_input_error`).addClass('formulario_input_error_activo');
        campos[campo] = false;
    }
}

const eraseIcons = () => {
    var borrar = document.querySelectorAll('#form i, p');
    borrar.forEach(element => {
        element.classList.remove('fa-check-circle');
        element.classList.remove('fa-times-circle');
        element.classList.remove('formulario_input_error_activo');
    });
}

const validForm = (e) => {
    switch (e.target.name) {
        case "name":
            validField(expresiones.name, e.target, 'name');
            break;
        case "telf":
            validField(expresiones.telf, e.target, 'telf');
            break;
        case "email":
            validField(expresiones.email, e.target, 'email');
            break;
    }
}

const validAll = () =>{
    if((campos.name != '') && (campos.telf != '') && (campos.email != '')){
		$('#btnmodal').removeAttr("disabled");
	}else{
        $('#btnmodal').attr( 'disabled' , "disabled");
    }
}

const btnDisabled = () =>{
    $('#btnmodal').attr( 'disabled' , "disabled");
}


$(document).on('click', '.dark-light', function () {
    $('body').toggleClass('light-mode');

    if(  $('body').hasClass('light-mode')  ){
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
});

if(localStorage.getItem('dark-mode') === 'true'){
	$('body').addClass('light-mode');

} else {
	$('body').removeClass('light-mode');
}
