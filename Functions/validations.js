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

