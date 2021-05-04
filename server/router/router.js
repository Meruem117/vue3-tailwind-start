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
// 剧情/历史
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
// 动作/悬疑
router.get('/getAction', (req, res) => {
    let sql = $sql.series.getAction
    conn.query(sql, function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            res.send(result);
        }
    })
})
router.get('/getActionRec', (req, res) => {
    let sql = $sql.series.recommend.getAction
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
// 生活/喜剧
router.get('/getLife', (req, res) => {
    let sql = $sql.series.getLife
    conn.query(sql, function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            res.send(result);
        }
    })
})
router.get('/getLifeRec', (req, res) => {
    let sql = $sql.series.recommend.getLife
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
// video
router.get('/getVideo', (req, res) => {
    let vid = req.query.vid
    let sql = `select v.video_id,v.name_cn,v.name_en,v.video_img,v.type,v.score,v.date,v.current_season,v.total_episode,v.length,v.heat,v.douban_url,v.imdb_url,v.summary,v.is_end,s.series_name,s.region,s.media,s.total_season from videos v join series s on s.series_id = v.series where v.video_id = '${vid}';`
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