const express = require('express')
const app = express()
const db = require('../config/database')


app.post("/api/registrar", (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const cpf = req.body.cpf
    const phone = req.body.phone

    const sqlInsert = "INSERT INTO user (name, email, cpf, phone) VALUES (?,?,?,?)"
    db.query(sqlInsert, [name, email, cpf, phone], (err, result) => {
        if (err) {
            res.status(400).json({
                message: err
            })
            return
        }

        res.status(200).json({
            status: 200,
            success: true
        })
    })
})


module.exports = app;