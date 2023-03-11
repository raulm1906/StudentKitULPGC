const express = require('express')
const cors = require('cors')
const app = express()
app.get(cors())
const PORT = 3001


const conocimientos = [
    {
        "idArea": 1,
        "nombre": "Hardware",
    },
    {
        "idArea": 2,
        "nombre": "Desarrollo Software",
    },
    {
        "idArea": 3,
        "nombre": "Robotica",
    }
]


const profesores = [
    {
        "id": 1,
        "nombre": "Franciso Quintana",
        "areasDeConocimiento": [
            conocimientos[0]
        ],
        "correo": "francisco.quintana@ulpgc.es",
        "despacho": "D1",
        "telefono": "652123756"
    },
    {
        "id": 2,
        "nombre": "Francisca Dominguez",
        "areasDeConocimiento": [
            conocimientos[1]
        ],
        "correo": "francisca.dominguez@ulpgc.es",
        "despacho": "C3",
        "telefono": "673421363"
    }
]


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.get('/profesores', (req, res) => {
    res.json(profesores);
  });

app.get('/profesores/:id', (req, res) => {
    const id = req.params.id
    const profesor = profesores.find(p => p.id == parseInt(id))
    if (!profesor){
        return res.status(404)
    }
    res.send(profesor)
})

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});


