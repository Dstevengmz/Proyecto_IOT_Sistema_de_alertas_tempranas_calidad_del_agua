//Importacion de librerias
const express = require('express');
const fs = require('fs');
const path = require('path'); 

const app = express();
const PORT = 3100;

const leerDatos = () => {
    const dataPath = path.join(__dirname, 'db.json'); //  'db.json' está en la misma carpeta
    try {
        const data = fs.readFileSync(dataPath, 'utf8'); // Leer el archivo como texto
        return JSON.parse(data); // Parsear el JSON
        console.log(datos); // Mostrar los datos en por consola
    } catch (error) {
        console.error('Error al tratar de leer el archivo:', error); // Manejar errores
    }
};

const EscribirDatos=(data)=>{
    try {
        fs.writeFileSync("db.json",JSON.stringify(data));
    } catch (error) {
        console.error('Error al escribir los datos:', error); // Manejar errores
    }
}

// leerDatos(); //Correr la funcion

//Ruta
app.get('/', (req, res) => {
    res.send("BIENVENIDO A LA API.ddd..");
});

app.get('/api',(req,res)=>{
    const data=leerDatos();
    res.json(data.datos);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});



//Darwin



// const bodyParser = require('body-parser');
// Middleware para parsear el cuerpo de las solicitudes
// app.use(bodyParser.json());
// // Ruta para recibir los datos del Arduino
// app.post('/data', (req, res) => {
//     // Obtener los datos del cuerpo de la solicitud
//     const sensorData = req.body;
//     // Validar los datos recibidos
//     if (!sensorData.sensorPH || !sensorData.sensorTurbidez || !sensorData.sensorOxygenConcentration) {
//         return res.status(400).send('Datos inválidos');
//     }
//     // Procesar los datos (aquí puedes almacenarlos en una base de datos, hacer cálculos, etc.)
//     console.log('Datos de los sensores recibidos:', sensorData);
//     // Enviar una respuesta de éxito al Arduino
//     res.status(200).send({ message: 'Datos recibidos correctamente' });
// });


