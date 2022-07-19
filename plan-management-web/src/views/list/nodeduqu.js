const http = require('http')
const serve = http.createServer()
const path = require('path')
const fs = require('fs')

serve.on('request', (req, res) => {
const url = req.url
console.log(url, 'url')
let fpath = ''
if (url === '/') {
    fpath = path.join(__dirname, './clock/index.html')
} else {
    fpath = path.join(__dirname, url)
}
fs.readFile(fpath, 'utf-8', (err, data) => {
    if (err) return res.end('404 Not found.')
    res.end(data)
})
})
serve.listen(1111, () => {
    console.log('127.0.0.1:1111')
})
