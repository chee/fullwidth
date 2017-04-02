const http = require('http')
const fullwidth = require('fullwidth').default

http.createServer((request, response) => {
	const text = request.url
	response.writeHead(200, {'content-type': 'text/plain; charset=utf-8'})
	response.write(fullwidth(text.slice(1)))
	response.end()
}).listen(3456)
