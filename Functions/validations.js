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

inputs.forEach((input) => {
	input.addEventListener('keyup', validForm);
	input.addEventListener('blur', validForm);
});

// formulario.addEventListener('submit', (e) => {
// 	e.preventDefault();

// 	const terminos = document.getElementById('terminos');
// 	if(campos.name && campos.telf && campos.correo ){
// 		$('#btnmodal').removeAttr('disabled')

// 		// document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
// 		// setTimeout(() => {
// 		// 	document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
// 		// }, 5000);

// 		// document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
// 		// 	icono.classList.remove('formulario__grupo-correcto');
// 		// });
// 	} else {
// 		// document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
// 	}
// // });