const express = require('express')
const app = express()
const mysql = require('mysql')
const dotenv = require('dotenv')
const cors = require('cors')


const db = mysql.createPool({
    host: 'database_node',
    user: 'user',
    password: '123456',
    database: 'db_node'
})

app.use(cors())
app.use(express.json())

// app.get("/", (req, res) => {
//     const sqlInsert = "INSERT INTO user (name, email, cpf, phone, dh_insert) VALUES ('Jeremias', 'coelho@gmail.com', '014.345.932-58', 92929292, now())"
//     db.query(sqlInsert, (err, result) => {
//         res.send("Hello World!")
//     })
// })
app.post("/api/registrar", (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const cpf = req.body.cpf
    const phone = 12

    const sqlInsert = "INSERT INTO user (name, email, cpf, phone) VALUES (?,?,?,?)"
    db.query(sqlInsert, [name, email, cpf, phone], (err, result) => {
        console.log(err)
    })
})

PORT = process.env.PORT || 2000

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})