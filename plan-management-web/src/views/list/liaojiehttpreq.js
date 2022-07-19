const http = require('http')
const serve = http.createServer()
serve.on('request', (req, res) => {
  const url = req.url
  const methods = req.method
  // 解决中文乱码
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  const str = `Your request url:${url},类型：${methods}`
  //   浏览器响应
  res.end(str)
  console.log(str)
})
serve.listen(8989, () => {
  console.log(' sercer 127.0.0.1:8989')
})
