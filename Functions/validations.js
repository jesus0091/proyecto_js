const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telf: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	name: false,
	email: false,
	telf: false
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)>0){
		document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo_incorrecto');
		document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo_correcto');
		document.querySelector(`#grupo_${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo_${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo_${campo} .formulario_input_error`).classList.remove('formulario_input_error_activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo_incorrecto');
		document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo_correcto');
		document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo_${campo} .formulario_input_error`).classList.add('formulario_input_error_activo');
		campos[campo] = false;
	}
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "name":
			validarCampo(expresiones.name, e.target, 'name');
		break;
        case "telf":
			validarCampo(expresiones.telf, e.target, 'telf');
		break;
		case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;
		
	}
}

inputs.forEach((input) => {
	input.addEventListener('keydown', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

form.addEventListener('DatosCliente', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.name && campos.email && campos.telf ){
		form.reset();
        console.log("funca")

		// document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		// setTimeout(() => {
		// 	document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		// }, 5000);

		// document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
		// 	icono.classList.remove('formulario__grupo-correcto');
		// });
	} else {
        console.log("no funca")
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');

	}
});