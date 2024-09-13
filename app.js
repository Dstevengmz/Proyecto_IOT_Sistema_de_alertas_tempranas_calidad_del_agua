//Librerias requeridas serialport ,Parser-readline, at-commands
const { SerialPort } = require('serialport');
const Readline = require('@serialport/parser-readline');
const AT = require('at-commands');


//Codigo para crear un puerto // y realizar una apertura automatica
//path: '/dev/tty-usbserial1',  : Reemplaza con el puerto correcto
// baudRate: 57600, : Ajustustar la velocidad de los baudios
const port = new SerialPort({ 
    path: '/dev/tty-usbserial1', 
    baudRate: 57600, 
}); 


//new Readline({ delimiter: '\r\n' }) : Crear objeto readline para procesar datos entrantes del puerto serie línea por línea. facilita mucho el manejo de la información proveniente del puerto serie.
// \r & \n = Cada linea de texto termina con caracteres de retorno y nueva linea para marcar el final de una línea en la comunicación serie
//port.pipe(new Readline(...)) : conecta el flujo de datos del puerto serie que se crea para que los datos lleguen al puerto  y se pasen al parse para el procesamiento
const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

//Esta línea  registra un "listener" un escuchador para el evento 'open' en el objeto port (que representa el puerto serie).
port.on('open', () => {
    console.log('Puerto serie abierto');

    // Enviar comando AT
    port.write('AT\r\n');

    // Enviar comando ATI (información del módulo)
    port.write('ATI\r\n');
});

//Esta línea registra un listener para el evento 'data' en el objeto parser
//data: se dispara cada vez que el parser recibe una línea completa de datos del puerto serie
//readline: dividi flujo de datos en linea
parser.on('data', data => {
    console.log('Respuesta del HAT o ATI:', data); 
});

//Esta línea registra un listener para el evento 'error' en el objeto port.
//Se imprime el mensaje de error
port.on('error', function(err) {
  console.log('Error: ', err.message);
});