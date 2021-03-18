import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv';

dotenv.config({ path: 'variables.env' })

const app = express();

//conectar db
db.authenticate()
    .then(() => {console.log('base de datos conectada')})
    .catch(() => {console.log('error')})

console.log(process.env.HOST + 'gfdgfdgfrdg')

//habilitar pug
app.set('view engine', 'pug');

//obtener el año actualizado
app.use( (req, res, next) => {
    const year = new Date();

    //si no se ve el sitio agregar return antes del next()
    res.locals.actualYear = year.getFullYear();

    res.locals.nombreSitio = 'Agencia de Viajes';
    
    next();
});

//agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

//definir carpeta publica
app.use(express.static('public'));

//agregar un router
app.use('/', router);

const host = process.env.HOST || '0.0.0.0';//'localhost';
//definir un puerto
const port = process.env.PORT || 4000;

app.listen(port, host, () => {
    console.log('el servidor esta funcionando');
});