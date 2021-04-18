// node 后端服务器
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router/router.js')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// 跨域请求处理
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, X_Requested_With')
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
    res.header('X-Powered-By', '3.2.1')
    if (req.method == 'OPTIONS') res.send(200)
    /*让options请求快速返回*/
    else next()
})

app.use(router)
// 监听端口
app.listen('3000', () => {
    console.log('Server is running, port 3000');
})