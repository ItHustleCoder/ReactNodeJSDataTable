const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const mysql = require('mysql');
const cors = require('cors');
const bodyParesr = require('body-parser');

dotenv.config({path: './.env'});

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParesr.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,

});

db.connect((err) => {
    if(err) {
        console.log('Connection with DB is field pls try again', err);
    }
});

app.post('/puntivendita', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    db.query("SELECT DISTINCT idPuntovendita, regione, location, Indirizzo FROM puntivendita", (err, result) => {
        if(err) {
            console.log("Can't select this query", err);
        }
        if(result.length > 0) {
            console.log(result);
           
            res.json(result);
        }
    });
});







app.listen(7070, () => {
    console.log('Listenint port 7070');
})