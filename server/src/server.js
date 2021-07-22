const express = require('express')
const app = express()
const session = require('express-session')
const db = require('./config/database')
const dotenv = require('dotenv')
const cors = require('cors')


db.connect((err) => {
    if (err) throw err
})

app.use(cors())
app.use(express.json())

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

// app.get("/", (req, res) => {
//     const sqlInsert = "INSERT INTO user (name, email, cpf, phone, dh_insert) VALUES ('Jeremias', 'coelho@gmail.com', '014.345.932-58', 92929292, now())"
//     db.query(sqlInsert, (err, result) => {
//         res.send("Hello World!")
//     })
// })
// app.get("/api/registros", (req, res) => {
//     const sqlInsert = "SELECT * FROM user"
//     db.query(sqlInsert, (err, result) => {
//         res.send(result)
//     })
// })

app.get("/api/validar", (req, res) => {
    const sqlInsert = "SELECT * FROM user WHERE id = 1"
    db.query(sqlInsert, (err, result) => {
        res.send(result)
    })
})

app.get("/api/validarId", (req, res) => {
    const id = req.body.username
    const sqlInsert = "SELECT * FROM user WHERE id = ?"
    db.query(sqlInsert, id, (err, result) => {
        res.send(result)
    })
})

app.use('/', [
    require('./routes/registers')
])

app.use('/', [
    require('./routes/singleRegister')
])

app.use('/', [
    require('./routes/user')
])



PORT = process.env.PORT || 2000

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})