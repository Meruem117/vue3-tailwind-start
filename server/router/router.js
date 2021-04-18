var models = require('../db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sqlMap')

// 连接数据库
var conn = mysql.createConnection(models.mysql)
conn.connect()

//series
router.get('/getSeries', (req, res) => {
    var sql = $sql.series.get
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