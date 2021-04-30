var nombre = prompt('Bienvenido, ingrese su nombre');
var ciudad = prompt('Hola' + ' ' + nombre + ', ¿En qué ciudad te encuentras?');

if ((ciudad.toUpperCase()).trim() == ('CABA' || 'BUENOS AIRES')) {
        alert('Bienvenido, hay turnos disponibles en su ubicación');
    } else {
        alert('El servicio solo esta disponible en Buenos Aires');
    }