const models = require('../db')
const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const $sql = require('../sqlMap')

// 连接数据库
const conn = mysql.createConnection(models.mysql)
conn.connect()

// series
// 首页
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
router.get('/getHomeRec', (req, res) => {
    let sql = $sql.series.recommend.getHome
    conn.query(sql, function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            res.send(result);
        }
    })
})
// 剧情/动作
router.get('/getPlot', (req, res) => {
    let sql = $sql.series.getPlot
    conn.query(sql, function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            res.send(result);
        }
    })
})
router.get('/getPlotRec', (req, res) => {
    let sql = $sql.series.recommend.getPlot
    conn.query(sql, function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            res.send(result);
        }
    })
})
// 犯罪/悬疑
router.get('/getCrime', (req, res) => {
    let sql = $sql.series.getCrime
    conn.query(sql, function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            res.send(result);
        }
    })
})
router.get('/getCrimeRec', (req, res) => {
    let sql = $sql.series.recommend.getCrime
    conn.query(sql, function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            res.send(result);
        }
    })
})
// 魔幻/科幻
router.get('/getFiction', (req, res) => {
    let sql = $sql.series.getFiction
    conn.query(sql, function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            res.send(result);
        }
    })
})
router.get('/getFictionRec', (req, res) => {
    let sql = $sql.series.recommend.getFiction
    conn.query(sql, function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            res.send(result);
        }
    })
})
// 家庭/情感
router.get('/getCity', (req, res) => {
    let sql = $sql.series.getCity
    conn.query(sql, function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            res.send(result);
        }
    })
})
router.get('/getCityRec', (req, res) => {
    let sql = $sql.series.recommend.getCity
    conn.query(sql, function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            res.send(result);
        }
    })
})
// 恐怖/惊悚
router.get('/getHorror', (req, res) => {
    let sql = $sql.series.getHorror
    conn.query(sql, function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            res.send(result);
        }
    })
})
router.get('/getHorrorRec', (req, res) => {
    let sql = $sql.series.recommend.getHorror
    conn.query(sql, function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            res.send(result);
        }
    })
})
// 自然/历史
router.get('/getNature', (req, res) => {
    let sql = $sql.series.getNature
    conn.query(sql, function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            res.send(result);
        }
    })
})
router.get('/getNatureRec', (req, res) => {
    let sql = $sql.series.recommend.getNature
    conn.query(sql, function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            res.send(result);
        }
    })
})
// 动漫/卡通
router.get('/getComic', (req, res) => {
    let sql = $sql.series.getComic
    conn.query(sql, function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            res.send(result);
        }
    })
})
router.get('/getComicRec', (req, res) => {
    let sql = $sql.series.recommend.getComic
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