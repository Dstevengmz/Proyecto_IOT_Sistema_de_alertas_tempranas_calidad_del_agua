//Importacion de librerias
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('node:fs');
const path = require('node:path'); 


const app = express();
const PORT = 3100;

// Middleware para procesar JSON
app.use(bodyParser.json());


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

app.get('/app',(req,res)=>{
    const data=leerDatos();
    res.json(data.datos);
});

app.post('api/sensores',(req,res)=>{
    const Datosdelossensores =req.body;
    console.log('Datos recibidos del sensor es : ',Datosdelossensores)
    res.status(200).send('Datos recibidos correctamente');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
