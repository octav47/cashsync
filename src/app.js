import express from 'express'
import mysql from 'mysql'

import config from '../config.json'

const app = express()
const connection = mysql.createConnection(config.db)

connection.connect()

app.get('/', (req, res) => {
    connection.query('SELECT * from transaction', (error, result, fields) => {
        console.log(result)
    })
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})
