const express = require('express')
const app = express()
const db = require('../config/database')

app.get("/api/registros", (req, res) => {
    let sql = "SELECT * FROM user"

    db.query(sql, (err, result) => {
        if (err) {
            res.status(400).json({
                message: err
            })
            return
        }


        if (result.length) res.json(result)
        else res.json({})
    })
})

app.get("/api/registros/:id", (req, res) => {
    id = req.params.id
    let sql = `SELECT * FROM user id = ${id}`

    db.query(sql, (err, result) => {
        if (err) {
            res.status(400).json({
                message: err
            })
            return
        }

        if (result.length) res.json(result)
        else res.json({})
    })
})




module.exports = app;