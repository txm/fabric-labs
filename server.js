var finalhandler = require('finalhandler')
var serveStatic = require('serve-static')
var http = require('http')

var serve = serveStatic('htdocs', {'index': ['index.html', 'index.htm']})

this.server = http.createServer(function (req, res) {
  var done = finalhandler(req, res)
  serve(req, res, done)
})

exports.listen = function () {
  this.server.listen.apply(this.server, arguments)
}

exports.close = function (callback) {
  this.server.close(callback)
}

exports.port = 8492
