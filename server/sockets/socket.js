const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'Bienvenido a esta aplicación'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);


        client.broadcast.emit('enviarMensaje', data);
    
        // if(data.usuario){
        //     callback({
        //         resp: 'TODO SALIO OK111'
        //     });
        // }else{
        //     callback({
        //         resp: 'TODO SALIO MAL!!!'
        //     });
        // }

        // callback();

    });

    
});