const http = require('http')

const serve = http.createServer()

serve.on('request', (req, res) => {
    console.log(req)
    // console.log(res)
})

serve.listen(8000, () => {
    console.log('server 已经启动 127.0.0.1:8000')
})
