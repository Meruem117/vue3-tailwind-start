const models = require('../db')
const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const $sql = require('../sqlMap')

// 连接数据库
const conn = mysql.createConnection(models.mysql)
conn.connect()

//series
router.get('/getHome', (req, res) => {
    let sql = $sql.series.getHome
    conn.query(sql, function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            res.send(result);
        }
    })
})

module.exports = router