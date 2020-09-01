//io() es una funcion que aparece por la libreria "socket.io/socket.io.js".
var socket = io();

//Para saber si esta conectado al servidor. ON es para escuchar.
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//Codigo a ejecutar cuando perdemos conexion con el servidor. 
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});


//Enviar informacion al servidor. emit= es para emitir.
socket.emit('enviarMensaje', {
    usuario: 'Carlos',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});