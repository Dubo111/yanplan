const http = require('http')
const serve = http.createServer()
serve.on('request', (req, res) => {
  const url = req.url
//   const methods = req.method
  // 解决中文乱码
  console.log(url, 'url')
  let content = '<h1>404 not found !</h1>'
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  if (url === '/' || url === '/index.html') {
    content = `<h1>首页<h1/>`
  } else if (url === '/about.html') {
    content = `<h1>关于页面<h1/>`
  }
//   const str = `Your request url:${url},类型：${methods}`
  //   浏览器响应
  res.end(content)
//   console.log(content)
})
serve.listen(8088, () => {
  console.log(' sercer http://127.0.0.1:8989')
})
