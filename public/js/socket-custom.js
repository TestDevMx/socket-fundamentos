var socket = io();
// Escuchar
socket.on('connect', function( server ) {
    console.log('Conectado al servidor')
    
    


});


socket.on('disconnect', function() {
    console.log('Se perdio la conexión con el servidor');
});

// Los emit son para enviar al información
socket.emit('enviarMensaje', {
    usuario: 'ojgd',
    mensaje: 'hola mundo'
}, function(resp) {
    console.log(resp);
});


// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.table(mensaje);
});