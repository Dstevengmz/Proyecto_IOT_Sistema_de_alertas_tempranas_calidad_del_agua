const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3100;

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());

// Ruta para recibir los datos del Arduino
app.post('/data', (req, res) => {
    // Obtener los datos del cuerpo de la solicitud
    const sensorData = req.body;
    
    // Validar los datos recibidos
    if (!sensorData.sensorPH || !sensorData.sensorTurbidez || !sensorData.sensorOxygenConcentration) {
        return res.status(400).send('Datos inválidos');
    }

    // Procesar los datos (aquí puedes almacenarlos en una base de datos, hacer cálculos, etc.)
    console.log('Datos de los sensores recibidos:', sensorData);

    // Enviar una respuesta de éxito al Arduino
    res.status(200).send({ message: 'Datos recibidos correctamente' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
